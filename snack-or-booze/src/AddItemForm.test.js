import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import AddItemForm from "./AddItemForm";

test("it should render without crashing", () => {
	render(
		<MemoryRouter>
			<AddItemForm />
		</MemoryRouter>
	);
});

test("snapshot test", () => {
	const { asFragment } = render(
		<MemoryRouter>
			<AddItemForm />
		</MemoryRouter>
	);
	expect(asFragment()).toMatchSnapshot();
});
