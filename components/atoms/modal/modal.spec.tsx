import * as React from "react";
import {screen, render} from "@testing-library/react";
import Modal from "./";

describe("Test Modal component", () => {
	it("Should pass when modal is defined", () => {
		render(<Modal data-testid="modal-test" />);
		const megaMenu = screen.queryByTestId("modal-test");
		expect(megaMenu).toBeDefined();
		expect(megaMenu).toMatchSnapshot();
	});
});
