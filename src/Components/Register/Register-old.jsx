import React from 'react';
import styled from 'styled-components';

const StyledRegisterMainSection = styled.section`
    display :flex;
    padding-top : 5vh;
    padding-bottom : 5vh;
    justify-content: space-between; 
`
const StyledContentSection = styled.section`
    display :flex;
    align-items: center;   
    justify-content: center;
    flex-grow: 1;
    @media(max-width:500px){
        width:100%
    }
    @media(min-width:500px){
        width:35%
    }
`

const StyledFormSection = styled.section`
    display :flex;
    align-items: center;   
    justify-content: center;
    flex-grow: 1;
    @media(max-width:500px){
        width:100%
    }
    @media(min-width:500px){
        width:50%
    }
`

const Register = () => {

  return (
     <StyledRegisterMainSection id="Register">
        <StyledContentSection>
            <div>
              <h1 class="login-text">You are just <br/>one click <br/>away from <br/>
              <label class = "accent-text"> 1000+ <br/>RECEPIES.</label>               
              </h1>
            </div>
        </StyledContentSection>

        <StyledFormSection>
          <form class="login-form">
              <div class="input-group">
                <label>Full name:</label>
                <input type="text"></input>
              </div>
              <div class="input-group">
                <label>Email:</label>
                <input type="email"></input>
              </div>
              <div class="input-group">
                <label>Password:</label>
                <input type="password"></input>
              </div>
              <div class="input-group">
                <label>Confirm Password:</label>
                <input type="password"></input>
              </div>
              <div class="input-group">
                <button type="submit" class="btn">Register</button>
              </div>
              <div class="input-group">
                <a href="/login">Already Have an Account?</a>
              </div>             
          </form>
      </StyledFormSection> 
      
    </StyledRegisterMainSection>
  );
}

export default Register;
