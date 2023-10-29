import * as React from "react";
import {screen, render} from "@testing-library/react";
import ModalDialog from "./";

describe("Test ModalDialog component", () => {
	it("Should pass when children in ModalDialog is defined", () => {
		render(<ModalDialog data-testid="modal-test">Test</ModalDialog>);
		const megaMenu = screen.queryByTestId("modal-test");
		expect(megaMenu).toBeDefined();
		expect(megaMenu).toMatchSnapshot();
	});
});
