import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

export default function MyFoodSelectionRoom ({mealSelectionId}) {
  const [mealChoice, setMealChoice] = useState(null);
  useEffect(() => {
  	if (mealSelectionId != 1) || (mealSelectionId != 2) {
  		effectiveMealId = 0;
  	}
  	else {
  		effectiveMealId = mealSelectionId;
  	}
  	axios.get("/json{effectiveMealId}.php")
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
      setMealChoice(null);
    };
  }, [mealSelectionId]);
  return (
  	<div>{mealChoice}</div>
  	)
}