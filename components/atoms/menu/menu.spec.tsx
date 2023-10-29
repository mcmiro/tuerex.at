/* eslint-disable no-use-before-define */
import * as React from "react";
import {screen, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Menu from "./";

describe("Test Field component", () => {
	it("Should pass when name, variant, size and placeholder is additional", () => {
		const mockHover = jest.fn();
		render(<Menu items={[]} onHover={mockHover} data-testid="test" />);

		const renderFiledComponent = screen.queryAllByTestId("test");
		expect(renderFiledComponent).not.toBeNull();
		expect(renderFiledComponent).toBeDefined();
		expect(renderFiledComponent).toMatchSnapshot();
	});

	it("Should pass when component is hover", () => {
		const mockHover = jest.fn();
		render(<Menu items={[]} onHover={mockHover} data-testid="test" />);

		const renderFiledComponent = screen.queryAllByTestId("test")[0];
		renderFiledComponent && userEvent.hover(renderFiledComponent);

		renderFiledComponent && expect(mockHover).toHaveBeenCalledTimes(1);
		renderFiledComponent && expect(renderFiledComponent).not.toBeNull();
		renderFiledComponent && expect(renderFiledComponent).toBeDefined();
		renderFiledComponent && expect(renderFiledComponent).toMatchSnapshot();
	});
});
