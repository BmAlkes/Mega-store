import React from "react";
import {
    Container,
    Left,
    Center,
    Right,
    Logo,
    Description,
    SocialContent,
    SocialIcon,
    Title,
    List,
    ListItem,
    ContactItem,
    Payment,
} from "./Footer.style";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Mega Store.</Logo>
                <Description>
                    There are many variations of passages of Lorem Ipsum
                    available,but the majory have suffered alteration in some
                    form, by injected humor, or ramdomised words which dont look
                    even slightly believable.
                </Description>
                <SocialContent>
                    <SocialIcon color="3b5999">
                        <AiFillFacebook fontSize={30} />
                    </SocialIcon>
                    <SocialIcon color="55acee">
                        <AiFillTwitterCircle fontSize={40} />
                    </SocialIcon>
                    <SocialIcon color="E4405f">
                        <AiFillInstagram fontSize={30} />
                    </SocialIcon>
                    <SocialIcon color="000">
                        <AiFillGithub fontSize={50} />
                    </SocialIcon>
                </SocialContent>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Acessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Orders Tracking</ListItem>
                    <ListItem>WishList</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <MdLocationOn
                        fontSize={20}
                        style={{ marginRight: "10px" }}
                    />
                    Dizingoff 39, Tel Aviv - Israel
                </ContactItem>
                <ContactItem>
                    <AiFillPhone
                        fontSize={20}
                        style={{ marginRight: "10px" }}
                    />
                    +972 3 54367877
                </ContactItem>
                <ContactItem>
                    <MdAlternateEmail
                        fontSize={20}
                        style={{ marginRight: "10px" }}
                    />
                    contact@megastore.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
};

export default Footer;
