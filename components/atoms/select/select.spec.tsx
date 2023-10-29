import * as React from "react";
import {screen, render} from "@testing-library/react";
import Select from "./";

describe("Test Select component", () => {
	it("Should pass when name, size, defaultValue, option and onSelect props added", () => {
		const optionsMock = ["test1", "test2"];
		const onSelectMock = jest.fn();

		render(<Select name="test" size="sm" options={optionsMock} onSelect={onSelectMock} />);

		const select = screen.getByRole("combobox");
		expect(select).toBeDefined();
		expect(select).toMatchSnapshot();
	});

	it("Should pass when option its not selected", () => {
		const optionsMock = ["test1", "test2"];
		const onSelectMock = jest.fn();

		render(<Select name="test" size="sm" options={optionsMock} onSelect={onSelectMock} />);
		const select = screen.getByRole("combobox") as HTMLElement;
		expect((select as HTMLOptionElement).selected).toBe(undefined);
	});
});
