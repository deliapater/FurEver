import React from 'react';
import Dog from './Dog';
import Owner from '../owners/Owner';
import DogForm from './DogForm';
import DogList from './DogList';
import DogDetails from './DogDetails'
import Breeds from './Breeds';
import DogInfo from './DogInfo';

const MyDogsDetails = (props) => {

  if (!props.dogs){
    return "Please add a new dog...";
  }

  const handleDelete = () => {
    props.onDelete(props.dog.id);
  }

  const dogObjectArray = props.dogs.map((object) => {
    return <DogInfo dog={object} handleDelete={handleDelete}/>
  })

  return(
    <div>
    {dogObjectArray}
    </div>
  )

}

export default MyDogsDetails
