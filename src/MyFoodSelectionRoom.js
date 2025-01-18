import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

export default function MyFoodSelectionRoom ({mealSelectionId}) {
  const [mealChoice, setMealChoice] = useState(null);
  console.log('MyFoodSelectionRoom');
  console.log(`mealSelectionId=${mealSelectionId}`);
  let effectiveMealId = null;
  useEffect(() => {
  	if ((mealSelectionId != "1") && (mealSelectionId != "2")) {
  		effectiveMealId = 0;
  	}
  	else {
  		effectiveMealId = mealSelectionId;
  	}
    console.log(`effectiveMealId=${effectiveMealId}`);
  	axios.get(`/json${effectiveMealId}.php`)
		.then(function (response) {
    		// handle success
    		console.log(response);
    		setMealChoice(response.data);
  		})
  		.catch(function (error) {
    		// handle error
    		console.log(error);
  		})
  		.finally(function () {
    		// always executed
  		});
    return () => {
      // setMealChoice('DefaultMeal');
    };
  }, [mealSelectionId]);
  return (
  	<div>{JSON.stringify(mealChoice)}</div>
  	)
}