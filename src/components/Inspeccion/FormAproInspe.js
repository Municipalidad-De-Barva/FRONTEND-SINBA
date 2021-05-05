import React, {Component} from "react";
const ref = React.createRef();

export default class FormAproInspe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Formulario  Inspeccion
      FK_Inspector_Administrativo: localStorage.getItem("tipoUser"),
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
      FK_Inspeccion_Patente_Nueva: localStorage.getItem("ocular"),
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
    };
    this.onClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  cambioCheckBox(e) {
    const {name} = e.target;

    let ck = document.getElementById(name);

    if ((ck.value = 1)) {
      ck.value = "Cumple";
    } else {
      ck.value = "No cumple";
    }
    this.setState({
      [name]: ck.value,
    });
    console.log(name, ck.value);
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

    console.log("estado :", sta);
    fetch("http://localhost:3001/api/revision", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        /*'Access-Control-Allow-Headers': '*',
				"Access-Control-Allow-Origin": "*",
      			"Access-Control-Allow-Credentials": "true",
      			"Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT"*/
      },
      body: JSON.stringify(sta),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("respuesta del servidor en revSolPatCom: ", data);
      });
  }

  componentDidMount() {
    const {id} = this.props;
    this.solicitarDatosporCodigo(id);
  }

  solicitarDatosporCodigo(cod) {
    fetch("http://localhost:3001/api/EspForm/selected", {
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
  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  getDatos(datos) {
    console.log(datos);
    /*this.setState({
      PK_Codigo_Inspeccion: datos.PK_Codigo_Inspeccion,
    });
    this.setState({
      FK_Solicitud_Patente: datos.PK_Codigo,
    });
    this.setState({
      Descripcion: datos.Descripcion,
    });
    this.setState({
      Fecha: datos.Fecha,
    });
    this.setState({
      Local: datos.Local,
    });
    this.setState({
      Direccion: datos.Direccion,
    });
    this.setState({
      Requisito_Local_Acorde_Actividad: datos.Requisito_Local_Acorde_Actividad,
    });
    this.setState({
      Planta_Fisica: datos.Planta_Fisica,
    });
    this.setState({
      Senalizacion: datos.Senalizacion,
    });
    this.setState({
      Luces_Emergencias: datos.Luces_Emergencias,
    });
    this.setState({
      Extintor: datos.Extintor,
    });
    this.setState({
      Salida_Emergencia: datos.Salida_Emergencia,
    });
    this.setState({
      FK_Inspeccion_Patente_Nueva: datos.FK_Inspeccion_Patente_Nueva,
    });
    this.setState({
      Lugar: datos.Lugar,
    });
    this.setState({
      Diligencia: datos.Diligencia,
    });

    this.setState({
      Resultado: datos.Resultado,
    });

    this.setState({
      FK_Testigo1: datos.FK_Testigo1,
    });
    this.setState({
      Tel_Testigo1: datos.Tel_Testigo1,
    });
    this.setState({
      Correo_Testigo1: datos.Correo_Testigo1,
    });
    this.setState({
      FK_Testigo2: datos.FK_Testigo2,
    });
    this.setState({
      Tel_Testigo2: datos.Tel_Testigo2,
    });
    this.setState({
      Correo_Testigo2: datos.Correo_Testigo2,
    });
    this.setState({
      Firma_Testigo2: datos.Firma_Testigo2,
    });
    this.setState({
      Firma_Testigo1: datos.Firma_Testigo1,
    });
    this.setState({
      Firma_Inspector1: datos.Firma_Inspector1,
    });
    this.setState({
      Firma_Inspector2: datos.Firma_Inspector2,
    });*/

    console.log(datos);
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
                      <h7>
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
                            onChange={this.handleInputChange2}
                            required
                          />
                        </div>
                      </h7>
                      <h7>
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
                            onChange={this.handleInputChange2}
                            required
                          />
                        </div>
                      </h7>
                      <h7>
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
                            onChange={this.handleInputChange2}
                            required
                          />
                        </div>
                      </h7>
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
                        onChange={this.handleInputChange2}
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
                        onChange={this.handleInputChange2}
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
                        onChange={this.handleInputChange2}
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
                        <textarea
                          className="form-control"
                          type="text"
                          value={Firma_Inspector1}
                          onChange={this.handleInputChange}
                          name="Firma_Inspector1"
                          id="Firma_Inspector1"
                          rows="5"
                          required
                        />
                      </div>
                      <div className="form-group col-md-5">
                        <label htmlFor="Firma_Inspector2">
                          Firma del inspector 2
                        </label>
                        <textarea
                          className="form-control"
                          type="text"
                          value={Firma_Inspector2}
                          onChange={this.handleInputChange}
                          name="Firma_Inspector2"
                          id="Firma_Inspector2"
                          rows="5"
                          required
                        />
                      </div>
                      <div className="form-group col-md-5">
                        <label htmlFor="Firma_Testigo1">
                          Firma del testigo 1
                        </label>
                        <textarea
                          className="form-control"
                          type="text"
                          value={Firma_Testigo1}
                          onChange={this.handleInputChange}
                          name="Firma_Testigo1"
                          id="Firma_Testigo1"
                          rows="5"
                          required
                        />
                      </div>
                      <div className="form-group col-md-5">
                        <label htmlFor="Firma_Testigo2">
                          Firma del Testigo 2
                        </label>
                        <textarea
                          className="form-control"
                          type="text"
                          value={Firma_Testigo2}
                          onChange={this.handleInputChange}
                          name="Firma_Testigo2"
                          id="Firma_Testigo2"
                          rows="5"
                          required
                        />
                      </div>
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
            <br />
            <br />
          </div>
          <div className="form-group col-md-4">
            <a href="./PageListSolPatNueva">
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
      </>
    );
  }
}
