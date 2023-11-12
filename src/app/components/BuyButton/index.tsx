import * as S from "../Header/styles";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "../ProductCard/styles";

export type ButtonProps = {
    icon: ReactNode;
    qtdProducts: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function BuyButton({
    type = "button",
    icon,
    qtdProducts,
    ...rest
}: ButtonProps) {
    return (
        <Button type={type} {...rest}>
            {icon && icon}
            <S.Text>{qtdProducts}</S.Text>
        </Button>
    );
}
