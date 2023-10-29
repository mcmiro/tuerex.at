import * as React from "react";
import {screen, render} from "@testing-library/react";
import ThumbnailItem from "./";

describe("Test ThumbnailItem component", () => {
	it("Should pass when image url is defined", () => {
		render(<ThumbnailItem imageUrl="/test" data-testid="thumbnail-item-test" />);

		const thumbnailItem = screen.queryByTestId("thumbnail-item-test");
		expect(thumbnailItem).toBeDefined();
		expect(thumbnailItem).toMatchSnapshot();
	});
});
