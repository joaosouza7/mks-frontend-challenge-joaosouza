import { ButtonProps } from "@/@types";
import { CardButton } from "./styles";

export function BuyButton({
    type = "button",
    icon,
    text,
    ...rest
}: ButtonProps) {
    return (
        <CardButton type={type} {...rest}>
            {icon && icon}
            <p>{text}</p>
        </CardButton>
    );
}
