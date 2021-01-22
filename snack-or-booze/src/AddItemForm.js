import React from "react";
import "./AddItemForm.css";

// COMPONENT - form to add new drink/snack
const AddItemForm = ({ handleSubmit, handleChange }) => {
	return (
		<form className="AddItemForm" onSubmit={handleSubmit}>
			<label htmlFor="name">Name</label>
			<input type="text" name="name" onChange={handleChange} />

			<label htmlFor="description">Description</label>
			<input type="text" name="description" onChange={handleChange} />

			<label htmlFor="recipe">Recipe</label>
			<input type="text" name="recipe" onChange={handleChange} />

			<label htmlFor="serve">Serve</label>
			<input type="text" name="serve" onChange={handleChange} />

			<button>Submit</button>
		</form>
	);
};

export default AddItemForm;
