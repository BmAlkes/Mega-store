import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5)
        ),
        url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
            center center no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
`;
const Title = styled.h1`
    font-size: 2rem;
    font-weight: 300;
    padding: 20px;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 10px 0px;
    padding: 10px;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Button = styled.button`
    width: 50%;
    margin: 10px auto;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    font-size: 1.3rem;
    cursor: pointer;
`;
const Link = styled.a`
    margin: 5px 0px;
    font-size: 15px;
    cursor: pointer;
    text-decoration: underline;
`;

export { Container, Wrapper, Title, Input, Form, Button, Link };
