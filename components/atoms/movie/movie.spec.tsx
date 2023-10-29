import * as React from "react";
import {screen, render} from "@testing-library/react";
import Movie from "./";

describe("Test Movie component", () => {
	it("Should pass when file props in Movie is defined", () => {
		render(<Movie file="/test" data-testid="movie-test" />);
		const movie = screen.queryByTestId("movie-test");
		expect(movie).toBeDefined();
		expect(movie).toMatchSnapshot();
	});
});
