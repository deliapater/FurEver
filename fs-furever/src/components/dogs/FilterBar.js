import React from 'react';
import OwnerList from '../owners/OwnerList';


const FilterBar = ({locations, breeds, handleBreedSelect, handleGenderSelect, handleLocationSelect}) => {

  if(!locations) {
    return "Loading Search FIlter...."
  }

  function handleSelectLocationChange(evt){
    handleLocationSelect(evt.target.value)
  }

  function handleSelectBreedChange(evt){
    handleBreedSelect(evt.target.value)
  }

  function handleSelectGenderChange(evt){
    handleGenderSelect(evt.target.value)
  }


  const selectLocations = locations.map((location, index) => {
    return <option key={index} value={location}>{location}</option>
  })

  const selectBreeds = breeds.map((breed, index) => {
    return <option key={index} value={breed}>{breed}</option>
  })


  return(
    <div>
    <h5>Filter Search</h5>
    <select name ="location" onChange={handleSelectLocationChange}>
    {selectLocations}
    </select>

    <select name ="breeds" onChange={handleSelectBreedChange}>
    {selectBreeds}
    </select>

    <select name ="gender" onChange ={handleSelectGenderChange}>
    <option key="index" value="Male">Male</option>
    <option key="index" value="Female">Female</option>
    </select>
    </div>
  )
}



export default FilterBar
