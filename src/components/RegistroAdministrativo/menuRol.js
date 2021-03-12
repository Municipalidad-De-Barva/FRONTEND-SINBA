import React, {Component} from "react";

export default class Rol extends Component {
  constructor(props) {
    super();
    this.state = {
      listRole: [],
    };
    this.listarRole();
  }
  listarRole() {
    fetch("http://localhost:3001/api/role/list", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({listRole: data});
        console.log(data);
      });
  }
  render() {
    return <div>role</div>;
  }
}
