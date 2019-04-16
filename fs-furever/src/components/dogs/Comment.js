import React from 'react';

const Comment = (props) => {
  if(!props.children){
    return "loading............."
  }

  return(
    <ul>{props.children}</ul>
  )
}
export default Comment
