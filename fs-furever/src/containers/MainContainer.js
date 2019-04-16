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
<<<<<<< HEAD
import MyDogsDetails from '../components/dogs/MyDogsDetails';
=======
import Breeds from '../components/dogs/Breeds';
import MyDogDetails from '../components/dogs/MyDogsDetails';
>>>>>>> develop
import HomeDetails from '../components/home/HomeDetails';
import GalleryDetails from '../components/gallery/GalleryDetails';
import Message from '../components/messages/Message';
import MessageList from '../components/messages/MessageList';
import MessageDetails from '../components/messages/MessageDetails';
import Account from '../components/accounts/Account';

class MainContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      owners: [],
      dogs: [],
      messages: [],
      comments: [],
      dog: null
    };
    this.findOwnerById = this.findOwnerById.bind(this);
    this.findDogById = this.findDogById.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
<<<<<<< HEAD
    this.findOwnerMessages = this.findOwnerMessages.bind(this);
=======
    this.handleSubmitDog = this.handleSubmitDog.bind(this);

>>>>>>> develop
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

  findOwnerMessages(id){
    const owner = this.findOwnerById(id)
    const messages = this.state.messages.filter((message) => {
      return message.owner.name === owner.name;
    })
    return messages;
  }

  handleSubmitDog(dog){
    const request = new Request();
    request.post('/api/dogs', dog).then(() => {
      window.location = '/dogs'
    })
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

      <Route exact path="/mydogs" render= {(props) => {
        const id = props.match.params.id;
        const mydog = this.findDogById(id);
        return <DogDetails dog={mydog} onClick={this.handleClick} />
      }}/>

      <Route exact path="/gallery" render={(props) => {
        return <GalleryDetails />
      }}/>

      <Route exact path="/owners/:id/messages" render= {(props) => {
        const id = props.match.params.id;
        // console.log({id});
        const messages = this.findOwnerMessages(id);
        console.log({messages});
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

      </Switch>
      </React.Fragment>
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



            <Route exact path="/mydogs" render= {(props) => {
              const id = props.match.params.id;
              const mydog = this.findDogById(4);
              return <MyDogsDetails dog={mydog} onClick={this.handleClick} onDelete ={this.handleDelete}
              />
            }}/>


            <Route exact path="/gallery" render={(props) => {
              return <GalleryDetails />
            }}/>

            <Route exact path="/owners/:id/messages" render= {(props) => {
              return <MessageList messages = {this.state.messages} />
            }}/>

            <Route exact path = "/dogs/new" render={(props) => {
              return <DogForm dogs = {this.state.dogs} onClick={this.handleSubmitDog} handleSubmitDog={this.handleSubmitDog}/>
            }}/>

            <Route exact path="/owners/:id" render= {(props) => {
              const id = props.match.params.id;
              const owner = this.findOwnerById(id);
              return <OwnerDetails owner={owner}/>

            }}/>

            <Route exact path="/dog/:id" render= {(props) => {
              const id = props.match.params.id;
              const dog = this.findDogById(id);
              console.log("Hello");
              return <DogDetails dog={dog} onClick={this.handleClick}/>

            }}/>

          </Switch>
        </React.Fragment>
      </Router>
      </div>
    )
  }
}

export default MainContainer;
