import styled from "styled-components";

export const Card = styled.div`
    background: #fff;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);

    width: 100%;
    max-width: 217px;

    height: auto;
    max-height: 285px;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0%;
`;

export const ImgArea = styled.div`
    width: 100%;
    padding: 18px 14px 14px 14px;

    text-align: center;
`;

export const InfoArea = styled.div`
    padding: 0 14px 12px 14px;
    display: flex;
    flex-direction: column;
`;

export const HeadingArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
`;

export const Name = styled.h3`
    color: #2c2c2c;

    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
`;

export const Price = styled.p`
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
`;

export const Description = styled.span`
    color: #2c2c2c;

    font-size: 10px;
    font-weight: 300;
    line-height: 12px;
`;

export const Button = styled.button`
    border-radius: 0px 0px 8px 8px;
    background: #0f52ba;
    color: #fff;
    border: 0;

    font-size: 14px;
    font-weight: 600;
    line-height: 18px;

    width: 100%;
    height: 31px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
`;
