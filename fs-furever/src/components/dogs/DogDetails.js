import React from 'react';
import Dog from './Dog';
import Owner from '../owners/Owner';

const DogDetails = (props) => {

if (!props.dog){
  return "loading....";
}

// const dog = props.dogs.map((dog, index) => {
//   return <li key={index}>{dog.name}</li>
// })

return(

  <div className="component">
    <Dog dog = {props.dog}  />
    <ul>{props.dog.description}</ul>
    <ul>{props.dog.gender}</ul>
    <ul>{props.dog.age}</ul>
  </div>
)

}

export default DogDetails
