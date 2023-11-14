import styled, { DefaultTheme, css } from "styled-components";
import { SidebarProps } from ".";

type SideProps = Pick<SidebarProps, "menuIsVisible">;

interface MyComponentProps extends SideProps {
    theme: DefaultTheme;
}

export const Sidebar = styled.section<MyComponentProps>`
    position: fixed;
    overflow-y: auto;
    z-index: 5;
    top: 0;
    right: 0;

    width: 486px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: #0f52ba;
    color: #fff;
    box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);

    opacity: 0;
    pointer-events: none;
    transition: 0.5s;
    transform: translateX(468px);

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: #eeeeee;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #373737;
        border-radius: 4px;
    }

    ${({ menuIsVisible }) =>
        menuIsVisible &&
        css`
            opacity: 1;
            pointer-events: auto;
            transform: translateX(0);
        `}

    ${({ theme }) => css`
        @media (max-width: ${theme?.breakpoints?.medium}px) {
            max-width: 330px;
        }
    `}
`;

export const SidebarHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 36px;
    margin-bottom: 70px;
    padding: 0 47px;
`;

export const Title = styled.h3`
    font-size: 27px;
    font-weight: 700;
    max-width: 180px;
`;

export const SidebarContent = styled.div`
    flex: 1;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SidebarFooter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
export const ProductsPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 42px 47px;
`;
export const Text = styled.p`
    font-size: 28px;
    font-weight: 700;
    line-height: 15px;
`;
export const SidebarButton = styled.button`
    background: #000;
    color: #fff;
    border: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
`;

export const ButtonClose = styled.button`
    width: 38px;
    height: 38px;
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    background-color: #000;

    color: #fff;

    font-size: 25px;
    font-weight: 400;
    line-height: 15px;
`;
