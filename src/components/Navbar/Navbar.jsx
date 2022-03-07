import React from "react";
import {
    Container,
    Wrapper,
    Right,
    Left,
    Center,
    Language,
    SearchContainer,
    Input,
    Logo,
    MenuItem,
} from "./Navbar.style";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <BsSearch className="search" />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>Mega Store.</Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign In </MenuItem>
                    <MenuItem>
                        <AiOutlineShoppingCart size={24} />
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
