import React from "react";
import { Await } from "react-router-dom";
class Userclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      userdata:{
        name:"default",
        location:"default"
      }
    }; 
  }
 async componentDidMount(){
   // apicall
    const data = await fetch( "https://api.github.com/users/TanujMalik73")
    const json = await data.json();
    console.log(json)
    this.setState({
      userdata:json,
    })
  }
  render() {
    const { login,name,avatar_url} = this.state.userdata;
    return (
      <div className="class_container">
        <img src={avatar_url}></img>
        <h1>{login}</h1>
        <h1>{name}</h1>

        <h1>click:{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
        }}
        >
          increse count
        </button>
        <h1>Bhola</h1>
      </div>
    );
  }
}
export default Userclass;
