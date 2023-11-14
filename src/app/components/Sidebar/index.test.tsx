import { fireEvent, render, screen } from "@testing-library/react";
import Sidebar from ".";
import { CartButton } from "../ui/CartButton";

describe("Sidebar Component", () => {
    it("should be visible onClick prop on click", () => {
        const onClick = jest.fn();

        render(<CartButton icon onClick={onClick} />);

        const button = screen.getByRole("button");
        fireEvent.click(button);

        render(<Sidebar menuIsVisible setMenuIsVisible={() => {}} />);

        const sidebar = screen.getByRole("menu");

        expect(onClick).toHaveBeenCalled();
        expect(sidebar).toBeVisible();
    });

    it("should be not visible default", () => {
        render(<Sidebar menuIsVisible={false} setMenuIsVisible={() => {}} />);

        const sidebar = screen.getByRole("menu");

        expect(sidebar).not.toBeVisible();
    });
});
