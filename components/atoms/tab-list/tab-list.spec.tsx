import * as React from "react";
import {screen, render} from "@testing-library/react";
import TabList from "./";

describe("Test TabList component", () => {
	it("Should pass when children on TimeItem is defined", () => {
		render(<TabList data-testid="tab-list-test">Test</TabList>);

		const tabList = screen.queryByTestId("tab-list-test");
		expect(tabList).toBeDefined();
		expect(tabList).toMatchSnapshot();
	});
});
