"use client";

import { Product } from "@/app/page";
import { ReactNode, createContext } from "react";

interface CartProduct extends Product {
    quantity: number;
}

interface ICartContext {
    products: CartProduct[];
    cartTotalPrice: number;
}

const CartContext = createContext<ICartContext>({
    products: [],
    cartTotalPrice: 0,
});

export default function CartProvider({ children }: { children: ReactNode }) {
    return (
        <CartContext.Provider
            value={{
                products: [],
                cartTotalPrice: 0,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
