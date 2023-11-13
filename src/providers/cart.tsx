"use client";

import { Product } from "@/app/page";
import { ReactNode, createContext, useState } from "react";

export interface CartProduct extends Product {
    quantity: number;
}

interface ICartContext {
    products: CartProduct[];
    cartTotalPrice: number;
    addProductToCart: (product: CartProduct) => void;
}

export const CartContext = createContext<ICartContext>({
    products: [],
    cartTotalPrice: 0,
    addProductToCart: () => {},
});

export default function CartProvider({ children }: { children: ReactNode }) {
    const [products, setProducts] = useState<CartProduct[]>([]);

    const addProductToCart = (product: CartProduct) => {
        // Se o produto ja estiver no carrinho, apenas aumente a quantidade
        const productIsAlreadyOnCart = products.some(
            (cartProduct) => cartProduct.id === product.id
        );

        if (productIsAlreadyOnCart) {
            setProducts((prev) =>
                prev.map((cartProduct) => {
                    if (cartProduct.id === product.id) {
                        return {
                            ...cartProduct,
                            quantity: cartProduct.quantity + product.quantity,
                        };
                    }

                    return cartProduct;
                })
            );

            return;
        }

        // Se não, adicione o produto a lista
        setProducts((prev) => [...prev, product]);
    };

    return (
        <CartContext.Provider
            value={{
                products,
                addProductToCart,
                cartTotalPrice: 0,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
