import styled, { DefaultTheme, css } from "styled-components";

interface MyComponentProps {
    theme: DefaultTheme;
}

export const Header = styled.header<MyComponentProps>`
    width: 100%;
    height: 101px;
    background: #0f52ba;
    padding: 0 65px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    ${({ theme }) => css`
        @media (max-width: ${theme?.breakpoints?.medium}px) {
            height: 50px;
        }
    `}
`;

export const Logo = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 10px;

    color: #ffffff;
`;

export const HeadingH2 = styled.h2<MyComponentProps>`
    font-weight: 600;
    line-height: 19px;
    font-size: 40px;

    text-transform: uppercase;

    ${({ theme }) => css`
        @media (max-width: ${theme?.breakpoints?.medium}px) {
            font-size: 32px;
        }
    `}
`;

export const HeadingP = styled.p<MyComponentProps>`
    font-size: 20px;
    font-weight: 300;
    line-height: 19px;

    ${({ theme }) => css`
        @media (max-width: ${theme?.breakpoints?.medium}px) {
            font-size: 16px;
        }
    `}
`;
