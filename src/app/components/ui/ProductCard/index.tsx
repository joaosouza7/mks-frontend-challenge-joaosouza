import Image from "next/image";
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
import { BuyButton } from "../BuyButton";
import { ShoppingBag } from "lucide-react";
import { Product } from "@/app/page";

type Props = {
    product: Product;
};

export function ProductCard({ product }: Props) {
    return (
        <Card>
            <ImgArea>
                <Photo
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
            <BuyButton icon={<ShoppingBag size={13} />} text="Comprar" />
        </Card>
    );
}
