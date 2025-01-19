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
    		console.log(`MyFoodSelectionFormRest-jsonmeal-response.data=${JSON.stringify(response.data)}`);
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
   }, [idFoodSelectionForm]);

//   }, [idFoodSelectionForm, selections, choice]);

  	if (selections != null) {
  		console.log('selections: not null');
  		console.log(`... selections: ${selections}`);
  		console.log(`... selections(JS): ${JSON.stringify(selections)}`);
  		console.log(`... keys: ${Object.keys(selections)}`);

  		// selections.forEach( (value, key, map)=>{
  		//	console.log(`value=${value}, key=${key}`);
  		// });
  		// let arraySelections = Array.from(selections);
  		// let arraySelections = Array.from(JSON.stringify(selections));
  		// let arraySelections = Array.from(JSON.parse(selections));
  		// arraySelections.forEach( (value, key, map)=>{
  		// 	console.log(`value=${value}, key=${key}`);
  		// });
  		//
		Object.keys(selections).forEach((key) => {
  			console.log("...key=", key, ", selections[]=", selections[key]);
		});
  	}
  	else {
  		console.log('selections:null');
  	}
  	const innerSelectArray = [];
  	if (0==1){
  		innerSelectArray.push(<option key={1001} value="1">MealChoice1</option>);
  		innerSelectArray.push(<option key={1002} value="2">MealChoice2</option>);
	} else if (selections != null) {
		Object.keys(selections).forEach((key) => {
  			console.log("...key=", key, ", selections[]=", selections[key]);
			innerSelectArray.push(<option key={1000+key} value={key}>{selections[key]}</option>);
		});
	}
  	const outerSelectArray = [];
  	outerSelectArray.push(<select key={1003} id={idFoodSelectionForm} onChange={handleOnChange}>{innerSelectArray}</select>);

	const outerFoodSelectionRoomArray = [];
	outerFoodSelectionRoomArray.push(<MyFoodSelectionRoom key={1005} mealSelectionId={choice}/>);

	let outerArray = [];
	outerArray.push(<div key={1004} className='wrapper'>{outerSelectArray}{outerFoodSelectionRoomArray}</div>);

	return (
		<div className="foodselectionrest">{outerArray}</div>
	)
}