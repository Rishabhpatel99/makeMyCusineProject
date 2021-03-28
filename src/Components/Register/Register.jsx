import React from "react";


const Register = ()=>{
    return(
        <div>
	<section class="inner-header-title loginImg" >
				<div class="container">
					<h1>Register</h1>
				</div>
			</section>
			<div class="clearfix"></div>


        <section class="tab-sec gray">
				<div class="container">
					<div class="col-lg-8 col-md-8 col-sm-12 col-lg-offset-2 col-md-offset-2">
						<div class="new-logwrap">
						
							<div class="form-group">
								<label>Name</label>
								<div class="input-with-icon">
									<input type="text" class="form-control" placeholder="Enter Your Name" />
									<i class="theme-cl ti-user"></i>
								</div>
							</div>
							
							<div class="form-group">
								<label>Email</label>
								<div class="input-with-icon">
									<input type="email" class="form-control" placeholder="Enter Your Email" />
									<i class="theme-cl ti-email"></i>
								</div>
							</div>
							
							<div class="form-group">
								<label>Password</label>
								<div class="input-with-icon">
									<input type="password" class="form-control" placeholder="Enter Your Password" />
									<i class="theme-cl ti-lock"></i>
								</div>
							</div>
							
							<div class="register-account text-center">
								By hitting the <span class="theme-cl">"Register"</span> button, you agree to the <a class="theme-cl" href="login.html#">Terms conditions</a> and <a class="theme-cl" href="login.html#">Privacy Policy</a>
							</div>
							
							<div class="form-groups">
								<button type="submit" class="btn btn-primary theme-bg full-width">Register</button>
							</div>
							
						
						</div>
					</div>
				</div>
			</section>
            </div>
    );

}

export default Register