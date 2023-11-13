"use client";

import { queryClientOptions } from "@/@types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

interface Props {
    children: ReactNode;
}

export const Providers = ({ children }: Props) => {
    const [queryClient] = useState(() => new QueryClient(queryClientOptions));
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};
