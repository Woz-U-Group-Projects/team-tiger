import React from 'react';
import axios from "axios";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link, withRouter } from 'react-router-dom';


class Home extends React.Component {
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


  render() {
    return (
      <div>
       <MuiThemeProvider>
          <div>
          <AppBar
             title="Welcome {username}!"
           />
          </div>
          <br />
          <RaisedButton label="Logout" primary={true} onClick={(event) => this.handleClick(event)}/>
         </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter (Home);