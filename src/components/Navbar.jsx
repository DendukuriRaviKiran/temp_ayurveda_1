import React from 'react';
import styled from 'styled-components';
import { Search } from '@material-ui/icons';
import Badge from '@mui/material/Badge/Badge';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
    height: 60px;
    
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
    display : flex;
    align-items: center;
`
const Language = styled.span `
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.span `
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
`

const Center = styled.div`
flex: 1;
text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
`

const Right = styled.div`
flex: 1;
display: flex;
align-items:center;
justify-content:flex-end;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-right: 25px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language> EN </Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color:"gray", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>HermitValley</Logo>
            </Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign In</MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined/>
                </Badge>
            </Right>
        </Wrapper>
    </Container>
  )
};

export default Navbar;
