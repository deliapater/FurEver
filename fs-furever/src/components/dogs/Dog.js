import React  from 'react';
import {Link} from 'react-router-dom';
import Comment from './Comment';

const Dog = (props) => {

  const url = `/dog/${props.dog.id}`;
  const location = props.dog.owner ? <p className="location">{props.dog.owner.location}</p> : null

  return (
    <div className="component">
    <Link to = {url} className="name">
    {props.dog.name}</Link>

        <img src = {props.dog.picture} className="expand" alt="profile" height="30%" width="30%"/>
        {location}

    </div>
  )
}

export default Dog;
