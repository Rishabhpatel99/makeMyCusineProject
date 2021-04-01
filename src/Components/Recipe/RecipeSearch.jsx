import React, { useState } from "react";
import RecipeResult from "./RecipeResult";
import ingredientsData from "../../api/ingredients";
import { fetchRecipeData } from "../../api/index";

import Select from "react-select";

const customStyles = {
	control: (base) => ({
		...base,
		height: 50,
	}),
};

const RecipeSearch = () => {
	const [ingredients, setingredients] = useState({});
	const [recipeData, setRecipeData] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const fetchApiData = async () => {
			const fetchedRecipeData = await fetchRecipeData(ingredients);
			setRecipeData(fetchedRecipeData);
		};
		fetchApiData();
	};

	const handleChange = (selectedOptions) => {
		setingredients(selectedOptions);
	};

	return (
		<div className="recipe-search">
			<section class="inner-header-title searchJob">
				<div class="container">
					<h1>Search Recipe</h1>
				</div>
			</section>
			<div class="clearfix"></div>
			<section class="browse-company">
				<div class="container">
					<div class="row extra-mrg">
						<div class="wrap-search-filter">
							<form>
								<div class="col-md-10 col-sm-10">
									<Select
										id="searchbtn"
										isMulti
										name="colors"
										options={ingredientsData}
										className="basic-multi-select"
										onChange={handleChange}
										classNamePrefix="select"
										styles={customStyles}
									/>
								</div>
								<div class="col-md-2 col-sm-2">
									<button
										type="submit"
										onClick={handleSubmit}
										class="btn btn-primary full-width"
									>
										Search</button>
								</div>
							</form>
						</div>
					</div>
					{console.log(recipeData)}
					<div className="row">
						<div class="row extra-mrg">
							{recipeData.length > 0 &&
								recipeData.map((recipe) => {
									return <RecipeResult key={recipe.id} data={recipe} />;
								})}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default RecipeSearch;
