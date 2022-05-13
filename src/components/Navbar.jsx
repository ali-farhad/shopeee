import React from 'react'
import styled from 'styled-components'

import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Container = styled.div`

`

const Wrapper = styled.div`
    padding: .5rem 1rem;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

`

const Left = styled.div`
    flex: 1;

    display: flex;
    align-items: center;
    
`
const Language = styled.span`
    font-size: 16px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    margin-left: 1rem;
    padding: .3rem;
    display: flex;
    align-items: center;
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
    justify-content: flex-end;
`

const MenuItem = styled.div`
    font-weight: 14px;
    cursor: pointer;
    margin-left: 1.2rem;
   
`


function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>ENG</Language>
                    <SearchContainer>
                        <Input/>
                        <Search style={{"Color": "lightgray", "fontSize": "16"}}/>
                    </SearchContainer>
                </Left>
                <Center>
                  <Logo>SHOPEEE.</Logo>
                </Center>
                <Right>
                    <MenuItem>SIGNUP</MenuItem>
                    <MenuItem>LOGIN</MenuItem>
                    <MenuItem>
                    <Badge badgeContent={4} color="primary">
      <ShoppingCartOutlinedIcon color="action" />
    </Badge>
                    </MenuItem>
                   
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar