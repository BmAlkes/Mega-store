import React from "react";
import {
    Container,
    Wrapper,
    Title,
    Form,
    Input,
    Button,
    Link,
} from "./Login.style";
import Navbar from "../../components/Navbar/Navbar";

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create an Account</Title>
                <Form>
                    <Input placeholder="UserName" />
                    <Input placeholder="Password" />

                    <Button>Login</Button>
                    <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;
