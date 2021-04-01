import React, { useEffect, useState } from "react";
import Ingredient from "./Ingredient";
import { fetchRecipeDataByid , getRecipeSteps } from "../../api/index";
import { saveRecipe, getSavedRecipesById } from "../../api/saveRecipe"

function RecipeSingle(props) {
	const [recipeData, setRecipeData] = useState({});
	const [recipeStepsData , setRecipeStepsData] = useState([]);
	const [isRecipeSaved, setIsRecipeSaved] = useState(false);

	useEffect(()=>{
		if(localStorage.getItem('savedRecipeData')){
			const savedRecipedata = localStorage.getItem('savedRecipeData');
			if(savedRecipedata.includes(props.location.state.id)){
				setIsRecipeSaved(true)
			}
		}
	},[props.location.state.id])

	useEffect(() => {
		const getData = async (id) => {
			const savedData = await getSavedRecipesById(id);
			localStorage.setItem('savedRecipeData', savedData)
		}
		getData(localStorage.getItem("userId"));
	}, [])

	useEffect(() => {
		//get single recipe data
		const fetchSingleRecipeData = async (recipeId) => {
			const singleRecipeData = await fetchRecipeDataByid(recipeId);
			const singleRecipeStepsData = await getRecipeSteps(recipeId);
			if (singleRecipeData && singleRecipeStepsData) {
				setRecipeData(singleRecipeData);
				setRecipeStepsData(singleRecipeStepsData);
			}
		};
		fetchSingleRecipeData(props.location.state.id);

		return function cleanup() {
			setRecipeData({})
		};

	}, []);

	const checkSign = (sts) => {
		let checkSign = sts
			? "fa fa-check usedIngredient"
			: "fa fa-times missedIngredient";
		return <i className={checkSign}></i>;
	};


	const saveRecipeforUser = async () => {
		if (localStorage.getItem("userId")) {
			setIsRecipeSaved(saveRecipe(recipeData, localStorage.getItem("userId")));
		}
	}

	// if (save === true && localStorage.getItem("userId")) {
	// 	setIsRecipeSaved(saveRecipe(recipeData , localStorage.getItem("userId")))
	// 	setSave(false)
	// }


	return (
		<div>
			{recipeData && (
				<div>
					<section className="inner-header-page">
						<div className="container">
							<div className="col-md-8">
								<div className="left-side-container">
									<div className="header-details">
										<h4>{recipeData.title}</h4>
										<ul>
											<li>
												<a href="#">
													<i className="fa fa-user"></i> {recipeData.servings}{" "}People Serving
                        </a>
											</li>
											<li>
												<a href="">
													<i className="fas fa-clock"></i> Ready in{" "}
													{recipeData.readyInMinutes}Minutes{" "}
												</a>
											</li>
											<li>
												<div className="verified-action">Verified</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-md-4 bl-1 br-gary">
								<div className="right-side-detail">
									<ul>
										<li>
											<span className="detail-info">Vegetarian </span>
											{checkSign(recipeData.vegetarian)}
										</li>
										<li>
											<span className="detail-info">Vegan</span>
											{checkSign(recipeData.vegan)}
										</li>
										<li>
											<span className="detail-info">Glutan Free</span>
											{checkSign(recipeData.glutenFree)}
										</li>
										<li>
											<span className="detail-info">Dairy Free</span>
											{checkSign(recipeData.dairyFree)}
										</li>
									</ul>
								</div>
							</div>
						</div>
					</section>
					<div className="clearfix"></div>
					{/* recipe detail */}
					<section>
						<div className="container">
							<div className="col-md-12 col-sm-12">
								<div className="container-detail-box">
									<div className="apply-job-header">
										<h4>Recipe</h4>
										<br />
										<div className="img-recipe">
											<img
												className="img-responsive"
												alt="404"
												src={recipeData.image}
											/>
										</div>
										<br />
										<p>
											<div
												dangerouslySetInnerHTML={{ __html: recipeData.summary }}
											/>
										</p>
									</div>
									<div className="apply-job-header">
										<h4>Ingredients</h4>
										<br />
										{recipeData.extendedIngredients && recipeData.extendedIngredients.map((item, index) => {
											return <Ingredient data={item} index={index} />;
										})}
									</div>
									{ recipeStepsData && console.log('dataaaasdsadsadasd isss sett',recipeStepsData)}
									<button onClick={saveRecipeforUser} className="btn btn-primary">
										{isRecipeSaved ? 'Saved' : 'Save This Recipe'}</button>

								</div>
							</div>
						</div>
					</section>
				</div>
			)}
		</div>
	);
}

export default RecipeSingle;
