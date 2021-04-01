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
							<img src="assets/img/mmcnewlogo.png" className="logo logo-scrolled logo-home" alt="" />
						</a>
                        
					</div>
                    
                    <div className="collapse navbar-collapse" id="navbar-menu">
                    <ul className="nav navbar-nav navbar-left" data-in="fadeInDown" data-out="fadeOutUp">
                        <li><a href="/">Home</a></li>
                        {/* <li><a href="#">About Us</a></li> */}
                        <li><a href="index.html">Contact Us</a></li>
                        <li><a href="/search">Find Your Recipe</a></li>

 
                    </ul>

                    <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
							<li><a href="/login"><i className="fa fa-pencil" aria-hidden="true"></i>Sign In </a></li>
							{/* <li className="left-br"><a href="/register"  className="signin">Sign Up Now</a></li> */}
						</ul>
                    </div>

    </div>

</nav>
<div className="clearfix"></div>
</div>


);


}

export default Header