import * as React from "react";
import {screen, render} from "@testing-library/react";
import AccordionItem from ".";

describe("Test AccordionItem component", () => {
	it("Should pass when AccordionItem is defined", () => {
		render(
			React.cloneElement(
				<AccordionItem name="test" content="test" isActive={true} data-testid="accordion-test" />
			)
		);

		const accordionItem = screen.queryAllByTestId("accordion-test");
		expect(accordionItem).toBeDefined();
		expect(accordionItem).toMatchSnapshot();
	});
});
