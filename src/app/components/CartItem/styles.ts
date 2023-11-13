import { XCircle } from "lucide-react";
import Image from "next/image";
import styled from "styled-components";

export const ContainerProduct = styled.div`
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
`;
export const ProductInfo = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
`;

export const Photo = styled(Image)`
    width: 46px;
    height: 57px;
    object-fit: contain;
    margin-right: 21px;
`;

export const ProductName = styled.p`
    color: #2c2c2c;
    font-size: 13px;
    font-weight: 400;
    line-height: 17px;
    max-width: 113px;
`;
export const PriceArea = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-around;
`;
export const Price = styled.span`
    color: #000;

    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
`;

export const Icon = styled(XCircle)`
    margin-top: -90px;
    margin-right: -30px;
    z-index: 5;
    cursor: pointer;
`;
