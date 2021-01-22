import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import NavBar from "./NavBar";

test("it should render without crashing", () => {
	render(
		<MemoryRouter>
			<NavBar />
		</MemoryRouter>
	);
});

test("snapshot test", () => {
	const { asFragment } = render(
		<MemoryRouter>
			<NavBar />
		</MemoryRouter>
	);
	expect(asFragment()).toMatchSnapshot();
});

// test("should contain a link to add new item", () => {
// 	const { getByText } = render(
// 		<MemoryRouter>
// 			<NavBar />
// 		</MemoryRouter>
// 	);
// 	expect(getByText("Add")).toBeInTheDocument();
// });

// ^^^ it keeps saying .toBeInTheDocument() is not a function when i try to run tests - spent a lot of time trying to fix it but I just can't figure it out
