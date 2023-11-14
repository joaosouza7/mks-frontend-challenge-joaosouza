import {
    Card,
    Description,
    HeadingArea,
    ImgArea,
    InfoArea,
    Name,
    Photo,
    Price,
} from "./styles";
import { BuyButton } from "../ui/BuyButton";
import { LuShoppingBag } from "react-icons/lu";
import { CartContext, CartProduct } from "@/providers/cart";
import { useContext } from "react";

type Props = {
    product: CartProduct;
};

export function ProductCard({ product }: Props) {
    const { addProductToCart } = useContext(CartContext);

    function handleAddToCartClick() {
        addProductToCart({ ...product, quantity: 1 });
    }

    return (
        <Card role="main">
            <ImgArea>
                <Photo
                    role="img"
                    src={product.photo}
                    alt={product.name}
                    width={111}
                    height={138}
                    sizes="100vw"
                />
            </ImgArea>
            <InfoArea>
                <HeadingArea>
                    <Name>{product.name}</Name>
                    <Price>R${Number(product.price).toFixed(0)}</Price>
                </HeadingArea>
                <Description>{product.description}</Description>
            </InfoArea>
            <BuyButton
                icon={<LuShoppingBag size={15} />}
                text="Comprar"
                onClick={handleAddToCartClick}
                name="comprar"
            />
        </Card>
    );
}
