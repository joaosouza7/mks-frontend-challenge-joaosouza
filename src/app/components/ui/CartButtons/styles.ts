import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 50px;
    border-radius: 4px;
    border: 0.3px solid #bfbfbf;
    width: 100%;
    margin-top: 4px;
`;
export const Text = styled.span`
    color: #000;

    font-size: 8px;
    font-weight: 400;
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
`;
