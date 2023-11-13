"use client";

import { useQuery } from "@tanstack/react-query";

import { ProductsSkeleton } from "./components/Skeleton/ProductsSkeleton";
import axios from "axios";
import { ProductCard } from "./components/ui/ProductCard";

import * as S from "./styles";
import { useState } from "react";
import Sidebar from "./components/Sidebar";

export type Product = {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
};

export interface ProductList {
    products: Product[];
}

const getProducts = async () => {
    const response = await axios.get<ProductList>(
        "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC"
    );

    return response.data;
};

export default function Home() {
    const [menuIsVisible, setMenuIsVisible] = useState(true);

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
                <ProductsSkeleton />
            ) : (
                <S.Container>
                    <S.GridArea>
                        {data?.products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </S.GridArea>
                </S.Container>
            )}
        </>
    );
}
