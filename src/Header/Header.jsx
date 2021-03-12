import React from 'react';
import logo from '../Images/logo.png';
import styled from 'styled-components';

const StyledHeader = styled.header`
    display : flex;
    justify-content : space-between;
    align-items : center;
    height : 140px;
    li , a {
        font-size : 24px;
        color : white;
        text-decoration : none;
    }

    li{
        list-style: none;
    }
`

const StyledLogo = styled.a`
    display : flex;
    align-items: center;
    img{
        width: 75px;
        height: 75px;
    }

    div{
        margin-left : 1rem;
    }
`

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
const Header = () => {
    return (
        <StyledHeader>
                    <StyledLogo href="/">
                        <img src={logo} alt="logo" />
                        <div>Make My Cuisine</div>
                    </StyledLogo>
                <StyledNav>
                    <ul>
                        <li><a href="/discover">Discover</a></li>
                        <li><a  href="/join">Join</a></li>
                        <li><a href="/Login">Login</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
            </StyledNav>
        </StyledHeader>
    )   
}

export default Header;