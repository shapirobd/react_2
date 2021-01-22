import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import AddChoice from "./AddChoice";

test("it should render without crashing", () => {
	render(
		<MemoryRouter>
			<AddChoice />
		</MemoryRouter>
	);
});

test("snapshot test", () => {
	const { asFragment } = render(
		<MemoryRouter>
			<AddChoice />
		</MemoryRouter>
	);
	expect(asFragment()).toMatchSnapshot();
});
