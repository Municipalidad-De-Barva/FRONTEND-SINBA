import React, {Component} from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";

import "@fortawesome/fontawesome-free";

export default class FormInspecc extends Component {
  constructor(props) {
    super();
    this.state = {
      //Informacion Inspeccion
      PK_Codigo_Inspeccion: "",
      FK_Inspector_Administrativo: "",
      FK_Solicitud_Patente: "",
      Descripcion: "",
      Fecha: "",
      Local: "",
      Direccion: "",
      Requisito_Local_Acorde_Actividad: "",
      Planta_Fisica: "",
      Senalizacion: "0",
      Luces_Emergencias: "0",
      Extintor: "0",
      Salida_Emergencia: "0",

      //PDF
      postSubmitted: false,
    };
    this.onClick = this.handleClick.bind(this);
    //this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e) {
    const {name} = e.target;

    let ck = document.getElementById(name);

    if (ck.checked) {
      ck.value = 1;
    } else {
      ck.value = 0;
    }

    this.setState({
      [name]: ck.value,
    });
    console.log(name, ck.value);
  }

  sunmitPost = (e) => {
    this.setState({
      postSubmitted: true,
    });
  };

  validarTexto(valor) {
    let regex = new RegExp("^[a-zA-Z]+$");

    if (regex.test(valor)) {
      console.log(" texto valido");
    } else {
      console.log(" texto invalido");
    }
  }

  handleClick() {
    console.log("Datos revision de formulario", this.state);
    var sta = {};
    sta.PK_Codigo_Inspeccion = this.state.PK_Codigo_Inspeccion;
    sta.FK_Inspector_Administrativo = this.state.FK_Inspector_Administrativo;
    sta.FK_Solicitud_Patente = this.state.FK_Solicitud_Patente;
    sta.Descripcion = this.state.Descripcion;
    sta.Fecha = this.state.Fecha;
    sta.Local = this.state.Local;
    sta.Direccion = this.state.Direccion;
    sta.Requisito_Local_Acorde_Actividad = this.state.Requisito_Local_Acorde_Actividad;
    sta.Planta_Fisica = this.state.Planta_Fisica;
    sta.Senalizacion = this.state.Senalizacion;
    sta.Luces_Emergencias = this.state.Luces_Emergencias;
    sta.Extintor = this.state.Extintor;
    sta.Salida_Emergencia = this.state.Salida_Emergencia;

    console.log(
      "Preparando datos para enviar al servidor, mostrar datos:",
      this.state
    );

    toggleChange = () => {
      this.setState({
        isChecked: !this.state.isChecked,
      });
    };

    fetch("http://localhost:3001/api/nuevoForm", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        /*'Access-Control-Allow-Headers': '*',
				"Access-Control-Allow-Origin": "*",
      			"Access-Control-Allow-Credentials": "true",
      			"Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT"*/
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log("respuesta del servidor: ", data);
      });
  }

  render() {
    const {
      PK_Codigo_Inspeccion,
      FK_Inspector_Administrativo,
      FK_Solicitud_Patente,
      Descripcion,
      Fecha,
      Local,
      Direccion,
      Requisito_Local_Acorde_Actividad,
      Planta_Fisica,
      Senalizacion,
      Luces_Emergencias,
      Extintor,
      Salida_Emergencia,
    } = this.state;
    return (
      <>
        <div className="container" ref={ref}>
          <br />
          <br />
          <div className="row">
            <div className="col-sm-12 col-sm-offset-0">
              <div className="card">
                <div className=" card-header form-group text-center">
                  <h1>
                    <strong>Revisión Patente Comercial Nueva.</strong>
                  </h1>
                </div>
                <div className="card-body">
                  <div className="form-row">
                    <div className="form-group col-md-2">
                      <a href="https://munibarva.go.cr/">
                        <img
                          src="./assets/images/logo192.png"
                          className="rounded mx-auto d-block"
                          height="100px"
                          width="100px"
                          alt="logoMuniBarva"
                        ></img>
                      </a>
                    </div>
                    <div className="form-group col-md-10">
                      <h5>
                        <strong>Número de trámite:</strong>
                      </h5>
                      <h5>
                        <strong>Fecha del trámite:</strong>
                      </h5>
                      <h5>
                        <strong>Funcionario que recibe:</strong>
                      </h5>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <br />
              <br />
              <br />
              <br />
            </div>
            <div className="form-group">
              <h2>Formulario de Inspección</h2>
            </div>
            <div>
              <br />
            </div>
            <div className="custom-control custom-switch">
              <input
                type="checkbox"
                className="custom-control-input"
                name="Senalizacion"
                id="Senalizacion"
                checked={this.state.isChecked}
                onChange={this.handleInputChange}
              />
              <label
                style={{font: 16}}
                className="custom-control-label"
                htmlFor="Senalizacion"
              >
                Señalización
              </label>
            </div>
            <div>
              <br />
            </div>
            <div className="custom-control custom-switch">
              <input
                type="checkbox"
                className="custom-control-input"
                name="Luces_Emergencias"
                id="Luces_Emergencias"
                checked={this.state.isChecked}
                onChange={this.handleInputChange}
              />
              <label
                className="custom-control-label"
                htmlFor="Luces_Emergencias"
              >
                Luces de emergencia
              </label>
            </div>
            <div>
              <br />
            </div>
            <div className="custom-control custom-switch">
              <input
                type="checkbox"
                className="custom-control-input"
                name="Extintor"
                id="Extintor"
                checked={this.state.isChecked}
                onChange={this.handleInputChange}
              />
              <label className="custom-control-label" htmlFor="Extintor">
                Extintor
              </label>
            </div>
            <div>
              <br />
            </div>
            <div className="custom-control custom-switch">
              <input
                type="checkbox"
                className="custom-control-input"
                name="Salida_Emergencia"
                id="Salida_Emergencia"
                checked={this.state.isChecked}
                onChange={this.handleInputChange}
              />
              <label
                className="custom-control-label"
                htmlFor="Salida_Emergencia"
              >
                Salida de emergencia
              </label>
            </div>

            <br />
            <br />
          </div>
          <div className="form-group col-md-4">
            <a href="./ActaPostInspe">
              <button
                type="submit"
                onClick={this.onClick}
                className="btn btn-primary text-center"
              >
                Siguiente
              </button>
            </a>
          </div>
        </div>
      </>
    );
  } /*Fin del render*/
}
