import React from 'react'

function Slider(){
return(
<div>
    <div className="hero-banner" data-ride="carousel" data-pause="hover" data-interval="false">
        <div className="hero-img">
            <img src="../../assets/img/veges.jpeg" className="img-responsive" alt="" />
        </div>
        <div className="container">
            <div className="row">
                <div className="col col-md-6 col-sm-8">
                    <div className="content">
                        <h2>Confused?<br /> Find Awesome Recipe !</h2>
                        <p>Give your ingredients to us and we will give you finest way to utilise them.</p>
                        <form className="banner-form" data-animation="animated fadeInUp">
                            <div className="input-group">
                                <span className="input-group-btn">
                                    <button type="button" className="btn bg-success">Go & Search</button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="clearfix"></div>
</div>
);
}

export default Slider