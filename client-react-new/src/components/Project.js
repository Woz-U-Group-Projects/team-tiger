import React from "react";
import axios from "axios";
import './tiger.svg';


class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
    this.userName = React.createRef();

  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // Java Spring Boot uses port 8080
    //let url = "http://localhost:8080/users";

    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";

    // Express uses port 3001 (react uses 3000)
    let url = "http://localhost:3001/users";
    axios.get(url).then(response => this.setState({ projects: response.data }));
  };

  addUser = () => {
    let url = "http://localhost:3001/users";
    axios.post(url, { name: this.userName.current.value }).then(response => {
      // refresh the data
      this.getData();
      // empty the input
      this.userName.current.value = "";
    });
  };

  render() {
    return (
      <div>
        <h3>Welcome Create a Username!</h3>
        <input ref={this.userName} />
        <button onClick={this.addUser}>add</button>
        <ul>
          {this.state.projects.map(p => (
            <li key={p.id}>
              {p.id} : {p.name} : {p.complete ? "complete" : "not complete"}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Project;
