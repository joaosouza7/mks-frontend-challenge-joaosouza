import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 101px;
    background: #0f52ba;
    padding: 0 65px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 10px;

    color: #ffffff;
`;

export const HeadingH2 = styled.h2`
    font-weight: 600;
    line-height: 19px;
    font-size: 40px;

    text-transform: uppercase;
`;

export const HeadingP = styled.p`
    font-size: 20px;
    font-weight: 300;
    line-height: 19px;
`;
