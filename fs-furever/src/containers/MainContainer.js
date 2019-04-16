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
import MyDogDetails from '../components/dogs/MyDogsDetails';
import HomeDetails from '../components/home/HomeDetails';
import GalleryDetails from '../components/gallery/GalleryDetails';
import MessageList from '../components/messages/MessageList';

class MainContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      owners: [],
      dogs: [],
      messages: [],
      comments: []
    };
    this.findOwnerById = this.findOwnerById.bind(this);
    this.findDogById = this.findDogById.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
      })
    });
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

  handleDelete(id) {
    const request = new Request();
    const url = `/api/dogs/${id}`;
    request.delete(url).then(() => {
      window.location = '/dogs';
    });
  }

  handleClick(id) {
    const request = new Request();
    const url = `/api/dog/${id}`;
    request.get(url).then(() => {
      window.location = '/dogs';
    });
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

            <Route exact path="/owners" render={(props) => {
              return <OwnerList owners = {this.state.owners} />
            }}/>

            <Route exact path="/dogs" render={(props) => {
              return <DogList dogs = {this.state.dogs} />
            }}/>

            <Route exact path = "/owners/new" render={(props) => {
              return <OwnerForm dogs = {this.state.dogs}/>
            }}/>

<<<<<<< HEAD
            <Route exact path="/mydogs" render= {(props) => {
              const id = props.match.params.id;
              const mydog = this.findDogById(4);
              return <DogDetails dog={mydog} onClick={this.handleClick}/>
            }}/>

            <Route exact path="/gallery" render={(props) => {
              return <GalleryDetails />
            }}/>

            <Route exact path="/owners/:id/messages" render= {(props) => {
              return <MessageList messages = {this.state.messages} />
=======
            <Route exact path = "/dogs/new" render={(props) => {
              return <DogForm dogs = {this.state.dogs}/>
            }}/>

            <Route exact path="/owners/:id" render= {(props) => {
              const id = props.match.params.id;
              const owner = this.findOwnerById(id);
              return <OwnerDetails owner={owner}/>
>>>>>>> React/Misc
            }}/>

            <Route exact path="/dog/:id" render= {(props) => {
              const id = props.match.params.id;
              const dog = this.findDogById(id);
<<<<<<< HEAD
              return <DogDetails dog={dog} onClick={this.handleClick}/>
=======
              return <DogDetails dog={dog} onClick={this.handleClick} onDelete ={this.handleDelete}/>



>>>>>>> React/Misc
            }}/>



          </Switch>
        </React.Fragment>
      </Router>
    </div>
  )
}
}

export default MainContainer;
