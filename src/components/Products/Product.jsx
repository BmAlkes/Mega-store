import React from "react";
import { Container, Image, Circle, Info, Icon } from "./Product.styled";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <AiOutlineShoppingCart />
                </Icon>
                <Icon>
                    <AiOutlineSearch />
                </Icon>
                <Icon>
                    <AiFillHeart />
                </Icon>
            </Info>
        </Container>
    );
};

export default Product;
