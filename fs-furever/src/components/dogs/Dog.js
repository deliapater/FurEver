import React  from 'react';
import Comment from './Comment';
import {Link} from 'react-router-dom';

const Dog = (props) => {

  const url = `/dog/${props.dog.id}`;


  return (
    <div className="component">
    <Link to = {url} className="name">
    {props.dog.name}</Link>

        <img src = {props.dog.picture} className="expand" alt="profile" height="30%" width="30%"/>
    


    </div>
  )
}

export default Dog;
