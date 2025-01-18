/*
Provides a html select for a meal choice.  The choices are at a high level.
The actual food stuffs in each choice are not considered at this level
of React component.  Only MealChoice1 and MealChoice2.  These are 'hard coded'.
These are provided by Axios Rest, in a related React component, namely
MyFoodSelectionFormRest.js .
*/
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import MyFoodSelectionRoom from './MyFoodSelectionRoom.js';
export default function MyFoodSelectionForm({idFoodSelectionForm}) {
	const [choice, setChoice] = useState(null);
	function handleOnChange() {
		console.log('MyFoodSelectionForm:handleOnChange');
		let tmpChoice = document.getElementById(idFoodSelectionForm).value;
		console.log(`tmpChoice: ${tmpChoice}`);
		setChoice(tmpChoice);
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