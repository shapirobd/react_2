import React, { useContext } from "react";
import { Redirect, useParams, useHistory } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import SnacksDrinksContext from "./SnacksDrinksContext";
import AddItemForm from "./AddItemForm";

// COMPONENT - contains handleChange & handleSubmit functions for the form to add new snack/drink, as well as the form itsself
const AddItemPage = ({ cantFind }) => {
	const history = useHistory();
	const { itemType } = useParams();

	const {
		setSnacks,
		setDrinks,
		setFormType,
		formData,
		setFormData,
		toggleFormSubmitted,
	} = useContext(SnacksDrinksContext);

	// if :itemType parameter is anything but "snacks" or "drinks", redirect to "/add"
	if (itemType !== "snack" && itemType !== "drink")
		return <Redirect to={cantFind} />;
	setFormType((formType) => itemType);

	// changes data in formData depending on what's being typed in text inputs in form
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
	};

	// when form submits, generate an id for the drink/snack and then update state of either drinks or snacks (depending on what itemType is) & toggle formSubmitted (basically setting it to true) which will fire one of the useEffects from Routes.js
	const handleSubmit = (e) => {
		e.preventDefault();
		const lowerName = formData.name.toLowerCase();
		let id = "";
		for (let char of lowerName) {
			char === " " ? (id += "-") : (char = id += char);
		}
		itemType === "snack"
			? setSnacks((snacks) => [...snacks, { id, ...formData }])
			: setDrinks((drinks) => [...drinks, { id, ...formData }]);
		toggleFormSubmitted();
		history.push(`/${itemType}s`);
	};

	return (
		<section className="col-md-4">
			<Card>
				<CardBody>
					<CardTitle className="font-weight-bold text-center">
						Add a {itemType}
					</CardTitle>
					<CardText>
						<AddItemForm
							handleChange={handleChange}
							handleSubmit={handleSubmit}
						/>
					</CardText>
				</CardBody>
			</Card>
		</section>
	);
};

export default AddItemPage;
