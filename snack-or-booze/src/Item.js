import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

// COMPONENT - displays info on a single drink/snack item
function Item({ items, cantFind }) {
	const { id } = useParams();
	let snack = items.find((snack) => snack.id === id);
	let drink = items.find((drink) => drink.id === id);

	// if :id paramter from route is not found, redirect to either /snacks or /drinks (depending on the route)
	if (!snack && !drink) return <Redirect to={cantFind} />;
	const item = snack ? snack : drink;

	return (
		<section>
			<Card>
				<CardBody>
					<CardTitle className="font-weight-bold text-center">
						{item.name}
					</CardTitle>
					<CardText className="font-italic">{item.description}</CardText>
					<p>
						<b>Recipe:</b> {item.recipe}
					</p>
					<p>
						<b>Serve:</b> {item.serve}
					</p>
				</CardBody>
			</Card>
		</section>
	);
}

export default Item;
