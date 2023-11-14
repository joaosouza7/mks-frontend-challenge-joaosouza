import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = {
    icon: ReactNode;
    qtdProducts?: string;
    text?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const queryClientOptions = {
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
};

export type Product = {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
    quantity: number;
    totalPrice: number;
};

export interface ProductList {
    products: Product[];
}
