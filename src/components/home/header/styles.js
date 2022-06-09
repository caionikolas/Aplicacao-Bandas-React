import styled from "styled-components"

export const HeaderContainer = styled.header`
    background-color: #242B40;
    border-bottom: solid 2px #BCA3BF;
    padding: 0px;
    display: flex;
    align-items: center;
`;

export const LogoContainer = styled.header`
    width: 20%;
    transform: scale(.4);
    
    img {
        max-width: 100%;
        cursor: pointer;
    }
`;

export const Busca = styled.header`
    width: 65%;

    input {
        height: 35px;
        width: 35%;
        font-size: 16px;
        border-radius: 5px;
        border-style: none;
    }
`;