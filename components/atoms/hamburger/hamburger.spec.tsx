/* eslint-disable no-use-before-define */
import * as React from "react";
import {screen, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Hamburger from ".";

describe("Test Hamburger component", () => {
	it("Should pass when isActive and ontogglemenu is defined", () => {
		const isActive = false;
		const toggleMock = jest.fn();

		render(<Hamburger isActive={isActive} onToggleMenu={toggleMock} data-testid="hamurger-test" />);

		const hamburger = screen.queryByTestId("hamurger-test");
		expect(hamburger).toBeDefined();
		expect(hamburger).toMatchSnapshot();
	});

	it("Should pass when isActive props is change on true", async () => {
		const isActive = false;
		const toggleMock = jest.fn();

		render(<Hamburger isActive={isActive} onToggleMenu={toggleMock} data-testid="hamurger-test" />);

		const hamburger = screen.queryByTestId("hamurger-test");
		hamburger && userEvent.click(hamburger);
		hamburger && expect(toggleMock).toHaveBeenCalledTimes(1);
		hamburger && expect(isActive).toBe(true);
	});
});
