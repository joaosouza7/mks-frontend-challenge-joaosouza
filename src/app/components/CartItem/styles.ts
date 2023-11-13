import Image from "next/image";
import styled, { DefaultTheme, css } from "styled-components";

interface MyComponentProps {
    theme: DefaultTheme;
}

export const ContainerProduct = styled.div<MyComponentProps>`
    border-radius: 8px;
    background: #fff;
    box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);

    max-width: 379px;
    width: 100%;
    height: 95px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 22px;
    padding: 0 23px;

    position: relative;

    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.medium}px) {
            max-width: 250px;
            height: 220px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    `}
`;
export const ProductInfo = styled.div`
    display: flex;
    align-items: center;
    width: 50%;

    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.medium}px) {
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    `}
`;

export const Photo = styled(Image)`
    width: 46px;
    height: 57px;
    object-fit: contain;
    margin-right: 21px;

    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.medium}px) {
            width: 80px;
            height: 90px;
            margin-right: 0;
        }
    `}
`;

export const ProductName = styled.p`
    color: #2c2c2c;
    font-size: 13px;
    font-weight: 400;
    line-height: 17px;
    max-width: 113px;

    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.medium}px) {
            max-width: 100%;
        }
    `}
`;
export const PriceArea = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-around;

    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.medium}px) {
            width: 100%;
            margin-top: 11px;
        }
    `}
`;
export const Price = styled.span`
    color: #000;

    font-size: 14px;
    font-weight: 700;
    line-height: 17px;

    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.medium}px) {
            color: #fff;
            border-radius: 5px;
            background: #373737;

            padding: 5px 8px;

            display: flex;
            align-items: center;
            justify-content: center;

            font-size: 15px;
            font-weight: 700;
            line-height: 15px;
        }
    `}
`;

export const Icon = styled.button`
    margin-top: -90px;
    margin-right: -30px;
    z-index: 5;
    width: 25px;
    height: 25px;
    background: #000;
    color: #fff;

    border: 0;
    border-radius: 50%;
    cursor: pointer;
    text-align: center;

    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.medium}px) {
            margin-top: 0;
            margin-right: 0;
            position: absolute;

            top: 9px;
            right: 14px;

            background: transparent;
            color: #000;

            font-size: 25px;
            font-weight: 400;
            line-height: 17px;
        }
    `}
`;
