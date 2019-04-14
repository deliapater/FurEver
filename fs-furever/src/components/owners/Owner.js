import React  from 'react';
import {Link} from 'react-router-dom';

const Owner = (props) => {

  if(!props.owner) {
    return "loading..."
  }

  const url = `/owners/${props.owner.id}`;

  return (
    <>
    <Link to = {url} className="name">
    <p>Name: {props.owner.name}</p></Link>
    <p>Email: {props.owner.email}</p>
    <p>Dogs: {props.owner.dog.name}</p>
    </>
  )
}

export default Owner;
