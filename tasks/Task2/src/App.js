import "./App.css";
import "./index.css";
import Client from "./components/data";
import Logo from "../src/api_img.jpg"
import React, { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props);
      this.state = { clients_data: [], loading: false };
      this.displayUser = this.displayUser.bind(this);
  }

  displayUser() {
    this.setState({ loading: true });
    document.getElementById("block").style.display = "none";
      
    setTimeout(async function () {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonresponse = await response.json();
      this.setState({ clients_data: jsonresponse["data"], loading: false });
  }.bind(this),4200);}

  render() {
    return (

      <div>
      <nav className="navbar ml-auto">
        <div className="container">
            
          <h3  className="Heading">Data Fetcher</h3>
            <button onClick={this.displayUser}> Get Users </button>
        </div>
      </nav>
        <Client loading={this.state.loading} clients={this.state.clients_data} />
          <div id="block">
          <img src={Logo} alt="image" /> &nbsp;
          </div>
      </div>
    );
  }
}

export default App;