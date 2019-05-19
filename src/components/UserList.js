import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserEntry from "./UserEntry";

class UserList extends Component {
  render() {
    return (
      <div className="UserList">
        <header className="UserList-header" />
        <h1>UserList</h1>
        {
          this.props.users.map(
            (user) => (
              <UserEntry key = {user.id} user={user} userDel={this.props.userDel}/>
            ))
        }
        <button><Link to={{ pathname: '/form', state: { user: "new"} }}>New</Link></button>
      </div>
    );
  }
}

export default UserList;
