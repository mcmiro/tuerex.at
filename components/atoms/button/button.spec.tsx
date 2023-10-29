/* eslint-disable */
import * as React from "react";
import {screen, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from ".";

describe("Test Button component", () => {
	it("Should pass when type props and size props is defined", () => {
		render(
			React.cloneElement(
				<Button variant="text" data-testid="button-test">
					Test
				</Button>
			)
		);

		const button = screen.queryByTestId("button-test");
		expect(button).toBeDefined();
		expect(button).toMatchSnapshot();
	});

	it("Should pass when props are added", () => {
		render(
			React.cloneElement(
				<Button variant="contained" size="lg" disabled data-testid="button-test">
					Test
				</Button>
			)
		);

		const button = screen.queryByTestId("button-test");
		expect(button).toBeDefined();
		expect(button).toMatchSnapshot();
	});

	it("Should be called onClick for none disabled button", async () => {
		const mockClick = jest.fn();

		render(
			<Button data-testid="button-test" variant="contained" onClick={mockClick}>
				Test
			</Button>
		);

		const button = screen.queryByTestId("button-test");
		button && userEvent.click(button);
		button && expect(mockClick).toHaveBeenCalled();
	});

	it("Should not be called onClick for disabled button", () => {
		const mockClick = jest.fn();

		render(
			<Button data-testid="button-test" disabled variant="contained" onClick={mockClick}>
				Test
			</Button>
		);

		const button = screen.queryByTestId("button-test");
		button && userEvent.click(button);
		button && expect(mockClick).not.toHaveBeenCalled();
	});
});
