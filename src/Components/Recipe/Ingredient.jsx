import React from 'react'


function Ingredient(props){
return(
<div class="item-click">
    <article>
        <div class="brows-company">
            <div class="col-md-2 col-sm-2">
                <div class="item-fl-box">
                    <div class="brows-company-name">
                        <h4>{props.index + 1}</h4>

                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div class="brows-company-pic">
                        <img src={"https://spoonacular.com/cdn/ingredients_100x100/"+props.data.image}
                            class="img-responsive" alt="" />
                    </div>

                </div>
            </div>
            <div class="col-md-8 col-sm-8">

                <p>{props.data.originalString}</p>

            </div>

        </div>
    </article>
</div>
);
}

export default Ingredient