import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
render({
    return (
        <div>
          <MUiThemeProvider>   
        </div>   
        <AppBar 
            title="Login"
        />
        <TextField
            hintText="Enter your Username"
            floatingLabelText="Username"
            onChange = {(event,newValue)=>
this.setState({username:newValue})} 
        />   
      <br/>
        <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange = {(event,newValue) =>
this.setState({password:newValue})}  
        />
       <br/> 
     <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;