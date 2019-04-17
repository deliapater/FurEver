import React from 'react';
import Owner from './Owner';

const OwnerList = ({owners}) => {

 if(owners.length === 0) return null;

	// const owners = locations.map((owner, index) => {
	// 	return (
	// 		<li key={index} className="component_list">
	// 		<div className="component">
	// 		<Owner owner={owner.location}/>
	// 		</div>
	// 		</li>
	// 	)
	// })

	return (
		<ul className="component-list">
		</ul>
	)
}

export default OwnerList;
