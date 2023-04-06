import React from 'react'
import styled, { css } from 'styled-components';
import BgPrincipalImage from '../assets/images/automobile-g2c0006094_1920.jpg'

const Root = styled.div`
    color: #fff;
    ${props => css`
        background: url(${props.image}), rgba(0, 0, 0, 0.5);
        background-size: cover;
        background-position: center;
        background-blend-mode: overlay;
    `}
    
`

const Title = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700&display=swap');
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    letter-spacing: 2;
`

const Content = styled.div`
    p, li{
        font-size: 20px;
        font-weight: 300;
    }

    ul{
        list-style: none;
        padding-left: 0;
    }

    li{
        &::before{
            content: "\\2713\\0020"
        }
    }
`

const Hero = ({image, title, children}) => (
    <Root image={BgPrincipalImage}>
        <div>
            <Title>{title}</Title>
            <Content>
                {children}
            </Content>
        </div>
    </Root>
);

export default Hero;
