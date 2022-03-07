import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Img = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "60vh" })}
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;
const Title = styled.h1`
    font-weight: 200;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
    font-size: 40px;
    font-weight: 200;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 10px;
`;
const FilterSizeOptions = styled.option``;

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Button = styled.button`
    padding: 15px;
    border: 3px solid teal;
    background-color: white;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 500;
    border-radius: 30px;
    margin-left: 10px;
    transition: all 0.5s ease;

    &:hover {
        background-color: #c8e7ec;
    }
`;

export {
    Container,
    Wrapper,
    ImgContainer,
    Img,
    InfoContainer,
    Title,
    Desc,
    Price,
    FilterContainer,
    Filter,
    FilterTitle,
    FilterColor,
    FilterSize,
    FilterSizeOptions,
    AddContainer,
    AmountContainer,
    Amount,
    Button,
};
