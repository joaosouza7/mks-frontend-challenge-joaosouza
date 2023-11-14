import styled, { DefaultTheme, css } from "styled-components";

interface MyComponentProps {
    theme: DefaultTheme;
}

export const ButtonsContainer = styled.div<MyComponentProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 50px;
    border-radius: 4px;
    border: 0.3px solid #bfbfbf;
    width: 100%;
    margin-top: 4px;

    ${({ theme }) => css`
        @media (max-width: ${theme?.breakpoints?.medium}px) {
            max-width: 100px;
            height: 30px;
        }
    `}
`;
export const Text = styled.span<MyComponentProps>`
    color: #000;

    font-size: 8px;
    font-weight: 400;

    ${({ theme }) => css`
        @media (max-width: ${theme?.breakpoints?.medium}px) {
            display: none;
        }
    `}
`;
export const Button = styled.button`
    border: 0;
    background: transparent;

    width: 17px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 12px;
    font-weight: 400;
    cursor: pointer;

    ${({ theme }) => css`
        @media (max-width: ${theme?.breakpoints?.medium}px) {
            font-size: 20px;
        }
    `}
`;
export const Qtd = styled.span`
    color: #000;
    font-size: 10px;
    font-weight: 400;

    width: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 0.2px solid #bfbfbf;
    border-left: 0.2px solid #bfbfbf;

    ${({ theme }) => css`
        @media (max-width: ${theme?.breakpoints?.medium}px) {
            font-size: 15px;
            font-weight: 400;
        }
    `}
`;
