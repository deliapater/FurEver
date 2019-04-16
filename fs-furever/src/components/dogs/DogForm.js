import React from 'react';
import Request from '../../helpers/request';

class DogForm extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        "Name": "",
        "Breed": "",
        "Gender": "",
        "age": 0,
        "picture": "",
        "description": ""
      }
      this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
}

      handleChange(event){
      this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    const request = new Request();
    request.post('/api/dogs', this.state).then(() => {
      window.location = '/dogs'
    })
  }

  render(){

  return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <input type = "text" placeholder ="Name" name="name" onChange={this.handleChange}/>
          <select value ={this.state.value} onChange={this.handleChange}>
            <option value="breed">{this.breed}></option>
        </select>
          <select value ={this.state.value} onChange={this.handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input type = "number" placeholder ="Age" name="age" onChange={this.handleChange}/>
          <input type = "text" placeholder ="Picture" name="picture" onChange={this.handleChange}/>
          <input type = "text" placeholder ="Description" name="description" onChange={this.handleChange}/>
          <button type = "submit">Save</button>
        </form>
      </div>
    )
  }
}
export default DogForm;
