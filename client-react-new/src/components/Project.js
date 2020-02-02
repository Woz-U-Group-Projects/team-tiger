import React from 'react';
import axios from "axios";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
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
        <MuiThemeProvider>
          <div>
            <AppBar title='Welcome to TigerEats! Create a Username to get started.' />
            <TextField
              hintText="Enter a Username"
              floatingLabelText="Username"
              onChange={this.userName}
            />
            <br />
            <RaisedButton label="Get Started!" primary={true} onClick={this.addUser} />
          </div>
          <ul>
            {this.state.projects.map(p => (
              <li key={p.id}>
                {p.id} : {p.name} : {p.complete ? "complete" : "not complete"}
              </li>
            ))}
          </ul>
          <Link to='/Login'>Already have an account? Sign in here.</Link>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Project;
