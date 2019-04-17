import React from 'react';
import OwnerList from '../owners/OwnerList';
import {LocationSelect, BreedSelect, GenderSelect} from './LocationSelect';

const FilterBar = ({locations, breeds, gender, onOptionChange}) => {

  if(!locations) {
    return "Loading Search FIlter...."
  }

  function handleSelectChange(evt){
    onOptionChange(evt.target.value)
  }

  const selectLocations = locations.map((location, index) => {
    return <option key={index} value={location}>{location}</option>
  })

  const selectBreeds = breeds.map((breed, index) => {
    return <option key={index} value={breed}>{breed}</option>
  })

  const selectGender = gender.map((gender, index) => {
    return <option key={index} value={gender}>{gender}</option>
  })

  return(
    <div>
    <h5>Filter Search</h5>
    <select name ="location" onChange={handleSelectChange}>
    {selectLocations}
    </select>

    <select name ="breeds" onChange={handleSelectChange}>
    {selectBreeds}
    </select>

    <select name ="gender" onChange={handleSelectChange}>
    <option key="index" value="male">Male</option>
    <option key="index" value="female">Female</option>
    </select>
    </div>
  )
}

export default FilterBar
