import { ButtonProps } from "@/@types";
import { CartArea, CartIcon, CartText } from "./styles";

export function CartButton({
    type = "button",
    icon,
    qtdProducts,
    ...rest
}: ButtonProps) {
    return (
        <CartArea type={type} {...rest}>
            {icon && <CartIcon>{icon}</CartIcon>}
            <CartText>{qtdProducts}</CartText>
        </CartArea>
    );
}
