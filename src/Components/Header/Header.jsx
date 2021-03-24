import React from 'react'

function Header(){

return(


<div>
<nav className="navbar navbar-default navbar-fixed navbar-light white bootsnav">

    <div className="container">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
						<i className="fa fa-bars"></i>
					</button>
					
					<div className="navbar-header">
						<a className="navbar-brand" href="index.html">
							<img src="assets/img/logo.png" className="logo logo-scrolled" alt="" />
						</a>
					</div>
                    
                    <div className="collapse navbar-collapse" id="navbar-menu">
                    <ul className="nav navbar-nav navbar-left" data-in="fadeInDown" data-out="fadeOutUp">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="index.html">About Us</a></li>
                        <li><a href="index.html">Contact Us</a></li>
                        <li><a href="index.html">Find Your Recipe</a></li>

 
                    </ul>

                    <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
							<li><a href="login.html"><i className="fa fa-pencil" aria-hidden="true"></i>SignUp</a></li>
							<li className="left-br"><a href="javascript:void(0)"  data-toggle="modal" data-target="#signup" className="signin">Sign In Now</a></li>
						</ul>
                    </div>

    </div>

</nav>
<div className="clearfix"></div>
</div>


);


}

export default Header