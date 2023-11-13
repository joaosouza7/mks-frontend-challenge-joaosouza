"use client";

import { ShoppingCart } from "lucide-react";
import { CartButton } from "../CartButton";
import * as S from "./styles";

interface HeaderProps {
    setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Header({ setMenuIsVisible }: HeaderProps) {
    return (
        <S.Header>
            <S.Logo>
                <S.HeadingH2>Mks</S.HeadingH2>
                <S.HeadingP>Sistemas</S.HeadingP>
            </S.Logo>

            <CartButton
                icon={<ShoppingCart />}
                qtdProducts="0"
                onClick={() => setMenuIsVisible(true)}
            />
        </S.Header>
    );
}
