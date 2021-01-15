import React from "react";
import "./style.css";
import Card from "./Components/Card";
import axios from "axios";
// import {getusers} from './axios/axios'

class App extends React.Component {
  state = {
    name: "",
    src: ""
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api/", {}).then(response => {
      // console.log("Response " , response.data.results[0].picture.large )

      this.setState({
        name: response.data.results[0].name.first,
        src: response.data.results[0].picture.large
      });
    });
    habskasn;
  }

  render() {
    const { name, src } = this.state;
    return (
      <div style={{ marginTop: "50px" }}>
        <div>
          <Card name={name} src={src} />
        </div>
      </div>
    );
  }
}
export default App;
