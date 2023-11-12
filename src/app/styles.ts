import styled, { css, keyframes } from "styled-components";
import { SkeletonProps } from "./components/ProductSkeleton";
import { lighten } from "polished";

export type GridProps = Pick<SkeletonProps, "spacings">;
export type ContentProps = Pick<SkeletonProps, "height">;

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Grid = styled.div<GridProps>`
    ${({ spacings }) => css`
        width: 100%;
        max-width: 938px;
        gap: ${spacings}px;

        margin: 116px 0 172px 0;
        display: grid;
        place-items: center;
        grid-template-columns: repeat(4, 1fr);
    `}
`;

const loading = keyframes`
    from {
        background-position: 0% 0%;
    }
    to {
        background-position: 135% 0%;
    }
`;

export const Content = styled.div<ContentProps>`
    ${({ height }) => css`
        width: 217px;
        height: ${height}px;

        opacity: 0.6;
        border-radius: 8px;
        cursor: progress;

        background: linear-gradient(
            -90deg,
            #91aab4 0%,
            ${lighten(0.2, "#91aab4")} 50%,
            #91aab4 100%
        );
        background-size: 400% 400%;
    `}

    animation: ${loading} 1.2s ease-in-out infinite;
`;

export const ProductImage = styled.div`
    margin: 18px auto;
    border-radius: 4px;

    width: 90%;
    height: 138px;

    background: linear-gradient(
        -90deg,
        #b3c5cc 0%,
        ${lighten(0.2, "#b3c5cc")} 50%,
        #b3c5cc 100%
    );
    background-size: 400% 400%;
    animation: ${loading} 1.2s ease-in-out infinite;
`;
export const ProductInfo = styled.div`
    margin: 14px auto;
    border-radius: 4px;

    width: 90%;
    height: 71px;

    background: linear-gradient(
        -90deg,
        #b3c5cc 0%,
        ${lighten(0.2, "#b3c5cc")} 50%,
        #b3c5cc 100%
    );
    background-size: 400% 400%;
    animation: ${loading} 1.2s ease-in-out infinite;
`;
export const ProductButton = styled.div`
    margin-top: 12px;
    border-radius: 4px;

    width: 100%;
    height: 32px;

    background: linear-gradient(
        -90deg,
        #b3c5cc 0%,
        ${lighten(0.2, "#b3c5cc")} 50%,
        #b3c5cc 100%
    );
    background-size: 400% 400%;
    animation: ${loading} 1.2s ease-in-out infinite;
`;
