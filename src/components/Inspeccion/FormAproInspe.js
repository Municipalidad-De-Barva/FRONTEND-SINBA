import React, {Component} from "react";
import inspecOcular from "../../api/inspeccionOcular.api";

import Contenedor from "./Contenedor";
const ref = React.createRef();

export default class FormAproInspe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Formulario  Inspeccion
      FK_Inspector_Administrativo: "",
      FK_Solicitud_Patente: "",
      Descripcion: "",
      Fecha: "",
      Local: "",
      Direccion: "",
      Requisito_Local_Acorde_Actividad: "0",
      Planta_Fisica: "0",
      Senalizacion: "0",
      Luces_Emergencias: "0",
      Extintor: "0",
      Salida_Emergencia: "0",

      //Acta Ocular
      PK_Codigo_Inspeccion: "",
      FK_Inspeccion_Patente_Nueva: "",
      Lugar: "",
      Diligencia: "",
      Resultado: "",
      FK_Testigo1: "",
      Tel_Testigo1: "",
      Correo_Testigo1: "",
      FK_Testigo2: "",
      Tel_Testigo2: "",
      Correo_Testigo2: "",
      Firma_Testigo2: "",
      Firma_Testigo1: "",
      Firma_Inspector1: "",
      Firma_Inspector2: "",
      Estado: "0",
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
    console.log("mi codigo" + cod);
    fetch(inspecOcular.RUTA_BASE+"inspOcular/obtenerInspeccionOcularId", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        /*'Access-Control-Allow-Headers': '*',
				"Access-Control-Allow-Origin": "*",
      			"Access-Control-Allow-Credentials": "true",
      			"Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT"*/
      },
      body: JSON.stringify({PK_Codigo_Inspeccion: cod}),
    })
      .then(this.status)
      .then((res) => res.json())
      .then((data) => {
        console.log("imprimiendo datos de form", data);
        //this.setState({datos: data[0]});
        this.getDatos(data);
      });
    console.log(JSON.stringify({codigo: cod}));
  }

  getDatos(datos) {
    //console.log("Datos que tengo>>> " + datos);
    //1
    //inp es lo que recupera la base y se mete en FK_Inspeccion_Patente_Nueva como obj
    this.setState({
      //inp.FK_Inspector_Administrativo
      FK_Inspector_Administrativo:
        datos.FK_Inspeccion_Patente_Nueva[0].FK_Inspector_Administrativo,
    });
    localStorage.setItem(
      "SolPatC",
      datos.FK_Inspeccion_Patente_Nueva[0].FK_Solicitud_Patente
    );
    this.setState({
      //inp.FK_Solicitud_Patente
      FK_Solicitud_Patente:
        datos.FK_Inspeccion_Patente_Nueva[0].FK_Solicitud_Patente,
    });
    this.setState({
      //inp.Descripcion
      Descripcion: datos.FK_Inspeccion_Patente_Nueva[0].Descripcion,
    });
    var d = new Date(datos.FK_Inspeccion_Patente_Nueva[0].Fecha);
    this.setState({
      //inp.Fecha
      Fecha:
        d.getDate() + " de " + (d.getMonth() + 1) + " del " + d.getFullYear(),
    });
    this.setState({
      //inp.Local
      Local: datos.FK_Inspeccion_Patente_Nueva[0].Local,
    });
    this.setState({
      //inp.Direccion
      Direccion: datos.FK_Inspeccion_Patente_Nueva[0].Direccion,
    });
    this.setState({
      //inp.Requisito_Local_Acorde_Actividadl
      Requisito_Local_Acorde_Actividad:
        datos.FK_Inspeccion_Patente_Nueva[0].Requisito_Local_Acorde_Actividadl,
    });
    this.setState({
      //inp.Planta_Fisica
      Planta_Fisica: datos.FK_Inspeccion_Patente_Nueva[0].Planta_Fisica,
    });
    this.setState({
      //inp.Senalizacion
      Senalizacion: datos.FK_Inspeccion_Patente_Nueva[0].Senalizacion,
    });
    this.setState({
      //inp.Luces_Emergencias
      Luces_Emergencias: datos.FK_Inspeccion_Patente_Nueva[0].Luces_Emergencias,
    });
    this.setState({
      //inp.Extintor
      Extintor: datos.FK_Inspeccion_Patente_Nueva[0].Extintor,
    });
    this.setState({
      //inp.Salida_Emergencia
      Salida_Emergencia: datos.FK_Inspeccion_Patente_Nueva[0].Salida_Emergencia,
    });

    //2
    this.setState({
      //PK_Codigo_Inspeccion
      PK_Codigo_Inspeccion: datos.PK_Codigo_Inspeccion,
    });
    this.setState({
      //FK_Inspeccion_Patente_Nueva.PK_Codigo_Inspeccion
      FK_Inspeccion_Patente_Nueva:
        datos.FK_Inspeccion_Patente_Nueva[0].PK_Codigo_Inspeccion,
    });
    this.setState({
      //Lugar_Visita
      Lugar: datos.Lugar_Visita,
    });
    this.setState({
      //Diligencia
      Diligencia: datos.Diligencia,
    });
    this.setState({
      //Resultado
      Resultado: datos.Resultado,
    });
    this.setState({
      //FK_Testigo1.PK_ID
      FK_Testigo1: datos.FK_Testigo1[0].PK_ID,
    });
    this.setState({
      //FK_Testigo1.Telefono
      Tel_Testigo1: datos.FK_Testigo1[0].Telefono,
    });
    this.setState({
      //FK_Testigo1.Correo
      Correo_Testigo1: datos.FK_Testigo1[0].Correo,
    });
    this.setState({
      //FK_Testigo2.PK_ID
      FK_Testigo2: datos.FK_Testigo2[0].PK_ID,
    });
    this.setState({
      //FK_Testigo2.Telefono
      Tel_Testigo2: datos.FK_Testigo2[0].Telefono,
    });
    this.setState({
      //FK_Testigo2.Correo
      Correo_Testigo2: datos.FK_Testigo2[0].Correo,
    });
    this.setState({
      //FK_Testigo2.firma ----Deberían ir en img
      Firma_Testigo2: datos.FK_Testigo2[0].firma,
    });
    this.setState({
      //FK_Testigo1.firma ----Deberían ir en img
      Firma_Testigo1: datos.FK_Testigo1[0].firma,
    });
    this.setState({
      //Firma_Inspector_1  ---esto devuelve una url
      Firma_Inspector1: datos.Firma_Inspector_1,
    });
    this.setState({
      //Firma_Inspector_2 ---esto devuelve una url
      Firma_Inspector2: datos.Firma_Inspector_2,
    });
  }
  status(response) {
    if (response && response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(console.log("Error al conectar al servidor"));
    }
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

  handleClick() {
    localStorage.setItem("codd", this.state.PK_Codigo_Inspeccion);
    //localStorage.getItem("tipoUser")
    fetch(inspecOcular.RUTA_BASE+"inspOcular/cambiarEstado", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("respuesta del servidor en revSolPatCom: ", data);
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
      FK_Inspeccion_Patente_Nueva,
      Diligencia,
      Resultado,
      FK_Testigo1,
      FK_Testigo2,
      Tel_Testigo1,
      Tel_Testigo2,
      Correo_Testigo1,
      Correo_Testigo2,
      Firma_Testigo2,
      Firma_Testigo1,
      Firma_Inspector1,
      Firma_Inspector2,
      Estado,
    } = this.state;

    return (
      <>
        <div className="container" ref={ref}>
          <div className="container" ref={ref}>
            <br />
            <br />
            <div className="row">
              <div className="col-sm-12 col-sm-offset-0">
                <div className="card">
                  <div className=" card-header form-group text-center">
                    <h1>
                      <strong>
                        Revisión de Formulario Inspección y Acta Ocular.
                      </strong>
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
                        <h6>
                          <div className="form-group col-md-4">
                            <label htmlFor="FK_Solicitud_Patente">
                              Código solicitud patente:
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value={FK_Solicitud_Patente}
                              name="FK_Solicitud_Patente"
                              id="FK_Solicitud_Patente"
                              onChange={this.handleInputChange}
                              required
                            />
                          </div>
                        </h6>
                        <h6>
                          <div className="form-group col-md-4">
                            <label htmlFor="FK_Inspeccion_Patente_Nueva">
                              Código inspección patente nueva:
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value={FK_Inspeccion_Patente_Nueva}
                              name="FK_Inspeccion_Patente_Nueva"
                              id="FK_Inspeccion_Patente_Nueva"
                              onChange={this.handleInputChange}
                              required
                            />
                          </div>
                        </h6>
                        <h6>
                          <div className="form-group col-md-4">
                            <label htmlFor="PK_Codigo_Inspeccion">
                              Código Acta Inspección Ocular:
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value={PK_Codigo_Inspeccion}
                              name="PK_Codigo_Inspeccion"
                              id="PK_Codigo_Inspeccion"
                              onChange={this.handleInputChange}
                              required
                            />
                          </div>
                        </h6>
                        <hr />
                      </div>
                    </div>
                    <div className="form-group">
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
                          onChange={this.handleInputChange}
                          required
                        />
                      </div>
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
                          onChange={this.handleInputChange}
                          name="Direccion"
                          id="Direccion"
                          rows="5"
                          required
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="Local">Planta Física: </label>
                        <input
                          className="form-control"
                          type="text"
                          value={Planta_Fisica}
                          name="Planta_Fisica"
                          id="Planta_Fisica"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="Local">
                          Requisito Local Acorde Actividad:
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={Requisito_Local_Acorde_Actividad}
                          name="Requisito_Local_Acorde_Actividad"
                          id="Requisito_Local_Acorde_Actividad"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="Senalizacion">Señalización:</label>
                        <input
                          className="form-control"
                          type="text"
                          value={Senalizacion}
                          name="Senalizacion"
                          id="Senalizacion"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="Luces_Emergencias">
                          Luces de Emergencias:
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={Luces_Emergencias}
                          name="Luces_Emergencias"
                          id="Luces_Emergencias"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="Extintor">Extintor:</label>
                        <input
                          className="form-control"
                          type="text"
                          value={Extintor}
                          name="Extintor"
                          id="Extintor"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="Salida_Emergencia">
                          Salida de Emergencia:
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={Salida_Emergencia}
                          name="Salida_Emergencia"
                          id="Salida_Emergencia"
                        />
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
                          onChange={this.handleInputChange}
                          name="Descripcion"
                          id="Descripcion"
                          rows="5"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      {/*"----------Testigo 1-------------"*/}
                      <div className="form-group col-md-8">
                        <label htmlFor="FK_Testigo1">
                          Nombre completo del testigo 1:
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={FK_Testigo1}
                          onChange={this.handleInputChange}
                          name="FK_Testigo1"
                          id="FK_Testigo1"
                        />
                      </div>
                      <div className="form-row">
                        {/*"----------Teléfono------------"*/}
                        <div className="form-group col-md-4">
                          <label htmlFor="Tel_Testigo1">Teléfono:</label>
                          <input
                            className="form-control"
                            type="tel"
                            value={Tel_Testigo1}
                            onChange={this.handleInputChange}
                            name="Tel_Testigo1"
                            id="Tel_Testigo1"
                            required
                          />
                        </div>

                        <div className="form-group col-md-6">
                          <label htmlFor="Correo_Testigo1">
                            Correo electrónico:
                          </label>
                          <input
                            className="form-control"
                            type="email"
                            value={Correo_Testigo1}
                            onChange={this.handleInputChange}
                            name="Correo_Testigo1"
                            id="Correo_Testigo1"
                            required
                          />
                        </div>
                      </div>
                      {/*"----------Testigo 2-------------"*/}
                      <div className="form-group col-md-8">
                        <label htmlFor="FK_Testigo2">
                          Nombre completo del testigo 2:
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={FK_Testigo2}
                          onChange={this.handleInputChange}
                          name="FK_Testigo2"
                          id="FK_Testigo2"
                        />
                      </div>
                      <div className="form-row">
                        {/*"----------Teléfono------------"*/}
                        <div className="form-group col-md-4">
                          <label htmlFor="Tel_Testigo2">Teléfono:</label>
                          <input
                            className="form-control"
                            type="tel"
                            value={Tel_Testigo2}
                            onChange={this.handleInputChange}
                            name="Tel_Testigo2"
                            id="Tel_Testigo2"
                            required
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="Correo_Testigo2">
                            Correo electrónico:
                          </label>
                          <input
                            className="form-control"
                            type="email"
                            value={Correo_Testigo2}
                            onChange={this.handleInputChange}
                            name="Correo_Testigo2"
                            id="Correo_Testigo2"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    {/*"----------Diligencias-------------"*/}
                    <div className="form-group col-md-20">
                      <label htmlFor="Diligencia">
                        Procedo a iniciar la inspección ocular que se hace
                        necesaria en las diligencias de:
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={Diligencia}
                        onChange={this.handleInputChange}
                        name="Diligencia"
                        id="Diligencia"
                      />
                    </div>
                    {/*"----------Resultado------------"*/}
                    <div className="form-group col-md-8">
                      <label htmlFor="Resultado">
                        Obteniendo el siguiente resultado:
                      </label>
                      <textarea
                        className="form-control"
                        type="text"
                        value={Resultado}
                        onChange={this.handleInputChange}
                        name="Resultado"
                        id="Resultado"
                        rows="5"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <div className="form-group">
                        <h5>Firma de los presentes</h5>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-5">
                          <label htmlFor="Firma_Inspector1">
                            Firma del inspector 1
                          </label>
                          <img
                            className="card-img-top"
                            src={Firma_Inspector1}
                            alt=""
                          />
                        </div>
                        <div className="form-group col-md-5">
                          <label htmlFor="Firma_Inspector2">
                            Firma del inspector 2
                          </label>
                          <img
                            className="card-img-top"
                            src={Firma_Inspector2}
                            alt=""
                          />
                        </div>
                        <div className="form-group col-md-5">
                          <label htmlFor="Firma_Testigo1">
                            Firma del testigo 1
                          </label>
                          <img
                            className="card-img-top"
                            src={Firma_Testigo1}
                            alt=""
                          />
                        </div>
                        <div className="form-group col-md-5">
                          <label htmlFor="Firma_Testigo2">
                            Firma del Testigo 2
                          </label>
                          <img
                            className="card-img-top"
                            src={Firma_Testigo2}
                            alt=""
                          />
                        </div>
                      </div>
                      <Contenedor />
                    </div>
                    <div className="form-group col-md-8">
                      <h4 align="left">Resultado de revisión</h4>
                      <select
                        className="custom-select mr-sm-2 mb-4"
                        id="Estado"
                        name="Estado"
                        value={Estado}
                        onChange={this.handleInputChange2}
                        required
                      >
                        <option value="0" defaultValue>
                          Pendiente
                        </option>
                        <option value="1">Aprobada</option>
                        <option value="2">Rechazada</option>
                      </select>
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
              <br />
              <br />
            </div>
            <div className="form-group col-md-4">
              <a href="./PageContactUser">
                <button
                  type="submit"
                  onClick={this.onClick}
                  className="btn btn-primary text-center"
                >
                  Guardar
                </button>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
