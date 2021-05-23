import React, {Component} from "react";
import Cuadricula from "./Cuadricula";
import Modal from "./Modal";

class Contenedor extends Component {
  constructor() {
    super();
    this.state = {
      selectedImg: null,
    };
  }

  render() {
    return (
      <div className="App">
        <Cuadricula selectedImg={this.selectedImg} />
        {this.selectedImg && <Modal selectedImg={this.selectedImg} />}
      </div>
    );
  }
}

export default Contenedor;
