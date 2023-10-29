/* eslint-disable no-use-before-define */
import * as React from "react";
import {screen, render} from "@testing-library/react";
import HeroBanner from "./";

describe("Test HeroBanner component", () => {
	it("Should pass when title is defined", () => {
		render(<HeroBanner title="test" data-testid="hero-banner-test" />);

		const renderInputComponent = screen.queryByTestId("hero-banner-test");
		expect(renderInputComponent).toBeDefined();
		expect(renderInputComponent).toMatchSnapshot();
	});
});
