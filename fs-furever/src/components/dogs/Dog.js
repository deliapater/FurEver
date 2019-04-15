import React  from 'react';
import Comment from './Comment';
import {Link} from 'react-router-dom';

const Dog = (props) => {

  const url = `/dog/${props.dog.id}`;

  // const comments = props.dog.comments.map((dog) => {
  //   return dog.text
  // })

  return (
    <div className="component">
      <Link to = {url} className="name">
        {props.dog.name}</Link>

        <img src = {props.dog.picture} class="expand"/>
        <p className="location">{props.dog.owner.location}</p>
        <p className="comments">{props.dog.comments[0].text}</p>
      </div>
    )
  }

  export default Dog;
