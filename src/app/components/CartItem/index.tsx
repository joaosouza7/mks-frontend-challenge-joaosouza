import * as S from "./styles";
import { CartContext, CartProduct } from "@/providers/cart";
import CartButtons from "../ui/CartButtons";
import { useContext } from "react";

interface CartItemProps {
    product: CartProduct;
}

export default function CartItem({ product }: CartItemProps) {
    const { removeProductFromCart } = useContext(CartContext);

    function handleRemoveProductClick() {
        removeProductFromCart(product.id);
    }

    return (
        <>
            <S.ContainerProduct>
                <S.ProductInfo>
                    <S.Photo
                        src={product.photo}
                        alt={product.name}
                        width={0}
                        height={0}
                        sizes="100vw"
                    />
                    <S.ProductName>{product.name}</S.ProductName>
                </S.ProductInfo>

                <S.PriceArea>
                    <CartButtons
                        qtd={product.quantity}
                        productId={product.id}
                    />
                    <S.Price>R${Number(product.price).toFixed(0)}</S.Price>
                </S.PriceArea>

                <S.Icon onClick={handleRemoveProductClick}>X</S.Icon>
            </S.ContainerProduct>
        </>
    );
}
