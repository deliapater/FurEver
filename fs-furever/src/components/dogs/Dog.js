import React  from 'react';

const Dog = (props) => {

  return (
    <div className="component">
    <p className="name">
    {props.dog.name}
    </p>
    <img src = {props.dog.picture} alt="Image" class="expand"/>
    <p className="location">{props.dog.owner.location}</p>



    </div>
  )
}

export default Dog;
