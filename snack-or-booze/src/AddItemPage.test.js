import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import App from "./App";

test("it should render without crashing", () => {
	render(
		<MemoryRouter initialEntries={["/add/drink"]}>
			<App />
		</MemoryRouter>
	);
});

test("snapshot test", () => {
	const { asFragment } = render(
		<MemoryRouter initialEntries={["/add/drink"]}>
			<App />
		</MemoryRouter>
	);
	expect(asFragment()).toMatchSnapshot();
});
