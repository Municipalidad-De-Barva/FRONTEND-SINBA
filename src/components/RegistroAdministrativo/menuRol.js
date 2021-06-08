import React, {Component} from "react";
import inspecOcular from "../../api/inspeccionOcular.api";

export default class Rol extends Component {
  constructor(props) {
    super();
    this.state = {
      listRole: [],
    };
    this.listarRole();
  }
  listarRole() {
    fetch(inspecOcular.RUTA_BASE+"role/list", {
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
