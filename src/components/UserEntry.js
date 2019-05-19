import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserEntry extends Component {
  render() {
    const { id, name, age } = this.props.user;
    return (
      <div className="UserEntry">
        <p>{name} {age}</p>
        <button><Link to={{ pathname: '/form', state: { user: this.props.user} }}>Edit</Link></button>
        <button onClick={this.props.userDel.bind(this, id)}>Delete</button>
      </div>
    );
  }
}
export default UserEntry;
