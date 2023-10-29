import * as React from "react";
import {screen, render} from "@testing-library/react";
import Container from "./";

describe("Test Container component", () => {
	it("Should pass when children is additional", () => {
		render(<Container data-testid="test">test</Container>);

		const renderContainerComponent = screen.queryAllByTestId("test");
		expect(renderContainerComponent).not.toBeNull();
		expect(renderContainerComponent).toBeDefined();
		expect(renderContainerComponent).toMatchSnapshot();
	});
});
