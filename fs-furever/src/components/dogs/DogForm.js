import React from 'react';
import Request from '../../helpers/request';
import Breeds from './Breeds';
import Owners from '../owners/Owner';

class DogForm extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        name: "",
        gender: "",
        age: 0,
        picture: "",
        description: "",
        breeds: [
            'Affen Pinscher',
            'Afghan Hound',
            'Airedale Terrier',
            'Akita',
            'Alaskan Klee Kai',
            'Alaskan Malamute',
            'American Bulldog',
            'American English Coonhound',
            'American Eskimo Dog',
            'American Foxhound',
            'American Pitbull Terrier',
            'American Staffordshire Terrier',
            'American Water Spaniel',
            'Anatolian Shepherd Dog',
            'Appenzeller Sennenhunde',
            'Australian Cattle Dog',
            'Australian Kelpie',
            'Australian Shepherd',
            'Australian Terrier',
            'Azawakh Barbet',
            'Basenji',
            'BassetHound',
            'Beagle',
            'Bearded Collie',
            'BedlingtonT errier',
            'Belgian Malinois',
            'Belgian Sheepdog',
            'Belgian Tervuren',
            'Berger Picard',
            'Bernedoodle',
            'Bernese Mountain Dog',
            'Bichon Frise',
            'Black and Tan Coonhound',
            'Black Mouth Cur',
            'Black Russian Terrier',
            'Bloodhound',
            'BlueLacy',
            'Bluetick Coonhound',
            'Boerboel',
            'Bolognese',
            'Border Collie',
            'Border Terrier',
            'Borzoi',
            'Boston Terrier',
            'Daschund',
            'Ladrador',
            'Bulldog',
            'Germen Sheperd',
            'Chihuaha']
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      }

      handleChange(event){
      this.setState({text: event.target.value})
  }


handleSubmit(event){
    event.preventDefault();
    const dog = {
      "name": event.target.name.value,
      "gender": event.target.gender.value,
      "picture":event.target.picture.value,
      "description": event.target.description.value,
      "breed": event.target.breed.value,
      "owner": "http://localhost:8080/api/owners/1"
    }
    console.log(dog);
    this.props.handleSubmitDog(dog);
  }





render(){

  const breedSelect = this.state.breeds.map((breed, index) => {
    return <option key={index} value={breed}>{breed}</option>
  })

  return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <input type = "text" placeholder ="Name" name="name"/>
          <select name="breed">
            {breedSelect}
          </select>
          <select name = "gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input type = "number" placeholder ="Age" name="age"/>
          <input type = "text" placeholder ="Picture" name="picture"/>
          <input type = "text" placeholder ="Description" name="description"/>
          <button type = "submit">Save</button>
        </form>
      </div>
    );
  }
}
export default DogForm;
