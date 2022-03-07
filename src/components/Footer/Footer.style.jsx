import styled from "styled-components";

const Container = styled.footer`
    display: flex;
    @media (max-width: 380px) {
        flex-direction: column;
    }
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo = styled.h1`
    &::first-letter {
        color: #76aa76;
    }
`;
const Description = styled.p`
    margin: 20px 0px;
`;
const SocialContent = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
    &::first-letter {
        color: #76aa76;
    }
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 3px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img``;

export {
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
};
