"use client";

import { Header } from "./components/Header";
import { ProductSkeleton } from "./components/ProductSkeleton";

export default function Home() {
    return (
        <>
            <Header />
            <ProductSkeleton />
        </>
    );
}
