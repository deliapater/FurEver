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
    <div className="dog-info3">
    <ul>Breed: {props.dog.breed}</ul>
    <ul>Gender: {props.dog.gender}</ul>
    <ul>Description: {props.dog.description}</ul>
    <ul>Age: {props.dog.age}</ul>
    </div>
    <div className="container">
    <button id="contact">Contact Owner</button>
    </div>
    <div className="dog-info4">
    <p>Comments</p>
    <ul>
    <li>{newComments}</li>
    </ul>
    <CommentForm dogId={props.dog.id} dog={props.dog}/>
    </div>
    </div>



  )

}

export default DogDetails;
