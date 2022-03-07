import React from "react";
import Annoucement from "../../components/Annoucement/Annoucement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import {
    Container,
    Wrapper,
    ImgContainer,
    Img,
    InfoContainer,
    Title,
    Desc,
    Price,
    FilterContainer,
    Filter,
    FilterTitle,
    FilterColor,
    FilterSize,
    FilterSizeOptions,
    AddContainer,
    AmountContainer,
    Amount,
    Button,
} from "./Product.styles";

import { BiAddToQueue } from "react-icons/bi";
import { BiMessageSquareMinus } from "react-icons/bi";

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Annoucement />
            <Wrapper>
                <ImgContainer>
                    <Img src="https://images.unsplash.com/photo-1475178626620-a4d074967452?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1286&q=80" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus praesentium officia vitae placeat
                        eveniet, quam ipsum nobis debitis maxime doloribus sequi
                        quae qui cumque labore error voluptatum sunt quidem
                        necessitatibus.
                    </Desc>
                    <Price>$20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOptions>XS</FilterSizeOptions>
                                <FilterSizeOptions>S</FilterSizeOptions>
                                <FilterSizeOptions>M</FilterSizeOptions>
                                <FilterSizeOptions>L</FilterSizeOptions>
                                <FilterSizeOptions>XL </FilterSizeOptions>
                                <FilterSizeOptions>XLL </FilterSizeOptions>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <BiMessageSquareMinus
                                fontSize={30}
                                style={{ marginRight: "10px" }}
                            />
                            <Amount>1</Amount>
                            <BiAddToQueue
                                fontSize={30}
                                style={{ marginLeft: "10px" }}
                            />
                        </AmountContainer>
                        <Button>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default Product;
