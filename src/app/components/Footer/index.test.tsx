import { render, screen } from "@testing-library/react";
import Footer from ".";

describe("Footer Component", () => {
    it("should render component by default", () => {
        render(<Footer />);

        const footerElement = screen.getByRole("region");

        expect(footerElement).toBeVisible();
    });
});
