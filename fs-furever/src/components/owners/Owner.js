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
    <p>{props.owner.name}</p></Link>
    <p>{props.owner.location}</p>
    </>
  )
}

export default Owner;
