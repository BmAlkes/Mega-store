import React from "react";
import {
    Container,
    Wrapper,
    Title,
    Form,
    Input,
    Agreement,
    Button,
} from "./Register.style";

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create an Account</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="Email" />
                    <Input placeholder="UserName" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm Password" />
                    <Agreement>
                        by creating an account, I consent to processing of my
                        personal data om accordance with the{" "}
                        <b>Privacy Policy</b>
                    </Agreement>
                    <Button>Create account</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;
