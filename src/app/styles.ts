import styled, { DefaultTheme, css } from "styled-components";

interface MyComponentProps {
    theme: DefaultTheme;
}

export const GridArea = styled.div<MyComponentProps>`
    width: 100%;
    max-width: 938px;
    gap: 22px;

    margin: 116px 0 172px 0;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(4, 1fr);

    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.medium}px) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: ${theme.breakpoints.small}px) {
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;
        }
    `}
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 2%;
`;
