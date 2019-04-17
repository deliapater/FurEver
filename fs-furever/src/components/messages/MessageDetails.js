import React from 'react';
import Message from './Message';

const MessageDetails = (props) => {

  if(!props.message){
    return "loading...."
  }

  const handleDelete = () => {
    props.onDelete(props.message.id);
  }

  // const messages = props.message.owner.map((message, index) => {
  //   return <li key={index}>{message.title}</li>
  // })

  return (
    <div className = "component">
    <Message message = {props.message.txtMessage} />
    <button onClick = {handleDelete}>Delete {props.message}</button>
    </div>
  )
}

export default MessageDetails;
