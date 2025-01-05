// MyGridEfficient
import { useState } from 'react';
import React from 'react';
function do_a_for() {
		let y=2;
		for ( let i=0; i <= 7; i++ ) {
			// output = output + "<div className='wrapperElement'>{content[i]}</div>";
			y = y + i;
		}
		return y;
}
export default function MyGridEfficient({content}) {
	const outputArray = [];

	for (let i = 0; i<content.length; i++) {
		outputArray.push(<div key={i} className='wrapperElement'>{content[i]}</div>);
	}
	let outerArray = [];
	outerArray.push(<div key={100} className='wrapper'>{outputArray}</div>);
	return ( <div>{outerArray}</div> );
};