import React, { useState } from 'react';
import styled from 'styled-components';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import { sliderItems } from '../data';
import { mobile } from "../response";
const Container = styled.div`
    width:100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })}
    
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display:flex;
    align-items: center;
    justify-content:center;
    position: absolute;
    top: 0;
    bottom: 0;
    left:${props => props.direction === "left" && "10px"};
    right:${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.7;
    z-index:2;
`

const Wrapper = styled.div`
    height: 100%;
    display:flex;
    transition: all 1.5s ease;
    transform:translateX(${props=>props.slideIndex * -100}vw)
`

const Slide = styled.div`
    width: 100vw;
    height:100vh;
    display:flex;
    align-items:center;
    background-color: #${props=>props.bg}
`


const ImgContainer = styled.div`
    height:100%;    
    flex:1;

`
const Image = styled.img`
    height:${props=>props.size}%;
    width: ${props=>props.widthi}px;
`
const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
`

const Title = styled.h1`
    font-size:45px;
`
const Description = styled.p`
    margin:50px 0px;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 15px;
    border: none;
    cursor:pointer;
    background: #fb641b;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    border-radius: 5px;
    color: #fff;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
     if(direction === "left"){
         setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
     }
     else{
         setSlideIndex(slideIndex < 2 ? slideIndex+1: 0)
     }
    };
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ChevronLeftOutlinedIcon/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
        { sliderItems.map(item=> (    
            <Slide bg={item.bg}>
                <ImgContainer>
                    <Image src={item.img} size={item.size} widthi={item.width}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.desc}</Description>
                    <Button>Shop Now</Button>
                </InfoContainer>
            </Slide>
        ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ChevronRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
};

export default Slider;
