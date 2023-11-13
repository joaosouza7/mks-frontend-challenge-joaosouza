"use client";

import { Product } from "@/app/page";
import { ReactNode, createContext, useState } from "react";

interface CartProduct extends Product {
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
