import React,{useState,useEffect} from "react";
import fire from '../../firebase/fire'


const Login = (props)=>{

	const {email,setEmail,password,setPassword,handleLogin,handleSignup,hasAccount,setHasAccount,emailError,passwordError} = props;


    return(
        <div>
	<section class="inner-header-title loginImg" >
				<div class="container">
					<h1>Login</h1>
				</div>
			</section>
			<div class="clearfix"></div>


        <section class="tab-sec gray">
				<div class="container">
					<div class="col-lg-8 col-md-8 col-sm-12 col-lg-offset-2 col-md-offset-2">
						<div class="new-logwrap">
						
							
							
							<div class="form-group">
								<label>Email</label>
								<div class="input-with-icon">
									<input type="email" class="form-control" placeholder="Enter Your Email" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
									<i class="theme-cl ti-email"></i>
									<p style={{"color":"red"}}>{emailError}</p>
								</div>
							</div>
							
							<div class="form-group">
								<label>Password</label>
								<div class="input-with-icon">
									<input type="password" class="form-control" placeholder="Enter Your Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
									<i class="theme-cl ti-lock"></i>
									<p style={{"color":"red"}}>{passwordError}</p>
								</div>
							</div>
							
					
							
							<div class="form-groups">
								{hasAccount ? (
									<div>
									<button type="submit" class="btn btn-primary theme-bg full-width" onClick={handleLogin}>Login</button>
									<br/><p>Not Registered yet? <span onClick={()=>setHasAccount(!hasAccount)}>Register</span></p>
									</div>
								) : (
									<div>
									<button type="submit" class="btn btn-primary theme-bg full-width" onClick={handleSignup}>Signup</button>
									<br/><p>Already Registered ? <span onClick={()=>setHasAccount(!hasAccount)}>Login</span></p>
									</div>
								)}
							{/* <button type="submit" class="btn btn-primary theme-bg full-width">Login</button> */}
							</div>
							
						
						</div>
					</div>
				</div>
			</section>
            </div>
    );

}

export default Login