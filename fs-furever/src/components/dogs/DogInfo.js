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

      <div className="dog-info2">
      <img src = {this.props.dog.picture} className="expand" alt="profile" />
      <span class="card-title"><h4 className="red lighten-2">{this.props.dog.name}</h4></span>
      <ul>Breed: {this.props.dog.breed}</ul>
      <ul>Gender: {this.props.dog.gender}</ul>
      <ul>Age: {this.props.dog.age}</ul>
      <ul>Description: {this.props.dog.description}</ul>
      </div>
    )
  }

}

export default DogInfo;
