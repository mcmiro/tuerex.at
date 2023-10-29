import * as React from "react";
import {screen, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Switch from "./";

describe("Test switch component", () => {
	it("Should pass when isToggle and onToggle props is defined", () => {
		const isToggleMock = false;
		const onToggleMock = jest.fn();

		render(<Switch data-testid="switch-test" isToggle={isToggleMock} onToggle={onToggleMock} />);

		const step = screen.queryAllByTestId("switch-test");
		expect(step).toBeDefined();
		expect(step).toMatchSnapshot();
	});

	it("Should pass when after click component isToggle is change", () => {
		const isToggleMock = false;
		const onToggleMock = jest.fn();

		render(<Switch data-testid="switch-test" isToggle={isToggleMock} onToggle={onToggleMock} />);

		const switchComponent = screen.queryByTestId("switch-test");
		switchComponent && userEvent.click(switchComponent);
		switchComponent && expect(onToggleMock).toHaveBeenCalled();
		switchComponent && expect(isToggleMock).toBe(true);
	});
});
