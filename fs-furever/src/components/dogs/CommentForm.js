import React from 'react';
import Request from '../../helpers/request';

class CommentForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      "comments":[],
      "text": ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.text]: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    const request = new Request();
    request.post('/api/comments', this.state).then(() => {
      window.location = '/dog/{id}'
    })
  }

  render() {
    return (
      <div>
      <form onSubmit = {this.handleSubmit}>
      <label>
      <input type="text" placeholder="Add a comment" name="text" onChange={this.handleChange}/>
      <button type = "submit">Add</button>
      </label>
      </form>
      </div>
    )
  }

}

export default CommentForm
