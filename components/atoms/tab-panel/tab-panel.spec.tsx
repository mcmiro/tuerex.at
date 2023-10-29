import * as React from "react";
import {screen, render} from "@testing-library/react";
import TabPanel from "./";

describe("Test TabPanel component", () => {
	it("Should pass when children on TabPanel is defined", () => {
		render(<TabPanel data-testid="tab-panel-test">Test</TabPanel>);

		const tabPanel = screen.queryByTestId("tab-panel-test");
		expect(tabPanel).toBeDefined();
		expect(tabPanel).toMatchSnapshot();
	});
});
