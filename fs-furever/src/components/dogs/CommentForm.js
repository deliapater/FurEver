import React from 'react';
import Comment from './Comment';
import Request from '../../helpers/request';

class CommentForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      text: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({text: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    console.log("handleSubmit triggered");
    console.log(event.target.text.value);

    const request = new Request();
    console.log(this.props.dogId);
    console.log(this.props.dog);
    console.log(this.props.dog._links.self.href);
    const payload = {text: event.target.text.value, dog: this.props.dog._links.self.href}
    request.post('/api/comments', payload).then(() => {
      window.location = `/dog/${this.props.dogId}`
    })

  }

  render() {
    console.log(this.props.dogId);
    return (
      <div>
      <form onSubmit = {this.handleSubmit}>
<<<<<<< HEAD
      <label>
      <input type="text" placeholder="Add a comment" name="text" onChange={this.handleChange}/>
=======
      <textarea rows="4" cols="50" placeholder="Add a comment" name="text" />
>>>>>>> develop
      <button type = "submit">Add</button>
      </label>
      </form>
      </div>
    )
  }

}

export default CommentForm
