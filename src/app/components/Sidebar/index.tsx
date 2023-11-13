import { XCircleIcon } from "lucide-react";
import * as S from "./styles";
import ProductItem from "../CartItem";
import { Product } from "@/app/page";
import { CartContext } from "@/providers/cart";
import { useContext } from "react";
import CartItem from "../CartItem";

export interface SidebarProps {
    menuIsVisible: boolean;
    setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({
    menuIsVisible,
    setMenuIsVisible,
}: SidebarProps) {
    const { products } = useContext(CartContext);

    return (
        <S.Sidebar menuIsVisible={menuIsVisible}>
            <S.SidebarHeader>
                <S.Title>Carrinho de Compras</S.Title>
                <XCircleIcon
                    size={25}
                    cursor="pointer"
                    onClick={() => setMenuIsVisible(false)}
                />
            </S.SidebarHeader>

            <S.SidebarContent>
                {products.map((product) => (
                    <CartItem key={product.id} product={product} />
                ))}
            </S.SidebarContent>

            <S.SidebarFooter>
                <S.ProductsPrice>
                    <S.Text>Total:</S.Text>
                    <S.Text>R$798</S.Text>
                </S.ProductsPrice>

                <S.SidebarButton>
                    <S.Text>Finalizar Compra</S.Text>
                </S.SidebarButton>
            </S.SidebarFooter>
        </S.Sidebar>
    );
}
