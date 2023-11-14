"use client";

import { ProductWithTotalPrice } from "@/helpers/product";
import { ReactNode, createContext, useEffect, useMemo, useState } from "react";

export interface CartProduct extends ProductWithTotalPrice {
    quantity: number;
    totalPrice: number;
}

interface ICartContext {
    products: CartProduct[];
    cartTotalPrice: number;
    total: number;
    qtdProducts: number;
    addProductToCart: (product: CartProduct) => void;
    decreaseProductQuantity: (productId: number) => void;
    increaseProductQuantity: (productId: number) => void;
    removeProductFromCart: (productId: number) => void;
}

export const CartContext = createContext<ICartContext>({
    products: [],
    cartTotalPrice: 0,
    total: 0,
    qtdProducts: 0,
    addProductToCart: () => {},
    decreaseProductQuantity: () => {},
    increaseProductQuantity: () => {},
    removeProductFromCart: () => {},
});

export default function CartProvider({ children }: { children: ReactNode }) {
    const [products, setProducts] = useState<CartProduct[]>([]);

    useEffect(() => {
        setProducts(
            JSON.parse(localStorage.getItem("@fsw-store/cart-products") || "[]")
        );
    }, []);

    useEffect(() => {
        localStorage.setItem(
            "@fsw-store/cart-products",
            JSON.stringify(products)
        );
    }, [products]);

    const total = useMemo(() => {
        return products.reduce((acc, product) => {
            return acc + Number(product.price) * product.quantity;
        }, 0);
    }, [products]);

    const qtdProducts = useMemo(() => {
        return products.reduce((acc, product) => {
            return acc + product.quantity;
        }, 0);
    }, [products]);

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

    const decreaseProductQuantity = (productId: number) => {
        // Se a quantidade for 1, remova o produto do carrinho

        // Se não, diminua a quantidade em 1

        setProducts((prev) =>
            prev
                .map((cartProduct) => {
                    if (cartProduct.id === productId) {
                        return {
                            ...cartProduct,
                            quantity: cartProduct.quantity - 1,
                        };
                    }

                    return cartProduct;
                })
                .filter((cartProduct) => cartProduct.quantity > 0)
        );
    };

    const increaseProductQuantity = (productId: number) => {
        // Se a quantidade for 1, remova o produto do carrinho

        // Se não, diminua a quantidade em 1

        setProducts((prev) =>
            prev.map((cartProduct) => {
                if (cartProduct.id === productId) {
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + 1,
                    };
                }

                return cartProduct;
            })
        );
    };

    const removeProductFromCart = (productId: number) => {
        setProducts((prev) =>
            prev.filter((cartProduct) => cartProduct.id !== productId)
        );
    };

    return (
        <CartContext.Provider
            value={{
                products,
                addProductToCart,
                decreaseProductQuantity,
                increaseProductQuantity,
                removeProductFromCart,
                cartTotalPrice: 0,
                total,
                qtdProducts,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
