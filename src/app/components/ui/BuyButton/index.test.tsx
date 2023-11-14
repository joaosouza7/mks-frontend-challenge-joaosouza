import { fireEvent, render, screen } from "@testing-library/react";
import { BuyButton } from ".";

describe("Buy Button Component", () => {
    it("should call onClick prop on click", () => {
        const onClick = jest.fn();

        render(<BuyButton icon onClick={onClick} />);

        const button = screen.getByRole("button");
        fireEvent.click(button);

        expect(onClick).toHaveBeenCalled();
    });
});
