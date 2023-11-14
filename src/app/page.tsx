"use client";

import { useQuery } from "@tanstack/react-query";

import { ProductsSkeleton } from "./components/Skeleton/ProductsSkeleton";
import axios from "axios";
import { ProductCard } from "./components/ProductCard";

import * as S from "./styles";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { Header } from "./components/Header";
import { HeaderSkeleton } from "./components/Skeleton/HeaderSkeleton";
import FooterSkeleton from "./components/Skeleton/FooterSkeleton";
import Footer from "./components/Footer";
import { ProductList } from "@/@types";

const getProducts = async () => {
    const response = await axios.get<ProductList>(
        "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC"
    );

    return response.data;
};

export default function Home() {
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    const { data, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });

    return (
        <>
            <Sidebar
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
            />

            {isLoading ? (
                <>
                    <HeaderSkeleton />
                    <ProductsSkeleton />
                    <FooterSkeleton />
                </>
            ) : (
                <>
                    <Header setMenuIsVisible={setMenuIsVisible} />
                    <S.Container>
                        <S.GridArea>
                            {data?.products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </S.GridArea>
                    </S.Container>
                    <Footer />
                </>
            )}
        </>
    );
}
