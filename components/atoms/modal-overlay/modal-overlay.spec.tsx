import * as React from "react";
import {screen, render} from "@testing-library/react";
import ModalOverlay from "./";

describe("Test ModalDialog component", () => {
	it("Should pass when ModalDialog is defined", () => {
		render(<ModalOverlay data-testid="modal-test" />);
		const modalOverlay = screen.queryByTestId("modal-test");
		expect(modalOverlay).toBeDefined();
		expect(modalOverlay).toMatchSnapshot();
	});
});
