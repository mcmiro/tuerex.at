import * as React from "react";
import {screen, render} from "@testing-library/react";
import MegaMenuItem from "./";

describe("Test MegaMenuItem component", () => {
	it("Should pass when link is defined", () => {
		const linkMock = {
			title: "test",
			url: "/test",
		};

		render(<MegaMenuItem link={linkMock} data-testid="test" />);
		const megaMenu = screen.queryByTestId("test");
		expect(megaMenu).toBeDefined();
		expect(megaMenu).toMatchSnapshot();
	});
});
