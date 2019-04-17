import React from 'react';
import Message from './Message';
import Request from '../../helpers/request';

class MessageForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: "Lets Meet",
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
    const request = new Request();
    const payload = {txtMessage: this.state.text}
    request.post('/api/messages', payload).then(() => {
      window.location = `/messages/${this.props.message.id}`
    })

  }

  render() {
    console.log(this.props.message);
    return (
      <div>
      <form onSubmit = {this.handleSubmit}>
      <textarea rows="4" cols="50" placeholder="Add a Message" name="text" onChange={this.handleChange} />
      <button type = "submit">Send Message</button>
      </form>
      </div>
    )
  }

}

export default MessageForm
