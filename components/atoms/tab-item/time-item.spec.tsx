import * as React from "react";
import {screen, render} from "@testing-library/react";
import TimeItem from "./";

describe("Test TimeItem component", () => {
	it("Should pass when TimeItem is defined", () => {
		render(<TimeItem name="test" data-testid="switch-test" />);

		const timeItem = screen.queryAllByTestId("switch-test");
		expect(timeItem).toBeDefined();
		expect(timeItem).toMatchSnapshot();
	});
});
