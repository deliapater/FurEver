import React from 'react';
import Comment from './Comment';
import Request from '../../helpers/request';

class DogInfo extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    if(!this.props.dog){
      return null;
    }
    return (
      <div className="component">
      <ul>{this.props.dog.name}</ul>
      <img src = {this.props.dog.picture} className="expand" alt="profile" height="30%" width="30%"/>
      <ul>Breed: {this.props.dog.breed}</ul>
      <ul>Gender: {this.props.dog.gender}</ul>
      <ul>Age: {this.props.dog.age}</ul>
      <ul>Description: {this.props.dog.description}</ul>
      <button onClick = {this.props.handleDelete}>Delete {this.props.dog.name}</button>
      </div>
    )
  }

}

export default DogInfo;
