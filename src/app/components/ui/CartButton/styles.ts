import styled, { DefaultTheme, css } from "styled-components";

interface MyComponentProps {
    theme: DefaultTheme;
}

export const CartArea = styled.button<MyComponentProps>`
    background-color: #ffffff;
    border: 0;
    border-radius: 8px;
    cursor: pointer;

    width: 90px;
    height: 45px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    ${({ theme }) => css`
        @media (max-width: ${theme?.breakpoints?.medium}px) {
            height: auto;
        }
    `}
`;

export const CartIcon = styled.span`
    font-size: 18px;
    color: #000000;
`;

export const CartText = styled.span`
    font-weight: 700;
    font-size: 18px;
`;
