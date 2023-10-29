/* eslint-disable no-use-before-define */
import * as React from "react";
import {screen, render} from "@testing-library/react";
import Field from "./";

describe("Test Field component", () => {
	it("Should pass when name, variant, size and placeholder is additional", () => {
		render(<Field data-testid="test" />);

		const renderFiledComponent = screen.queryAllByTestId("test");
		expect(renderFiledComponent).not.toBeNull();
		expect(renderFiledComponent).toBeDefined();
		expect(renderFiledComponent).toMatchSnapshot();
	});
});
