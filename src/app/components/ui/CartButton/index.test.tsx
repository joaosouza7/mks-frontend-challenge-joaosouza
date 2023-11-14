import { fireEvent, render, screen } from "@testing-library/react";
import { CartButton } from ".";

describe("Cart Button Component", () => {
    it("should call onClick prop on click", () => {
        const onClick = jest.fn();

        render(<CartButton icon onClick={onClick} />);

        const button = screen.getByRole("button");

        fireEvent.click(button);

        expect(onClick).toHaveBeenCalled();
    });

    it("should render component", () => {
        render(<CartButton icon />);

        const button = screen.getByRole("button");

        expect(button).toBeVisible();
    });
});
