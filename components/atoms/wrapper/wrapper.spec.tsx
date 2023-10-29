import * as React from "react";
import {screen, render} from "@testing-library/react";
import Wrapper from "./";

describe("Test Wrapper component", () => {
	it("Should pass when children on ThumbnailDots is exist", () => {
		render(<Wrapper data-testid="wrapper-test">Test</Wrapper>);

		const wrapper = screen.queryByTestId("wrapper-test");
		expect(wrapper).toBeDefined();
		expect(wrapper).toMatchSnapshot();
	});
});
