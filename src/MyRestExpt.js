// MyRestExpt
import { useState } from 'react';
import React from 'react';
import axios from 'axios';
export default function MyRestExpt({content}) {
	function handleClick(){
		alert('MyRestExpt clicked');
		axios.get('/json1.php')
		.then(function (response) {
    		// handle success
    		console.log(response);
  		})
  		.catch(function (error) {
    		// handle error
    		console.log(error);
  		})
  		.finally(function () {
    		// always executed
  		});
	}

	const outputArray = [];
	outputArray.push(<button key={200} onClick={handleClick}>Send REST Request</button>);

	let outerArray = [];
	outerArray.push(<div key={201} className='wrapper'>{outputArray}</div>);
	return ( <div>{outerArray}</div> );
};