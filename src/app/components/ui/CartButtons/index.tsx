import { useContext } from "react";
import * as S from "./styles";
import { CartContext } from "@/providers/cart";

export default function CartButtons({ qtd }: { qtd: number }) {
    return (
        <>
            <div>
                <S.Text>Qtd:</S.Text>
                <S.ButtonsContainer>
                    <S.Button>-</S.Button>
                    <S.Qtd>{qtd}</S.Qtd>
                    <S.Button>+</S.Button>
                </S.ButtonsContainer>
            </div>
        </>
    );
}
