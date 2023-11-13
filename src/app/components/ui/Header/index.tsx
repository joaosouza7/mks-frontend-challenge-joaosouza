"use client";

import { ShoppingCart } from "lucide-react";
import { CartButton } from "../CartButton";
import * as S from "./styles";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";

interface HeaderProps {
    setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Header({ setMenuIsVisible }: HeaderProps) {
    const { qtdProducts } = useContext(CartContext);

    return (
        <S.Header>
            <S.Logo>
                <S.HeadingH2>Mks</S.HeadingH2>
                <S.HeadingP>Sistemas</S.HeadingP>
            </S.Logo>

            <CartButton
                icon={<ShoppingCart />}
                qtdProducts={String(qtdProducts)}
                onClick={() => setMenuIsVisible(true)}
            />
        </S.Header>
    );
}
