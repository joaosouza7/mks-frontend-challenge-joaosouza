import styled, { css, keyframes } from "styled-components";

export const GridArea = styled.div`
    width: 100%;
    max-width: 938px;

    margin: 116px 0 172px 0;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(4, 1fr);
`;

export const ContainerMax = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1;
`;
