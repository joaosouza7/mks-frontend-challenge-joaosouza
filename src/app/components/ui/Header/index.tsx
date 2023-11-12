"use client";

import { ShoppingCart } from "lucide-react";
import { CartButton } from "../CartButton";
import * as S from "./styles";

export function Header() {
    return (
        <S.Header>
            <S.Logo>
                <S.HeadingH2>Mks</S.HeadingH2>
                <S.HeadingP>Sistemas</S.HeadingP>
            </S.Logo>

            <CartButton icon={<ShoppingCart />} qtdProducts="0" />
        </S.Header>
    );
}
