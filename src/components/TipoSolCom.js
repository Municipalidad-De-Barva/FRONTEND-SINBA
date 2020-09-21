import React, { Component } from "react";
import PropTypes from "prop-types";

class TipoSolCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipoSol: "",
    };
  }

  render() {
    return (
      <div>
        <h3>Tipo de solicitud:</h3>
        <input
          type="radio"
          value="1"
          onChange={(e) => this.setState({ tipoSol: e.target.value })}
          name="tipoSol"
          id="tipoSol"
        ></input>
        <label htmlFor="tipoSol">Nueva </label>

        <input
          type="radio"
          value="2"
          onChange={(e) => this.setState({ tipoSol: e.target.value })}
          name="tipoSol"
          id="tipoSol"
        ></input>
        <label htmlFor="tipoSol">Traspaso </label>

        <input
          type="radio"
          value="3"
          onChange={(e) => this.setState({ tipoSol: e.target.value })}
          name="tipoSol"
          id="tipoSol"
        ></input>
        <label htmlFor="tipoSol">Traslado </label>

        <input
          type="radio"
          value="4"
          onChange={(e) => this.setState({ tipoSol: e.target.value })}
          name="tipoSol"
          id="tipoSol"
        ></input>
        <label htmlFor="tipoSol">Retiro </label>

        <input
          type="radio"
          value="5"
          onChange={(e) => this.setState({ tipoSol: e.target.value })}
          name="tipoSol"
          id="tipoSol"
        ></input>
        <label htmlFor="tipoSol">Renovacion </label>

        <input
          type="radio"
          value="6"
          onChange={(e) => this.setState({ tipoSol: e.target.value })}
          name="tipoSol"
          id="tipoSol"
        ></input>
        <label htmlFor="tipoSol">Cambio </label>
      </div>
    );
  }
}

TipoSolCom.propTypes = {
  TipoSolCom: PropTypes.object.isRequired,
};

export default TipoSolCom;
