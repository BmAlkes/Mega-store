import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "90px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({
        padding: "10px",
        flexDirection: "column",
        JustifyContent: "center",
        alignItems: "center",
    })}
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ${mobile({ JustifyContent: "center" })}
`;
const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({ display: "none" })}
    .search {
        color: lightgray;
        font-size: 18px;
    }
`;
const Input = styled.input`
    border: none;
`;
const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    ::first-letter {
        color: #76aa76;
    }
    &&:nth-child(odd) {
        color: #282b29;
    }
    ${mobile({ fontSize: "24px" })}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "16px" })}
`;

export {
    Container,
    Wrapper,
    Left,
    Right,
    Center,
    Language,
    SearchContainer,
    Input,
    Logo,
    MenuItem,
};
