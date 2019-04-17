import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import OwnerList from '../components/owners/OwnerList';
import OwnerDetails from '../components/owners/OwnerDetails';
import OwnerForm from '../components/owners/OwnerForm';
import DogList from '../components/dogs/DogList';
import Request from '../helpers/request';
import DogDetails from '../components/dogs/DogDetails';
import Dog from '../components/dogs/Dog';
import Comment from '../components/dogs/Comment';
import CommentForm from '../components/dogs/CommentForm';
import DogForm from '../components/dogs/DogForm';
import MyDogsDetails from '../components/dogs/MyDogsDetails';
import Breeds from '../components/dogs/Breeds';
import MyDogDetails from '../components/dogs/MyDogsDetails';
import HomeDetails from '../components/home/HomeDetails';
import GalleryDetails from '../components/gallery/GalleryDetails';
import Message from '../components/messages/Message';
import MessageList from '../components/messages/MessageList';
import MessageDetails from '../components/messages/MessageDetails';
import Account from '../components/accounts/Account';
import LocationSelect from '../components/dogs/LocationSelect';

class MainContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      owners: [],
      dogs: [],
      messages: [],
      comments: [],
      dog: null,
      ownersForLocation: [],
      locations: []

    };
    this.findOwnerById = this.findOwnerById.bind(this);
    this.findDogById = this.findDogById.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.findOwnerMessages = this.findOwnerMessages.bind(this);
    this.handleSubmitDog = this.handleSubmitDog.bind(this);
    this.handleLocationSelect = this.handleLocationSelect.bind(this);
  }

  componentDidMount() {
    const request = new Request()
    const ownerPromise = request.get('/api/owners');
    const dogPromise = request.get('/api/dogs');
    const messagePromise = request.get('/api/messages');
    const commentPromise = request.get('/api/comments');

    const promises = [ownerPromise, dogPromise, messagePromise, commentPromise];

    Promise.all(promises)
    .then(data => {
      this.setState({
        owners: data[0]._embedded.owners,
        dogs: data[1]._embedded.dogs,
        messages: data[2]._embedded.messages,
        comments: data[3]._embedded.comments,
      }, this.filterLocation)

    })

  }

  findOwnerById(id) {
    const owner = this.state.owners.find((owner) => {
      return owner.id === parseInt(id);
    });
    return owner
  }

  findDogById(id) {
    const dog = this.state.dogs.find((dog) => {
      return dog.id === parseInt(id);
    });
    return dog
  }

  findCommentById(id) {
    const comment = this.state.comments.find((comment) => {
      return comment.id === parseInt(id);
    });
    return comment
  }

  findMessageById(id) {
    const message = this.state.messages.find((message) => {
      return message.id === parseInt(id);
    });
    return message
  }

  findOwnerMessages(id){
    const owner = this.findOwnerById(id)
    const messages = this.state.messages.filter((message) => {
      return message.owner.name === owner.name;
    })
    return messages;
  }

  handleDelete(id) {
    const request = new Request();
    const url = `/api/dogs/${id}`;
    request.delete(url).then(() => {
      window.location = '/mydogs';
    });
  }

  handleClick(id) {
    const request = new Request();
    const url = `/api/dog/${id}`;
    request.get(url).then(() => {
      window.location = '/dogs';
    });
  }

  handleSubmitDog(dog){
    const request = new Request();
    request.post('/api/dogs', dog).then(() => {
      window.location = '/dogs';
    })
  }

  filterLocation(){
    const locations = this.state.owners.map(owner => owner.location).filter(location => location !== "")
    const uniqueLocations = [...new Set(locations)]
    this.setState({locations: uniqueLocations})
  }

  handleLocationSelect(location){
    const filteredOwners= this.state.owners.filter(owner => owner.location === location)
    this.setState({ownersForLocation: filteredOwners})
  }

  render(){
    return (
      <div>
      <Router>
      <React.Fragment>
      <NavBar/>
      <Switch>
      {/* GET ALL OWNERS */}
      <Route exact path="/home" render={(props) => {
        return <HomeDetails />
      }}/>

      <Route exact path="/dogs" render={(props) => {
        return <DogList dogs = {this.state.dogs} />
      }}/>

      <Route exact path = "/owners/new" render={(props) => {
        return <OwnerForm dogs = {this.state.dogs}/>
      }}/>

      <Route exact path = "/dogs/new" render={(props) => {
        return <DogForm dogs = {this.state.dogs} onClick={this.handleSubmitDog} handleSubmitDog={this.handleSubmitDog}/>
      }}/>

      <Route exact path="/mydogs" render= {(props) => {
        const id = props.match.params.id;
        const mydog = this.findDogById(id);
        return <DogDetails dog={mydog} onClick={this.handleClick} onDelete ={this.handleDelete}/>
      }}/>

      <Route exact path="/gallery" render={(props) => {
        return <GalleryDetails />
      }}/>

      <Route exact path="/owners/:id/messages" render= {(props) => {
        const id = props.match.params.id;
        const messages = this.findOwnerMessages(id);
        return <MessageList messages = {messages} />
      }}/>

      <Route exact path="/messages/:id" render={(props) => {
        return <MessageDetails />
      }}/>

      <Route exact path="/account/:id" render={(props) => {
        const id = props.match.params.id;
        const owner = this.findOwnerById(id)
        return <Account owner={owner} />
      }}/>

      <Route exact path="/dog/:id" render= {(props) => {
        const id = props.match.params.id;
        const dog = this.findDogById(id);
        return <DogDetails dog={dog} onClick={this.handleClick} />
      }}/>


      <div>
      <h1>Filter Search</h1>
      <LocationSelect locations={this.state.locations} onLocationChange={this.handleLocationSelect}/>
      <OwnerList owners={this.state.ownersForLocation} />
      </div>

      </Switch>
      </React.Fragment>
      </Router>
      </div>
    )
  }
}

export default MainContainer;
