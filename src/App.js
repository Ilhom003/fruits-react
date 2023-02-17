import React from "react";
import './App.css'

class App extends React.Component {
  render() {
    return (
        <div className="fruit">
          <img src={this.props.data.img} />
          <h1>{this.props.data.name}</h1>
        </div>
    )
  }
}

export default App;
