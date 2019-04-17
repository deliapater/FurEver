import React from 'react';

const Comment = (props) => {
  if(!props.children){
    return "loading............."
  }

  return(
    <p>{props.children}</p>
  )
}
export default Comment
