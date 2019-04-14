import React from 'react';
import Owner from './Owner';

const OwnerDetails = (props) => {

  if(!props.owner){
    return "Loading...."
  }

  const handleDelete = () => {
    props.onDelete(props.owner.id);
  }

  const dogs = props.owner.dogs.map((dog, index) => {
    return <li key={index}>{dog.name}</li>
  })

  return (
    <div className = "component">
    <Owner owner = {props.owner} />
    <ul>{dogs}</ul>
    <button onClick = {handleDelete}>Delete {props.owner.name}</button>
    </div>
  )
}

export default OwnerDetails;
