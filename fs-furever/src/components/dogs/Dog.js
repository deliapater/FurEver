import React  from 'react';
import Comment from './Comment';
import {Link} from 'react-router-dom';

const Dog = (props) => {

  const url = `/dog/${props.dog.id}`;

  const newComments = props.dog.comments.map((dog, index) => {
    return dog.text
  })

  return (
    <div className="component">
    <Link to = {url} className="name">
    {props.dog.name}</Link>

    <img src = {props.dog.picture} className="expand"/>
    <p className="location">{props.dog.owner.location}</p>
    <ul>
    <li>{newComments}</li>
    </ul>

    </div>
  )
}

export default Dog;
