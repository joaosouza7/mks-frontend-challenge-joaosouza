import { render, screen } from "@testing-library/react";
import FooterSkeleton from ".";

describe("Footer Skeleton Component", () => {
    it("should render component by default", () => {
        render(<FooterSkeleton />);

        const footerElement = screen.getByRole("main");

        expect(footerElement).toBeVisible();
    });
});
