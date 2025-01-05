// MyGridEfficient
import { useState } from 'react';
import React from 'react';
export default function MyGridEfficient({content}) {
	let lenContent = content.length;
	console.log(`lenContent=${lenContent}`);
	return (
		<div className="wrapper">
		<div className="wrapperElement">{content[0]}</div>
		<div className="wrapperElement">{content[1]}</div>
		<div className="wrapperElement">{content[2]}</div>
		<div className="wrapperElement">{content[3]}</div>
		<div className="wrapperElement">{content[4]}</div>
		<div className="wrapperElement">{content[5]}</div>
		<div className="wrapperElement">{content[6]}</div>
		<div className="wrapperElement">{content[7]}</div>
		</div>
	);
};