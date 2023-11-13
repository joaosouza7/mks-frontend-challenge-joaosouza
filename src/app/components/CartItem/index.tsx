import { Product } from "@/app/page";
import { XCircle } from "lucide-react";
import Image from "next/image";
import * as S from "./styles";
import { CartProduct } from "@/providers/cart";
import CartButtons from "../ui/CartButtons";

interface CartItemProps {
    product: CartProduct;
}

export default function CartItem({ product }: CartItemProps) {
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
                    <CartButtons qtd={product.quantity} />
                    <S.Price>R${Number(product.price).toFixed(0)}</S.Price>
                </S.PriceArea>

                <S.Icon size={25} color="#000" />
            </S.ContainerProduct>
        </>
    );
}
