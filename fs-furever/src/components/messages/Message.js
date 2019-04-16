import React from 'react';
import {Link} from 'react-router-dom';

const Message = (props) => {

  if(!props.message) {
    return "loading..."
  }

  const url = `/messages/${props.message.id}`;

  return (
    <>
    <Link to = {url} className="title">
    <p>{props.message.title}</p></Link>
    <p>{props.message.txtMessage}</p>
    </>
  )
}

export default Message;
