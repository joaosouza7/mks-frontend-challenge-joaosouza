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
