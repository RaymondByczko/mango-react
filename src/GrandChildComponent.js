// GrandChildComponent.js
import { useState, useContext } from 'react';
import React from 'react';
import GrandMaComponent from'./GrandMaComponent.js'
import {GrandMaContext} from'./GrandMaComponent.js'
export default function GrandChildComponent({content}) {
	const gmc = useContext(GrandMaContext);

	return (
		<div className="grandchild">
      		<button>{gmc}</button>
      		<button>{gmc}</button>
      	</div>
	 );
};