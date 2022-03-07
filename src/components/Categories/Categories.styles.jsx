import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;

    ${mobile({ flexDirection: "column", padding: "0px" })}
`;

export { Container };
