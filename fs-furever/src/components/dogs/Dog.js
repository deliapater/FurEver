import React  from 'react';

const Dog = (props) => {

  return (
    <div className="component">
    <p className="name">
    {props.dog.name}
    </p>
    </div>
  )
}

export default Dog;
