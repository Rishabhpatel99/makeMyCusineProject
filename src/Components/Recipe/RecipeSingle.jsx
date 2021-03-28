import React from 'react'
import Ingredient from './Ingredient'

function RecipeSingle(porps){

		const checkSign = (sts)=>{
		if(sts){
		return(<i className="fa fa-check usedIngredient"></i>)
		}else{
		return(<i className="fa fa-times missedIngredient"></i>)
		}
		}

		var ingredients = []


		

		//  Array.from({length: porps.data[0].extendedIngredients.length}, (item, index) => 
  		// 			ingredients +=	<Ingredient data={porps.data[0].extendedIngredients[index]}/>

		// 	);


return(
<div>
	<section className="inner-header-page">
		<div className="container">

			<div className="col-md-8">
				<div className="left-side-container">

					<div className="header-details">
						<h4>{porps.data[0].title}</h4>
						{/* <p>{checkSign("hi")}</p> */}
						<ul>
							<li><a href="#"><i className="fa fa-user"></i> {porps.data[0].servings} People Serving</a>
							</li>
							<li><a href=""><i className="fas fa-clock"></i> Ready in {porps.data[0].readyInMinutes}
									Minutes </a></li>


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
						<li><span className="detail-info">Vegetarian </span>{checkSign(porps.data[0].vegetarian)}</li>
						<li><span className="detail-info">Vegan</span>{checkSign(porps.data[0].vegan)}</li>
						<li><span className="detail-info">Glutan Free</span>{checkSign(porps.data[0].glutenFree)}</li>
						<li><span className="detail-info">Dairy Free</span>{checkSign(porps.data[0].dairyFree)}</li>

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
							<img className="img-responsive" src={porps.data[0].image} />
						</div>
						<br />
						<p>
							<div dangerouslySetInnerHTML={{__html: porps.data[0].summary}} />
						</p>
					</div>



					<div className="apply-job-header">
						<h4>Ingredients</h4>
						<br />
						
						{porps.data[0].extendedIngredients.map((item,index)=> {
							return <Ingredient data={item} index={index}/>
							// console.log(item);

						})}
					
						
						
					</div>



					

					<a href="job-detail-1.html#" className="btn btn-success">Save This Recipe</a>

				</div>

				
			</div>


		</div>
	</section>


</div>

);
}

export default RecipeSingle