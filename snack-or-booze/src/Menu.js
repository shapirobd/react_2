import React, { useContext } from "react";
import { Redirect, Link, useParams } from "react-router-dom";
import "./Menu.css";
import {
	Card,
	CardBody,
	CardTitle,
	CardText,
	ListGroup,
	ListGroupItem,
} from "reactstrap";
import SnacksDrinksContext from "./SnacksDrinksContext";

// COMPONENT - contains list of all drinks/snacks (depending on which is being requested)
function Menu({ cantFind }) {
	const { itemType } = useParams();
	const { snacks, drinks } = useContext(SnacksDrinksContext);
	let title;
	let header;
	let items;

	// if :itemType parameter is anything but "snacks" or "drinks", redirect to home page
	if (itemType === "snacks") {
		title = "Snacks";
		header = "Food";
		items = snacks;
	} else if (itemType === "drinks") {
		title = "Drinks";
		header = "Drink";
		items = drinks;
	} else {
		return <Redirect to={cantFind} />;
	}

	return (
		<section className="col-md-4">
			<Card>
				<CardBody>
					<CardTitle className="font-weight-bold text-center">
						{header} Menu
					</CardTitle>
					<CardText>Enjoy our Delicious {title}!</CardText>
					<ListGroup>
						{items.map((item) => (
							<Link to={`/${title.toLowerCase()}/${item.id}`} key={item.id}>
								<ListGroupItem>{item.name}</ListGroupItem>
							</Link>
						))}
					</ListGroup>
				</CardBody>
			</Card>
		</section>
	);
}

export default Menu;
