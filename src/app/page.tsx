"use client";

import { Header } from "./components/Header";
import { HeaderSkeleton } from "./components/HeaderSkeleton";
import { ProductSkeleton } from "./components/ProductSkeleton";

export default function Home() {
    return (
        <>
            <HeaderSkeleton />
            <ProductSkeleton />
        </>
    );
}
