import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import UserList from './components/UserList';
import Form from './components/Form';
import uuid from 'uuid';

class App extends Component {
  state = {
    users: [
      {
        id: uuid.v4(),
        name: "Miguel",
        age: "43"
      },
      {
        id: uuid.v4(),
        name: "João",
        age: "32"
      },
      {
        id: uuid.v4(),
        name: "André",
        age: "18"
      }
    ]
  }

  userEdit = (changedUser, isnew) => {
    const { id, name, age } = changedUser;
    if (isnew) {
      var newArray = this.state.users.slice();
      newArray.push(changedUser);
      this.setState({users: newArray});
    }
    else {
      this.setState({
        users: this.state.users.map(
          user => {
            if (user.id === id) {
              user.name = name;
              user.age = age;
            }
            return user;
          }
        )
      })
    }
  }

  userDel = (id) => {
    this.setState({ users: [...this.state.users.filter(user => user.id !== id)] })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" render={props => (
            <UserList users={this.state.users} userDel={this.userDel} />)}
          />
          <Route path="/form" component={props => (
            <Form user={props.location.state.user} userEdit={this.userEdit}/>)}
          />
        </Router>
      </div>
    );
  }
}

export default App;
