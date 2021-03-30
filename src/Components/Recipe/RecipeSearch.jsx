// import React from 'react'
import TopRecipe from '../Home/TopRecipe'
import Data from '../../data.json'
import RecipeResult from './RecipeResult'
// import Select from 'react-select';
// import 'react-select/dist/css/react-select.css';

import React, { Component } from 'react'
import Select from 'react-select'

const options = [
{ value: 'chocolate', label: 'Chocolate' },
{ value: 'strawberry', label: 'Strawberry' },
{ value: 'vanilla', label: 'Vanilla' }
]


const customStyles = {
control: base => ({
...base,
height: 50

})
};

const RecipeSearch = ()=>{


return(
<div>
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

							<Select id="searchbtn" isMulti name="colors" options={options}
								className="basic-multi-select" classNamePrefix="select" styles={customStyles} />
						</div>
						<div class="col-md-2 col-sm-2">
							<button type="submit" class="btn btn-primary full-width">Search</button>
						</div>
					</form>
				</div>
			</div>

			<RecipeResult data={Data} />


		</div>
	</section>
</div>
);
}


export default RecipeSearch