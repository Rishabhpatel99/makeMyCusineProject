import React from "react";
import styled from "styled-components";
import facebook from "../Images/facebook.svg"
import twitter from "../Images/twitter.svg"

const StyledFooter = styled.footer`
display : flex;
justify-content : space-between;
align-items : center;
height : 70px;
padding : 0 10px;
background-color : #EF8B70;
li , a {
    font-size : 24px;
    color : white;
    text-decoration : none;
}

li{
    list-style: none;
}`

const StyledNav = styled.nav`
    ul {
        display : flex;
        margin : 0;
        padding : 0;
        list-style : none;
    }

    a{
        text-decoration : none;
        padding : 1rem;
    }

    a:hover{
        color : black;
    }

    @media (max-width : 900px){
        ul {
            flex-direction : column;
            justify-content : center;
        }
       
    }
`

const StyledDiv = styled.div`
    display : flex;
    justify-content : space-between;
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledDiv>
        <StyledNav>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </StyledNav>
        <StyledNav>
          <ul>
            <li>
              <a href="#" className="social-link">
                <img src={twitter}></img>
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <img src={facebook}></img>
                Facebook
              </a>
            </li>
          </ul>
        </StyledNav>
      </StyledDiv>
    </StyledFooter>
  );
};

export default Footer;
