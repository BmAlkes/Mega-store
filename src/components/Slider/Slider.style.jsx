import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;
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
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.7;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 2s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.bg};
`;
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`;
const Image = styled.img`
    height: 80%;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`;
const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

export {
    Container,
    Arrow,
    Wrapper,
    ImgContainer,
    Slide,
    Image,
    InfoContainer,
    Title,
    Description,
    Button,
};
