import { useContext } from "react";
import * as S from "./styles";
import { CartContext } from "@/providers/cart";

interface CartButtonsProps {
    qtd: number;
    productId: number;
}

export default function CartButtons({ productId, qtd }: CartButtonsProps) {
    const { decreaseProductQuantity, increaseProductQuantity } =
        useContext(CartContext);

    function handleDecreaseProductQuantityClick() {
        decreaseProductQuantity(productId);
    }

    function handleIncreaseProductQuantityClick() {
        increaseProductQuantity(productId);
    }

    return (
        <>
            <div role="button">
                <S.Text>Qtd:</S.Text>
                <S.ButtonsContainer>
                    <S.Button onClick={handleDecreaseProductQuantityClick}>
                        -
                    </S.Button>
                    <S.Qtd>{qtd}</S.Qtd>
                    <S.Button onClick={handleIncreaseProductQuantityClick}>
                        +
                    </S.Button>
                </S.ButtonsContainer>
            </div>
        </>
    );
}
