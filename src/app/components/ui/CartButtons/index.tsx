import { useContext } from "react";
import * as S from "./styles";
import { CartContext } from "@/providers/cart";

interface CartButtonsProps {
    qtd: number;
    productId: number;
}

export default function CartButtons({ productId, qtd }: CartButtonsProps) {
    const { decreaseProductQuantity } = useContext(CartContext);

    function handleDecreaseProductQuantityClick() {
        decreaseProductQuantity(productId);
    }

    return (
        <>
            <div>
                <S.Text>Qtd:</S.Text>
                <S.ButtonsContainer>
                    <S.Button onClick={handleDecreaseProductQuantityClick}>
                        -
                    </S.Button>
                    <S.Qtd>{qtd}</S.Qtd>
                    <S.Button>+</S.Button>
                </S.ButtonsContainer>
            </div>
        </>
    );
}
