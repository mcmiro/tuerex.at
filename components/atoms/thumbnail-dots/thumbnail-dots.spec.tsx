import * as React from "react";
import {screen, render} from "@testing-library/react";
import ThumbnailDots from "./";

describe("Test ThumbnailDots component", () => {
	it("Should pass when ThumbnailDots is defined", () => {
		render(<ThumbnailDots data-testid="thumbnail-dots-test" />);

		const thumbnailDots = screen.queryByTestId("thumbnail-dots-test");
		expect(thumbnailDots).toBeDefined();
		expect(thumbnailDots).toMatchSnapshot();
	});
});
