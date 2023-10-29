import * as React from "react";
import {screen, render} from "@testing-library/react";
import Typography from "./";

describe("Test ThumbnailItem component", () => {
	it("Should pass when variant is defined", () => {
		render(<Typography variant="md" data-testid="typography-test" />);

		const typography = screen.queryByTestId("typography-test");
		expect(typography).toBeDefined();
		expect(typography).toMatchSnapshot();
	});

	it("Should pass when variant change html to paragraph", () => {
		const {container} = render(<Typography variant="md" data-testid="typography-test" />);
		expect(container.innerHTML).toBe('<p class="m-0 p-0 whitespace-pre-line text-md"></p>');
	});

	it("Should pass when props weight change to bold", () => {
		const {container} = render(<Typography variant="md" weight="semibold" />);
		expect(container.innerHTML).toBe('<p class="m-0 p-0 whitespace-pre-line text-md font-semibold"></p>');
	});
});
