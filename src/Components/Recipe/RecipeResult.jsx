import React from 'react'


const RecipeResult = ({ data }) => {
    return (
        <div>
            <div class="col-md-4 col-sm-6">
                <div class="grid-view brows-job-list">
                    <div class="card-img-top">
                        <img src={data.image} class="img-responsive" alt="" />
                    </div>
                    <div class="brows-job-position">
                        <h3><a href="job-detail.html">{data.title}</a></h3>
                    </div>
                    <div class="job-position">
                        <span class="job-num"><i class="fa fa-heart"></i> {data.likes}</span>
                    </div>

                    <ul class="grid-view-caption">
                        <li>
                            <p className="usedIngredient"><i class="fa fa-check"></i>Used Ingredient : {data.usedIngredientCount} </p>
                        </li>
                        <li>
                            <p className="missedIngredient"><i class="fa fa-times"></i>Missed Ingredient : {data.missedIngredientCount} </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default RecipeResult