import React from 'react';
import Dog from './Dog';
import Owner from '../owners/Owner';

const MyDogsDetails = (props) => {


  if (!props.dog){
    return "Please add a new dog";
  }

  console.log(props);

  const handleDelete = () => {
    props.onDelete(props.dog.id);
  }



  return(

    <div className="component">
    <ul>{props.dog.name}</ul>
    <img src = {props.dog.picture} className="expand" alt="profile" height="30%" width="30%"/>
    <ul>Breed: {props.dog.breed}</ul>
    <ul>Gender: {props.dog.gender}</ul>
    <ul>Location: {props.dog.owner.location}</ul>
    <ul>Age: {props.dog.age}</ul>
    <ul>Description: {props.dog.description}</ul>
    <ul>My Account: </ul>
    <ul> {props.dog.owner.name} </ul>
    <ul> {props.dog.owner.email} </ul>
    <button onClick = {handleDelete}>Delete {props.dog.name}</button>
    </div>

  )

}

export default MyDogsDetails
