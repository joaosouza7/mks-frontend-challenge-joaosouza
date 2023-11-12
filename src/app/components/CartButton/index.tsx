import * as S from "../Header/styles";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
    icon: ReactNode;
    qtdProducts: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function CartButton({
    type = "button",
    icon,
    qtdProducts,
    ...rest
}: ButtonProps) {
    return (
        <S.CartArea type={type} {...rest}>
            {icon && <S.Icon>{icon}</S.Icon>}
            <S.Text>{qtdProducts}</S.Text>
        </S.CartArea>
    );
}
