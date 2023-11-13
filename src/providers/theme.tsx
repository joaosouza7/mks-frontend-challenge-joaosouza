"use client";

import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";

export const ThemeContext = ({ children }: { children: React.ReactNode }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
