import React from 'react';
import Dog from './Dog';
import Owner from '../owners/Owner';
import CommentForm from './CommentForm';

const DogDetails = (props) => {

  if (!props.dog){
    return "loading....";
  }


 const newComments = props.dog.comments.map((dog, index) => {
   return dog.text
 })

 return (

    <div className="component">
    <Dog dog = {props.dog}  />
    <ul>Breed: {props.dog.breed}</ul>
    <ul>Gender: {props.dog.gender}</ul>
    <ul>Description: {props.dog.description}</ul>
    <ul>Age: {props.dog.age}</ul>
  <ul>Owner:</ul><Owner owner = {props.dog.owner}  />
    <p>Comments</p>
    <ul>
    <li>{newComments}</li>
    </ul>
    <CommentForm />
    </div>
  )

}

export default DogDetails;
