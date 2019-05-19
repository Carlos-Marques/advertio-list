import React, { Component } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid";

class Form extends Component {
    state = {
        name: "",
        age: ""
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        var user = this.props.user;
        var isnew = false;
        if (user === "new") {
            user = {id: uuid.v4(), name:"Name", age:"Age"};
            isnew = true;
        }
        return (
            <div className="Form">
                <form>
                    <input
                        name="name"
                        placeholder={user.name}
                        value={this.state.name}
                        onChange={e => this.onChange(e)}
                    />
                    <input
                        name="age"
                        placeholder={user.age}
                        value={this.state.age}
                        onChange={e => this.onChange(e)}
                    />
                    <button type="button" onClick={this.props.userEdit.bind(this, { id: user.id, name: this.state.name, age: this.state.age }, isnew)}><Link to="/">Save</Link></button>
                </form>
                <button><Link to="/">Cancel</Link></button>
            </div>
        );
    }
}

export default Form;
