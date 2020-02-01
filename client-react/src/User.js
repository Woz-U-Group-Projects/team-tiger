import React, {Component} from "react";
import ReactDOM from 'react-dom';
import axios from "axios";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/users")
      .then(response => this.setState({ users: response.data }));
  }

  render() {
    return (
      <div>
        {this.state.users.map(p => (
          <div key={p.id}>
            {p.id} : {p.name} : {p.createdBy}
          </div>
        ))}
      </div>
    );
  }
}

export default User;
