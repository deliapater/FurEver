import React from "react";

const LocationSelect = ({locations, onLocationChange}) => {

  if(!locations) return null

 const options = locations.map((location, index) => {
   return <option key={index} value={location}>{location}</option>
 })

function handleSelectChange(evt){
   onLocationChange(evt.target.value)
 }

 return (
   <select onChange={handleSelectChange}>
     {options}
   </select>
 )

}

export default LocationSelect
