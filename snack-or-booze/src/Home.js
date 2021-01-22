import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import "./Home.css";

// COMPONENT - the welcome page for the app that is rendered at the root route
function Home({ snacks, drinks }) {
	return (
		<section className="col-md-8">
			<Card>
				<CardBody className="text-center">
					<CardTitle>
						<h3 className="font-weight-bold">
							Welcome to Silicon Valley's premier dive cafe!
						</h3>
					</CardTitle>
					<CardText>
						<h4>We have {snacks.length} snacks</h4>
						<h4>We have {drinks.length} drinks</h4>
					</CardText>
				</CardBody>
			</Card>
		</section>
	);
}

export default Home;
