import React  from 'react';

const Dog = (props) => {
  if(!props.dog){
    return null;
  }

var owner = [];

  if(props.dog.owner){
  owner = props.dog.owner.map(element => {
    return <p>{element.owner}</p>
  })
}

  return (
    <div className="component">
    <p className="name">
    {props.dog.name}
    </p>
    <p className="owner">
    {props.dog.owner}
    </p>
    </div>
  )
}

export default Dog;
