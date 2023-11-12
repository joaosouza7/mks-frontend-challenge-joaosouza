"use client";

import FooterSkeleton from "./components/FooterSkeleton";
import { Header } from "./components/Header";
import { HeaderSkeleton } from "./components/HeaderSkeleton";
import { ProductCard } from "./components/ProductCard";
import { ProductSkeleton } from "./components/ProductSkeleton";
import { Container, GridArea } from "./styles";

export default function Home() {
    return (
        <>
            <Header />

            <ProductCard />

            <FooterSkeleton />
        </>
    );
}
