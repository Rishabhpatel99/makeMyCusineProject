import React from "react";
import { useHistory } from "react-router-dom";

function Slider() {
    const history = useHistory();
    const searchRecipe = () => {
        if (localStorage.getItem("userId")) {
            return history.push("./search");
        }
        return history.push("./login");
    };
    return (
        <div>
            <div
                className="hero-banner"
                data-ride="carousel"
                data-pause="hover"
                data-interval="false"
            >
                <div className="hero-img">
                    <img
                        src="../../assets/img/veges.jpeg"
                        className="img-responsive"
                        alt=""
                    />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col col-md-6 col-sm-8">
                            <div className="content">
                                <h3>Confused?</h3>
                                <h2>Find Awesome Recipe !</h2>
                                <p>
                                    Give your ingredients to us and we will give you finest way to
                                    utilise them.
                </p>
                                <form
                                    className="banner-form"
                                    data-animation="animated fadeInUp"
                                >
                                    <div className="input-group">
                                        <span className="input-group-btn">
                                            <button
                                                type="button"
                                                onClick={searchRecipe}
                                                className="btn bg-success"
                                            >
                                                Go & Search</button>
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

export default Slider;
