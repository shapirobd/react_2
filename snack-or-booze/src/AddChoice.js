import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import "./AddChoice.css";

// COMPONENT - contains option to choose whether you'd like to add a snack or a drink, and then takes you to new form to add one once you click an option.
const AddChoice = () => {
	return (
		<section className="col-md-4">
			<Card>
				<CardBody>
					<CardTitle className="font-weight-bold text-center">
						Would you like to add a snack or a drink?
					</CardTitle>
					<CardText>
						<Link to="/add/snack">Snack</Link>
						<Link to="/add/drink">Drink</Link>
					</CardText>
				</CardBody>
			</Card>
		</section>
	);
};

export default AddChoice;
