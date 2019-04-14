import React from 'react';
import Owner from './Owner';

const OwnerList = (props) => {

	const owners = props.owners.map((owner, index) => {
		return (
			<li key={index} className="component_list">
			<div className="component">
			<Owner owner={owner}/>
			</div>
			</li>
		)
	})

	return (
		<ul className="component-list">
		{owners}
		</ul>
	)
}

export default OwnerList;
