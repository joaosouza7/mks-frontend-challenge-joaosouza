import { Product } from "@/app/page";

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
