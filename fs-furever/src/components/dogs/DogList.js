import React from 'react';
import Dog from './Dog.js';
import FilterBar from './FilterBar';

const DogList = (props) => {
  const dogs = props.dogs.map((dog) => {
    return (<li key={dog.id} className="component-item">
    <Dog dog={dog} />
    </li>
  )
})

return (
  <>
  <FilterBar />
  <ul className="component-list">
  {dogs}
  </ul>
  </>
)
}
export default DogList;
