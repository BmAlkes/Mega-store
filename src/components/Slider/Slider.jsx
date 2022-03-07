import React, { useState } from "react";
import {
    Container,
    Arrow,
    Wrapper,
    ImgContainer,
    InfoContainer,
    Image,
    Slide,
    Title,
    Description,
    Button,
} from "./Slider.style";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { sliderItems } from "../../data";

const Slider = () => {
    const [slideIndex, setSliderIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSliderIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSliderIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <AiOutlineArrowLeft />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <AiOutlineArrowRight />
            </Arrow>
        </Container>
    );
};

export default Slider;
