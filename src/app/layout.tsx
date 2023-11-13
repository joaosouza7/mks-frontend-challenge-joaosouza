import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import { Providers } from "@/providers/query";
import StyledComponentsRegistry from "./registry";
import CartProvider from "@/providers/cart";
import { ThemeContext } from "@/providers/theme";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "MKS Front-end Challenge",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <StyledComponentsRegistry>
                <body className={montserrat.className}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                        }}
                    >
                        <Providers>
                            <ThemeContext>
                                <CartProvider>
                                    <div style={{ flex: "1 1 0%" }}>
                                        {children}
                                    </div>
                                </CartProvider>
                            </ThemeContext>
                        </Providers>
                    </div>
                </body>
            </StyledComponentsRegistry>
        </html>
    );
}
