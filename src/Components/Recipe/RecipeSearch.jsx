import React from 'react'
import TopRecipe from '../Home/TopRecipe'
import Data from '../../data.json'

const RecipeSearch = ()=>{
    return(
        <div>
<section class="inner-header-title searchJob" >
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
								<div class="col-md-4 col-sm-4">
									<input type="text" class="form-control" placeholder="Keyword: Name, Tag" />
								</div>
								<div class="col-md-3 col-sm-3">
									<input type="text" class="form-control" placeholder="Location: City, State, Zip" />
								</div>
								<div class="col-md-3 col-sm-3">
									<select class="form-control" id="j-category">
										<option value="">&nbsp;</option>
										<option value="1">Information Technology</option>
										<option value="2">Mechanical</option>
										<option value="3">Hardware</option>
										<option value="4">Hospitality & Tourism</option>
										<option value="5">Education & Training</option>
										<option value="6">Government & Public</option>
										<option value="7">Architecture</option>
									</select>

								</div>
								<div class="col-md-2 col-sm-2">
									<button type="submit" class="btn btn-primary full-width">Filter</button>
								</div>
							</form>
						</div>
					</div>
					
                    <TopRecipe data = {Data}/> 
				


				</div>
			</section>
            </div>
    );
}


export default RecipeSearch