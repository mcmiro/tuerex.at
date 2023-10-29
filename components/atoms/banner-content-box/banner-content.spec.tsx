/* eslint-disable no-use-before-define */
import * as React from "react";
import {screen, render} from "@testing-library/react";
import BannerContent from "./";

describe("Test Banner Content component", () => {
	it("Should pass when name, variant, size and placeholder is additional", () => {
		render(
			<BannerContent
				link="/test"
				secondLink="/test2"
				title="test"
				content="test"
				buttonName="test"
				additionalButtonName="test"
				data-testid="banner-test"
			/>
		);

		const renderBannerContentComponent = screen.queryByTestId("banner-test");
		expect(renderBannerContentComponent).toBeDefined();
		expect(renderBannerContentComponent).toMatchSnapshot();
	});
});
