import * as React from "react";
import {screen, render} from "@testing-library/react";
import Step from "./";

describe("Test step component", () => {
	it("Should pass when component is defined", () => {
		render(<Step data-testid="step-test" />);

		const step = screen.queryAllByTestId("step-test");
		expect(step).toBeDefined();
		expect(step).toMatchSnapshot();
	});
});
