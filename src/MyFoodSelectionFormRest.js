/*
Provides a html select for a meal choice.  The choices are at a high level.
The actual food stuffs in each choice are not considered at this level
of React component.  The choices are 'non hard coded' and provided by
Axios Rest.  It does an axios get to /jsonmealchoices.php for these.

The non-Rest companion to this file is MyFoodSelectionForm.js .
*/

import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import MyFoodSelectionRoom from './MyFoodSelectionRoom.js';
export default function MyFoodSelectionFormRest({idFoodSelectionForm}) {
	const [selections, setSelections] = useState(null);
	const [choice, setChoice] = useState(null);
	function handleOnChange() {
		console.log('MyFoodSelectionForm:handleOnChange');
		let tmpChoice = document.getElementById(idFoodSelectionForm).value;
		console.log(`MyFoodSelectionFormRest-tmpChoice: ${tmpChoice}`);
		setChoice(tmpChoice);
	}

  useEffect(() => {
    console.log(`MyFoodSelectionFormRest-useEffect`);
  	axios.get(`/jsonmealchoices.php`)
		.then(function (response) {
    		// handle success
    		console.log(response);
    		setSelections(response.data);
  		})
  		.catch(function (error) {
    		// handle error
    		console.log(error);
  		})
  		.finally(function () {
    		// always executed
  		});
    return () => {

    };
  }, [mealSelectionId]);

  	const innerSelectArray = [];
  	innerSelectArray.push(<option value="1">MealChoice1</option>);
  	innerSelectArray.push(<option value="2">MealChoice2</option>);

  	const outerSelectArray = [];
  	outerSelectArray.push(<select id={idFoodSelectionForm} onChange={handleOnChange}>{innerSelectArray}</select>);

	const outerFoodSelectionRoomArray = [];
	outerFoodSelectionRoomArray.push(<MyFoodSelectionRoom mealSelectionId={choice}/></div>);

	let outerArray = [];
	outerArray.push(<div key={201} className='wrapper'>{outerSelectArray}{outerFoodSelectionRoomArray}</div>);

	return (
		<div>{outerArray}</div>
	)
}