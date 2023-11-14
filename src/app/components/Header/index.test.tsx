import { render, screen } from "@testing-library/react";
import { Header } from ".";

describe("Header Component", () => {
    it("should render component by default", () => {
        render(<Header setMenuIsVisible={() => {}} />);

        const headerElement = screen.getByRole("banner");

        expect(headerElement).toBeVisible();
    });
});
