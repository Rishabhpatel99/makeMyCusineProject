import React from 'react';
import hero from '../../Images/hero.png';
import fridgejpg from '../../Images/fridgejpg.jpg';
import styled from 'styled-components';

const StyledButtonLink = styled.a`
    color : white;
    background-color : #92A742;
    padding : .75rem 1.5rem;
    border-radius : 1.563rem;
    text-decoration: none;
    font-size: 1.5rem;
`

const StyledHeroSection = styled.section`
    display :flex;
    align-items: stretch;
    justify-content: space-between;
    flex-grow: 1;

    @media (max-width : 900px){
        justify-content : center;
    }
`

const StyledImageDiv = styled.div`
    flex-grow : 1;
    flex-direction : column;
    display : flex;
    align-items: stretch;
    justify-content: flex-end

    img{
        flex-grow : 1;
        max-height : 70vh;
        min-width : 30vw;
        backgroud-size : contain;
        background-repeat : no-repeat;
        background-postion : bottom-left;
    }

    @media (max-width : 900px){
        display : none;
    }
`

const StyledCallToActionDiv = styled.div`
    display: flex;
    flex-direction : column;
    align-items: flex-start;
    margin : 1rem;
    align-self : center;
`


const Hero = () => {
    return (
        <StyledHeroSection>
            <StyledImageDiv>
                <img src={hero} alt="not found"></img>
            </StyledImageDiv>
            <StyledCallToActionDiv>
                <h1 className="title">
                    Cook Like Chef
                </h1>
                <span className="sub-title">
                search engine that finds recipes you can make with the ingredients you currently have at home.
                </span>
                <StyledButtonLink href="https://google.com" rel="noreferrer" target="_blank">
                    Join Now
                </StyledButtonLink>
            </StyledCallToActionDiv>
        </StyledHeroSection>
    )
}

export default Hero;