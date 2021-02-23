import React from 'react';
import logo from '../../Images/logo.png';
import styled from 'styled-components';

const steps = [{
    num : 1,
    step : "Select Ingredients",
    image : 'logo'
},{
    num : 2,
    step : "Select Ingredients",
    image : 'logo'
},{
    number : 3,
    step : "Select Recipie",
    image : 'logo'
}]

const StyledSection = styled.section`
    display : flex;
    flex-direction:column;
    margin-top : 10vh;
    span{
        margin-bottom : 5vh;
        display : flex;
        align-items: center;
        justify-content: center;
    }
`

const StyledDivContainer = styled.div`
    display:flex;
    justify-content: space-between;
    border: 5px solid red;
    padding 0vw 15vw;
    div{
        display : block;
        border: 5px solid red;
    }
`


const Discover = () =>{
    return (
        <StyledSection id="discover">
            <span className="title">Decide in 3 easy steps</span>
            {steps && steps.map(({num , step , image}) =>{
                console.log(num , step , image);
                return (
                    <StyledDivContainer>
                        <img src={logo} alt="Sdsd"></img>
                        <div>
                            <h1 className="title">Step {num}</h1>
                            <h1 className="sub-title">{step}</h1> 
                        </div>
                    </StyledDivContainer>
                )
            })}
        </StyledSection>
    )
}

export default Discover;