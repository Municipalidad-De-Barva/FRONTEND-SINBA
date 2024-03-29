import React, {Component} from "react";
//import Header from "../Header/header";
//import Footer from "../Footer/footer";
import UploadForm from "./UploadForm";
import inspecOcular from "../../api/inspeccionOcular.api";

import "@fortawesome/fontawesome-free";
const ref = React.createRef();
export default class FormInspecc extends Component {
  constructor(props) {
    super();
    this.state = {
      //Informacion Inspeccion
      //PK_Codigo_Inspeccion: "",
      FK_Inspector_Administrativo: localStorage.getItem("tipoUser"),
      FK_Solicitud_Patente: "",
      Descripcion: "",
      //Fecha: "",
      Local: "",
      Direccion: "",
      Requisito_Local_Acorde_Actividad: "0",
      Planta_Fisica: "0",
      Senalizacion: "0",
      Luces_Emergencias: "0",
      Extintor: "0",
      Salida_Emergencia: "0",
      Parqueo: "0",
      Disposiciones_Accesibilidad_7600: "0",
      Servicios_Sanitarios: "0",
      Actividades_Acorde_Naturaleza_Dimensiones: "0",
      Acceso_Red: "0",
      Cumplir_Requisitos_CONEXA: "0",

      //PDF
      postSubmitted: false,
    };
    this.onClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputChange2 = this.handleInputChange2.bind(this);
  }
  componentDidMount() {
    const {id} = this.props;
    this.solicitarDatosporCodigo(id);
  }

  solicitarDatosporCodigo(cod) {
    fetch(inspecOcular.RUTA_BASE+"EspForm/selected", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        /*'Access-Control-Allow-Headers': '*',
				"Access-Control-Allow-Origin": "*",
      			"Access-Control-Allow-Credentials": "true",
      			"Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT"*/
      },
      body: JSON.stringify({codigo: cod}),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log("imprimiendo datos ", data[0]);
        //this.setState({datos: data[0]});
        this.getDatos(data[0]);
      });
  }
  getDatos(datos) {
    console.log(datos);
    localStorage.setItem("paraImg", datos.PK_Codigo);
    this.setState({
      FK_Solicitud_Patente: datos.PK_Codigo,
    });
    this.setState({
      Local: datos.Nombre_Comercial_Negocio,
    });
    this.setState({
      Direccion: datos.Direccion,
    });
  }
  handleInputChange2(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value,
    });
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

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  handleClick(e) {
    e.preventDefault();
    console.log("Datos revision de formulario", this.state);

    console.log(
      "Preparando datos para enviar al servidor, mostrar datos:",
      this.state
    );

    fetch(inspecOcular.RUTA_BASE+"inspector/agregar", {
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
      .then(this.status())
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("ocular", data.PK_Codigo_Inspeccion);
        //console.log("respuesta del servidor: ", data);
        window.location.href = "./ActaPostInspe";
      });
  }

  status(response) {
    if (response && response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject();
    }
  }

  render() {
    const {
      //PK_Codigo_Inspeccion,
      FK_Inspector_Administrativo,
      FK_Solicitud_Patente,
      Descripcion,
      //Fecha,
      Local,
      Direccion,
      Requisito_Local_Acorde_Actividad,
      Planta_Fisica,
      Senalizacion,
      Luces_Emergencias,
      Extintor,
      Salida_Emergencia,
      Parqueo,
      Disposiciones_Accesibilidad_7600,
      Servicios_Sanitarios,
      Actividades_Acorde_Naturaleza_Dimensiones,
      Acceso_Red,
      Cumplir_Requisitos_CONEXA,
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
                    <strong>Formulario de Inspección</strong>
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
                        <strong>Número de Inspección:</strong>
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
            </div>
            <div className="form-group">
              {/*
              <div className="form-group col-md-4">
                <label htmlFor="Fecha">Fecha de la inspeccion: </label>
                <input
                  className="form-control"
                  type="text"
                  value={Fecha}
                  name="Fecha"
                  placeholder="AAAA-MM-DD"
                  maxLength="13"
                  id="Fecha"
                  validators={["required"]}
                  errormessages={["El campo es requerido"]}
                  onChange={this.handleInputChange2}
                  required
                />
              </div>*/}
              <div className="form-group col-md-4">
                <label htmlFor="FK_Inspector_Administrativo">
                  Cedula del inspector:
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={FK_Inspector_Administrativo}
                  name="FK_Inspector_Administrativo"
                  id="FK_Inspector_Administrativo"
                  validators={["required"]}
                  errormessages={["El campo es requerido"]}
                  required
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="FK_Solicitud_Patente">
                  Numero de solicitud de patente:{" "}
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={FK_Solicitud_Patente}
                  name="FK_Solicitud_Patente"
                  id="FK_Solicitud_Patente"
                  validators={["required"]}
                  errormessages={["El campo es requerido"]}
                  required
                />
              </div>

              {/*----------------Nombre del local--------------------- */}
              <div className="form-group col-md-4">
                <label htmlFor="Local">Nombre del local: </label>
                <input
                  className="form-control"
                  type="text"
                  value={Local}
                  name="Local"
                  id="Local"
                  validators={["required"]}
                  errormessages={["El campo es requerido"]}
                  required
                />
              </div>
              <div className="form-group col-md-8">
                <label htmlFor="Direccion">Dirección del local</label>
                <textarea
                  className="form-control"
                  type="text"
                  value={Direccion}
                  onChange={this.handleInputChange2}
                  name="Direccion"
                  id="Direccion"
                  rows="5"
                  required
                />
              </div>
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="Planta_Fisica"
                  id="Planta_Fisica"
                  checked={this.state.isChecked}
                  onChange={this.handleInputChange}
                />
                <label className="custom-control-label" htmlFor="Planta_Fisica">
                  Planta Fisica
                </label>
              </div>
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="Requisito_Local_Acorde_Actividad"
                  id="Requisito_Local_Acorde_Actividad"
                  checked={this.state.isChecked}
                  onChange={this.handleInputChange}
                />
                <label
                  className="custom-control-label"
                  htmlFor="Requisito_Local_Acorde_Actividad"
                >
                  Requisito_Local_Acorde_Actividad
                </label>
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
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="Parqueo"
                  id="Parqueo"
                  checked={this.state.isChecked}
                  onChange={this.handleInputChange}
                />
                <label className="custom-control-label" htmlFor="Parqueo">
                  Parqueo
                </label>
              </div>
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="Disposiciones_Accesibilidad_7600"
                  id="Disposiciones_Accesibilidad_7600"
                  checked={this.state.isChecked}
                  onChange={this.handleInputChange}
                />
                <label
                  className="custom-control-label"
                  htmlFor="Disposiciones_Accesibilidad_7600"
                >
                  Disposiciones Accesibilidad 7600
                </label>
              </div>
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="Servicios_Sanitarios"
                  id="Servicios_Sanitarios"
                  checked={this.state.isChecked}
                  onChange={this.handleInputChange}
                />
                <label
                  className="custom-control-label"
                  htmlFor="Servicios_Sanitarios"
                >
                  Servicios Sanitarios
                </label>
              </div>
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="Actividades_Acorde_Naturaleza_Dimensiones"
                  id="Actividades_Acorde_Naturaleza_Dimensiones"
                  checked={this.state.isChecked}
                  onChange={this.handleInputChange}
                />
                <label
                  className="custom-control-label"
                  htmlFor="Actividades_Acorde_Naturaleza_Dimensiones"
                >
                  Actividades Acorde Naturaleza Dimensiones
                </label>
              </div>
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="Acceso_Red"
                  id="Acceso_Red"
                  checked={this.state.isChecked}
                  onChange={this.handleInputChange}
                />
                <label className="custom-control-label" htmlFor="Acceso_Red">
                  Acceso Red
                </label>
              </div>
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  name="Cumplir_Requisitos_CONEXA"
                  id="Cumplir_Requisitos_CONEXA"
                  checked={this.state.isChecked}
                  onChange={this.handleInputChange}
                />
                <label
                  className="custom-control-label"
                  htmlFor="Cumplir_Requisitos_CONEXA"
                >
                  Cumplir Requisitos CONEXA
                </label>
              </div>
              <div>
                <br />
                <br />
                <br />
              </div>
              <div className="form-group col-md-8">
                <label htmlFor="Descripcion">
                  Descripcion general u observaciones
                </label>
                <textarea
                  className="form-control"
                  type="text"
                  value={Descripcion}
                  onChange={this.handleInputChange2}
                  name="Descripcion"
                  id="Descripcion"
                  rows="5"
                  required
                />
              </div>
            </div>
            <br />
            <br />
          </div>
          <div className="form-group col-md-4">
            <UploadForm />
          </div>

          <div className="form-group col-md-4">
            <a href="./ActaPostInspe">
              <button
                className="btn btn-primary text-center"
                type="	"
                onClick={this.onClick}
                value="Enviar"
                id="butSend"
              >
                Siguiente
              </button>
            </a>
          </div>
          <div>
            <br />
          </div>
          <hr />
          {/*<Footer />*/}
        </div>
      </>
    );
  } /*Fin del render*/
}
