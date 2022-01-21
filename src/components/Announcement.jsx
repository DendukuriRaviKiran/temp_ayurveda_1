import React from 'react';
import styled from 'styled-components';
import { mobile } from "../response";
const Container = styled.div`
    height: 30px;
    background-color: teal;
    color:white;
    display:flex;
    align-items: center;
    justify-content: center;
    padding-top: 1px;
    padding-bottom: 1px;
    font-size:16px;
    font-weight:500;
    ${mobile({ width: "115%" })}
`

const Announcement = () => {
  return (
    <Container>
        Best place to buy Weed!!!!!
    </Container>
  )
};

export default Announcement;
