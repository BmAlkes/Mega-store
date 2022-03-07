import styled from "styled-components";

const Container = styled.div`
    height: 40vh;
    background: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 70px;
    margin: 20px;
`;
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    border: 1px solid gray;
`;
const Input = styled.input`
    flex: 8;
    border: none;
    padding-left: 20px;

    &::placeholder {
        text-align: center;
        font-size: 18px;
    }
`;
const Button = styled.button`
    flex: 2;
    border: none;
    background-color: teal;
    color: white;
    font-size: 1.5rem;
`;

export { Container, Title, Description, InputContainer, Button, Input };
