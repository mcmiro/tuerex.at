import * as React from "react";
import {screen, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dropdown from "./";

describe("Test dropdown component", () => {
	it("Should pass when isActive, selected, options and variant is additional", () => {
		const testOptions = ["option1", "option2", "option3"];
		const testSelected = "option1";

		render(
			<Dropdown
				isActive={false}
				selected={testSelected}
				options={testOptions}
				variant="outline"
				data-testid="dropdown-test"
			/>
		);

		const dropdown = screen.queryByTestId("dropdown-test");
		expect(dropdown).toBeDefined();
		expect(dropdown).toMatchSnapshot();
	});

	it("Should pass when click and open dropdown", () => {
		const isActive = false;
		const testOptions = ["option1", "option2", "option3"];
		const testSelected = "option1";
		const toggleMock = jest.fn();
		const selelectOption = jest.fn();

		render(
			<Dropdown
				isActive={isActive}
				selected={testSelected}
				options={testOptions}
				variant="outline"
				data-testid="dropdown-test"
				toggleOpen={toggleMock}
				onSelectOption={selelectOption}
			/>
		);

		const dropdown = screen.queryByTestId("dropdown-test") as HTMLElement;
		dropdown && userEvent.click(dropdown);
		dropdown && expect(toggleMock).toHaveBeenCalledTimes(1);
		dropdown && expect(isActive).toBe(true);
	});

	it("Should pass when set selected true value", async () => {
		const testOptions = ["option1", "option2", "option3"];
		const testSelected = "option1";
		const toggleMock = jest.fn();
		const selelectOption = jest.fn();

		render(
			<Dropdown
				isActive={false}
				selected={testSelected}
				options={testOptions}
				variant="outline"
				data-testid="dropdown-test"
				toggleOpen={toggleMock}
				onSelectOption={selelectOption}
			/>
		);

		const dropdown = screen.queryByTestId("dropdown-test");
		dropdown && userEvent.click(dropdown);
		dropdown && userEvent.click(selelectOption("option2"));
		dropdown && expect(selelectOption).toHaveBeenCalledTimes(1);
		dropdown && expect(testSelected).toBe("option2");
	});
});
