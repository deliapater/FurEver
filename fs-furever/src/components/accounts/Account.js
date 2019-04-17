import React from 'react';
import {Link} from 'react-router-dom';
import Dog from '../dogs/Dog';
import DogList from '../dogs/DogList';
import MyDogsDetails from '../dogs/MyDogsDetails';
import Message from '../messages/Message';
import MessageList from '../messages/MessageList';
import Owner from '../owners/Owner';

const Account = (props) => {
  if(!props.owner) {
    return "Loading Account Page...."
  }

  // console.log(props.owner);
  // const url = `/message/${props.message.id}`;

  return(

    <div className="component">
    <MyDogsDetails dogs = {props.owner.dogs} />
    <MessageList messages = {props.owner.messages} />
    </div>
  )

}
export default Account
