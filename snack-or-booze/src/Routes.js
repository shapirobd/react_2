import React, { useState, useEffect } from "react";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Snack from "./Item";
import Drink from "./Item";
import AddChoice from "./AddChoice";
import AddItemPage from "./AddItemPage";
import SnacksDrinksContext from "./SnacksDrinksContext";

// COMPONENT - contains all routes within the app and most all of the state and useEffects
const Routes = () => {
	// initial state for form to add new drink/snack
	const INITIAL_FORM_STATE = {
		name: "",
		description: "",
		recipe: "",
		serve: "",
	};
	// piece of state that represents wheter page is loading
	const [isLoading, setIsLoading] = useState(true);
	// piece of state that is an array of all snack items
	const [snacks, setSnacks] = useState([]);
	// piece of state that is an array of all drink items
	const [drinks, setDrinks] = useState([]);
	// piece of state that represents whether the form to add new drink/snack has been submitted or not
	const [formSubmitted, setFormSubmitted] = useState(false);
	// piece of state that represents the data within the form to add new dirnk/snack
	const [formData, setFormData] = useState(INITIAL_FORM_STATE);
	// piece of state that represents whether the form is being used to create a snark or drink (set to null if no form on page)
	const [formType, setFormType] = useState(null);

	// toggles the boolean value of formSubmitted
	const toggleFormSubmitted = () => {
		setFormSubmitted((formSubmitted) => !formSubmitted);
	};

	// on initial render of app, this effect stores all snacks from the db into snacks state
	useEffect(() => {
		async function getSnacks() {
			let snacks = await SnackOrBoozeApi.getSnacks();
			setSnacks(snacks);
			setIsLoading(false);
		}
		getSnacks();
	}, []);

	// on initial render of app, this effect stores all drinks from the db into drinks state
	useEffect(() => {
		async function getDrinks() {
			let drinks = await SnackOrBoozeApi.getDrinks();
			setDrinks(drinks);
			setIsLoading(false);
		}
		getDrinks();
	}, []);

	// whenever form submits, create a post request to add new drink/snack to the db
	useEffect(() => {
		if (formSubmitted) {
			// resets all state related to the form to create new drink/snack
			const resetFormStates = () => {
				setFormData(INITIAL_FORM_STATE);
				toggleFormSubmitted();
				setFormType(null);
			};
			async function postSnack() {
				await SnackOrBoozeApi.postSnack(formData);
			}
			async function postDrink() {
				await SnackOrBoozeApi.postDrink(formData);
			}
			formType === "snack" ? postSnack() : postDrink();
			resetFormStates();
		}
	}, [formSubmitted, formData, formType]);

	// loading display
	if (isLoading) {
		return <p>Loading &hellip;</p>;
	}

	return (
		<SnacksDrinksContext.Provider
			value={{
				snacks,
				setSnacks,
				drinks,
				setDrinks,
				setFormType,
				formData,
				setFormData,
				toggleFormSubmitted,
			}}
		>
			<Switch>
				{/* Takes you to welcome page with drink/snack count */}
				<Route exact path="/">
					<Home snacks={snacks} drinks={drinks} />
				</Route>
				{/* Takes you to page to choose if you want to add a drink/snack */}
				<Route exact path="/add">
					<AddChoice />
				</Route>
				{/* Takes you to page that contains AddItemForm to add new drink/snack */}
				<Route path="/add/:itemType">
					<AddItemPage cantFind="/add" />
				</Route>
				{/* Takes you to page for details on a single snack */}
				<Route path="/snacks/:id">
					<Snack items={snacks} cantFind="/snacks" />
				</Route>
				{/* Takes you to page for details on a single drink */}
				<Route path="/drinks/:id">
					<Drink items={drinks} cantFind="/drinks" />
				</Route>
				{/* Only "snacks" or "drinks" is valid for ":itemType" - takes you to list of snacks/drinks */}
				<Route path="/:itemType">
					<Menu cantFind="/" />
				</Route>
				{/* If path matches none of the above routes, show page not found message */}
				<Route>
					<p>Hmmm. I can't seem to find what you want.</p>
				</Route>
			</Switch>
		</SnacksDrinksContext.Provider>
	);
};

export default Routes;
