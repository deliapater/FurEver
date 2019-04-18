import React from 'react';
import Dog from './Dog.js';
import FilterBar from './FilterBar'

const DogList = (props) => {
  const dogs = props.dogs.map((dog) => {
    return (<li key={dog.id} className="component-item">
    <Dog dog={dog} />
    </li>
  )
})

//continue passing functions, locations and breeds down as props into FilterBar

return (
  <>

  <FilterBar locations = {props.locations}
            breeds = {props.breeds}
            dogs = {props.dogs}
            handleGenderSelect = {props.handleGenderSelect}
            handleBreedSelect = {props.handleBreedSelect}
            handleLocationSelect = {props.handleLocationSelect}



            />
  <ul className="component-list">
  {dogs}
  </ul>
  </>
)
}
export default DogList;
