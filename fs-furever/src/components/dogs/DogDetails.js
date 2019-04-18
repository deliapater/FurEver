import React from 'react';
import Dog from './Dog';
import Owner from '../owners/Owner';
import CommentForm from './CommentForm';
import Comment from './Comment';

const DogDetails = (props) => {

  if (!props.dog){
    return "loading....";
  }

 const newComments = props.dog.comments.map(comment => {
       return (
         <Comment key={comment.id}>{comment.text}</Comment>
       )
     })
 return (

    <div className="dog-info">
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
    <CommentForm dogId={props.dog.id} dog={props.dog}/>
    </div>
  )

}

export default DogDetails;
