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
      <div className="row">
      <div className="col s12">
      <div className="col s8 m4">
      <div className="card">
      <div className="card-image">
      <img src = {this.props.dog.picture} className="expand" alt="profile" />
      <span class="card-title"><h4 className="red lighten-2">{this.props.dog.name}</h4></span>
      </div>
      <div class="card-content">
      <ul>Breed: {this.props.dog.breed}</ul>
      <ul>Gender: {this.props.dog.gender}</ul>
      <ul>Age: {this.props.dog.age}</ul>
      <ul>Description: {this.props.dog.description}</ul>
      <button onClick = {this.props.handleDelete}>Delete {this.props.dog.name}</button>
      </div></div></div></div></div>
    )
  }

}

export default DogInfo;
