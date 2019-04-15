import React from 'react';
import Dog from './Dog';
import Owner from '../owners/Owner';

const DogDetails = (props) => {

  if (!props.dog){
    return "loading....";
  }

  console.log(props);


  return(

    <div className="component">
    <Dog dog = {props.dog}  />
    <ul>Breed: {props.dog.breed}</ul>
    <ul>Gender: {props.dog.gender}</ul>
    <ul>Description: {props.dog.description}</ul>
    <ul>Age: {props.dog.age}</ul>
    <Owner owner = {props.dog.owner}  />
    </div>
  )

}

export default DogDetails
