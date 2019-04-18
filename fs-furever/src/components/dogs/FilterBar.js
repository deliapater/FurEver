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
    <div className="drop-down">
    <h3>Search</h3>
    <legend className="legend">Location</legend>
    <select name ="location" onChange={handleSelectLocationChange} id="search_categories">
    {selectLocations}
    </select>

    <legend className="legend">Breed</legend>
    <select name ="breeds" onChange={handleSelectBreedChange}>
    {selectBreeds}
    </select>

    <legend className="legend">Gender</legend>
    <select name ="gender" onChange ={handleSelectGenderChange}>
    <option key="index" value="Male">Male</option>
    <option key="index" value="Female">Female</option>
    </select>
    </div>
  )
}



export default FilterBar
