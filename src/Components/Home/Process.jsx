import React from 'react'

function Process(){

    return(
        <section class="how-it-works">
        <div class="container">
            
            <div class="row" data-aos="fade-up">
                <div class="col-md-12">
                    <div class="main-heading">
                        <p>Working Process</p>
                        <h2>How It <span>Works</span></h2>
                    </div>
                </div>
            </div>
            
            <div class="row">
            
                <div class="col-md-4 col-sm-4">
                    <div class="working-process">
                        <span class="process-img">
                            <img src="assets/img/step-1.png" class="img-responsive" alt="" />
                            <span class="process-num">01</span>
                        </span>
                        <h4>Create An Account</h4>
                        <p>Search different recipe and to save you need to create account.</p>
                    </div>
                </div>
                
                <div class="col-md-4 col-sm-4">
                    <div class="working-process">
                        <span class="process-img">
                            <img src="assets/img/step-2.png" class="img-responsive" alt="" />
                            <span class="process-num">02</span>
                        </span>
                        <h4>Search Recipe</h4>
                        <p>Select ingredients you have and search all possible recipes with use of that ingredients.</p>
                    </div>
                </div>
                
                <div class="col-md-4 col-sm-4">
                    <div class="working-process">
                        <span class="process-img">
                            <img src="assets/img/step-3.png" class="img-responsive" alt="" />
                            <span class="process-num">03</span>
                        </span>
                        <h4>Save & Use in future</h4>
                        <p>By creating personalised account, can save searched recipes and ingredients list.</p>
                    </div>
                </div>
                
            </div>
            
        </div>
    </section>
    );
}

export default Process