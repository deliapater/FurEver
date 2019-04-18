
import React from 'react';
import Dog from './Dog';
import Owner from '../owners/Owner';
import DogForm from './DogForm';
import DogList from './DogList';
import DogDetails from './DogDetails'
import Breeds from './Breeds';
import DogInfo from './DogInfo';
import Request from "../../helpers/request";

const MyDogsDetails = (props) => {

  if (!props.dogs){
    return "Please add a new dog...";
  }

  const handleDelete = () => {
    props.onDelete(props.dog.id);
  }

  const handleClickAdd = () => {
      window.location = '/dogs/new';
  }

  const dogObjectArray = props.dogs.map((object) => {
    return <DogInfo dog = {object} handleDelete={handleDelete}/>
  })

  return(
<div>
    <div className="my-dogs">
    {dogObjectArray}
    </div>
    <div className="my-dogs-btn">
      <button type="submit" onClick={handleClickAdd}>Add Dog</button>
    </div>

    </div>

  )

}

export default MyDogsDetails
