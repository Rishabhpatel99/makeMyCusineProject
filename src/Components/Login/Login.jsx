import React from 'react';
import styled from 'styled-components';

const StyledLoginMainSection = styled.section`
    display :flex;
    padding-top : 5vh;
    padding-bottom : 13vh;
    justify-content: space-between;
    flex-wrap: wrap;  
`
const StyledContentSection = styled.section`
    display :flex;
    align-items: center;   
    justify-content: center;
    flex-grow: 1;
`

const StyledFormSection = styled.section`
    display :flex;
    align-items: center;   
    justify-content: center;
    flex-grow: 1;
`

const Login = () => {

  return (
     <StyledLoginMainSection id="Login">
        <StyledContentSection>
            <div>
              <h1 class="login-text">Let's 
              <label class = "accent-text"> COOK</label> 
              <br/><span> something up</span>
              </h1>
            </div>
        </StyledContentSection>

        <StyledFormSection>
          <form class="login-form">
              <div class="input-group">
                <label>Email:</label>
                <input type="email"></input>
              </div>
              <div class="input-group">
                <label>Password:</label>
                <input type="password"></input>
              </div>
              <div class="input-group">
                <button type="submit" class="btn">Login</button>
              </div>
              <div class="input-group">
                <a href="/join">New User/ Register</a>
              </div>
          </form>
      </StyledFormSection> 
      
    </StyledLoginMainSection>
  );
}

export default Login;
