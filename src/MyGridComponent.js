import { useState } from 'react';
import React from 'react';
export default function MyGridComponent({content}) {
	return (
		<div className="wrapper">
		<div className="wrapperElement">{content}</div>
		<div className="wrapperElement">E2</div>
		<div className="wrapperElement">E3</div>
		<div className="wrapperElement">E4</div>
		<div className="wrapperElement">E5</div>
		<div className="wrapperElement">E6</div>
		<div className="wrapperElement">E7</div>
		<div className="wrapperElement">E8</div>
		</div>
	);
};