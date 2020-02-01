import React, { Component } from "react";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      loading: false
    };
  }

  render() {
    const loadingSpin = this.state.loading ? "App-logo Spin" : "App-logo";
    return (
      <div className="App container bg-light shadow">
        <header className="App-header">
          
          <h1 className="App-title">
            Leave a comment: <input type="text" name="comment"></input>
            <span className="px-2" role="img" aria-label="Chat">
              💬
            </span>
            <input type="submit"></input>
          </h1>
        </header>

        <div className="row">
          <div className="col-4  pt-3 border-right">
            <div className="comment-box">

            </div>
            <textarea rows="4" cols="50" name="comment" form="usrform">
How did you enjoy Tiger eats?</textarea>
            {/* Comment Form Component */}
          </div>
          <div className="col-8  pt-3 bg-white">
            {/* Comment List Component */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;