import { Product } from "@/@types";
export interface ProductWithTotalPrice extends Product {
    totalPrice: number;
}

export const computeProductTotalPrice = (
    product: Product
): ProductWithTotalPrice => {
    return {
        ...product,
        totalPrice: Number(product.price),
    };
};
