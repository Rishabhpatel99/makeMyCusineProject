import React from 'react'
import Ingredient from './Ingredient'

function RecipeSingle(porps){

		const checkSign = (sts)=>{
		if(sts){
		return(<i class="fa fa-check usedIngredient"></i>)
		}else{
		return(<i class="fa fa-times missedIngredient"></i>)
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

	{/* job detail */}
	<section>
		<div class="container">

			<div class="col-md-12 col-sm-12">
				<div class="container-detail-box">

					<div class="apply-job-header">
						<h4>Recipe</h4>
						<div className="img-recipe">
							<img className="img-responsive" src={porps.data[0].image} />
						</div>

						<p>
							<div dangerouslySetInnerHTML={{__html: porps.data[0].summary}} />
						</p>
					</div>



					<div class="apply-job-header">
						<h4>Ingredients</h4>

						
						{porps.data[0].extendedIngredients.map((item,index)=> {
							return <Ingredient data={item} index={index}/>
							// console.log(item);

						})}
					
						
						
					</div>



					<div class="apply-job-detail">
						<h5>Skills</h5>
						<ul class="skills">
							<li>Css3</li>
							<li>Html5</li>
							<li>Photoshop</li>
							<li>Wordpress</li>
							<li>PHP</li>
							<li>Java Script</li>
						</ul>
					</div>

					<div class="apply-job-detail">
						<h5>Requirements</h5>
						<ul class="job-requirements">
							<li><span>Availability</span> Hourly</li>
							<li><span>Education</span> Graduate</li>
							<li><span>Age</span> 25+</li>
							<li><span>Experience</span> Intermidiate (3 - 5Year)</li>
							<li><span>Language</span> English, Hindi</li>
						</ul>
					</div>

					<a href="job-detail-1.html#" class="btn btn-success">Apply For This Job</a>

				</div>

				<div class="job-detail-statistic flex-middle-sm">

					<div class="statistic-item flex-middle">
						<div class="icon text-theme">
							<i class="ti-headphone theme-cl"></i></div>
						<span class="text">+91 215 245 6584</span>
					</div>

					<div class="statistic-item flex-middle">
						<div class="icon text-theme">
							<i class="ti-email theme-cl"></i></div>
						<span class="text">jobstock@gmail.com</span>
					</div>

					<div class="statistic-item flex-middle">
						<div class="icon text-theme">
							<i class="ti-skype theme-cl"></i></div>
						<span class="text">themezhub</span>
					</div>

				</div>

			</div>


		</div>
	</section>


</div>

);
}

export default RecipeSingle