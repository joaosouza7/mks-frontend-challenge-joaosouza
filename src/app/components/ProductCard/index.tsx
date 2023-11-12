import Image from "next/image";
import {
    Card,
    Description,
    HeadingArea,
    ImgArea,
    InfoArea,
    Name,
    Price,
} from "./styles";
import { BuyButton } from "../BuyButton";
import { ShoppingBag } from "lucide-react";

export function ProductCard() {
    return (
        <Card>
            <ImgArea>
                <Image
                    src="/apple-watch.png"
                    alt="Product"
                    width={111}
                    height={138}
                />
            </ImgArea>
            <InfoArea>
                <HeadingArea>
                    <Name>Apple Watch Series 4 GPS</Name>
                    <Price>R$399</Price>
                </HeadingArea>
                <Description>
                    Redesigned from scratch and completely revised.
                </Description>
            </InfoArea>
            <BuyButton icon={<ShoppingBag size={13} />} qtdProducts="Comprar" />
        </Card>
    );
}
