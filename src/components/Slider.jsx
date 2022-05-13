import React, { useState } from 'react';

import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

import {sliderItems} from "../data";

const Container = styled.div`
    width: 100%;
    height: 100vh;

    position: relative;

    display: flex;

    overflow: hidden;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;

    cursor: pointer;
    opacity: 0.8;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw) ;
    transition: transform .5s ease-in-out;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    /* pass # with props */
    background-color: ${props => `#` + props.bg};
`

const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
`

const Image = styled.img`
    max-width: 100%;
    height: 100vh;
    object-fit: cover;    

`

const InfoContainer = styled.div`
    flex: 1;
    padding: 1.5rem;
`

const Title = styled.h1`
    font-size: 5rem;
`
const Desc = styled.p`
    margin: 3rem 0;
    font-size: 1.3rem;
    letter-spacing: .2rem;
    font-weight: 500;
`
const Button = styled.button`
    padding: 1rem 2rem;
    background: transparent;
    cursor: pointer;
`

function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }

    };
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlinedIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (

               
                <Slide bg={item.bg}>
                    <ImageContainer >
                        <Image src={item.img}/>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>BUY NOW</Button>
                    </InfoContainer>
                </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlinedIcon />
            </Arrow>
        </Container>
    )
}

export default Slider