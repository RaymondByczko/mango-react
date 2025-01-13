import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import MyFoodSelectionRoom from './MyFoodSelectionForm.js';
export default function MyFoodSelectionForm({idFoodSelectionForm}) {
	const [choice, setChoice] = useState(null);
	function handleOnChange() {
		console.log('MyFoodSelectionForm:handleOnChange');
		let choice = document.getElementById(idFoodSelectionForm).value;
		console.log(`choice: ${choice}`);
	}
	return (
		<div>
		<select id={idFoodSelectionForm} onChange={handleOnChange}>
			<option value="1">MealChoice1</option>
  			<option value="2">MealChoice2</option>
		</select>
		<MyFoodSelectionRoom mealSelectionId={choice}/>
		</div>
	)
}