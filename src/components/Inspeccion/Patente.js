import React, {Component} from "react";
import "@fortawesome/fontawesome-free";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import inspecOcular from "../../api/inspeccionOcular.api";
//import "./BodyIndex.css";
export default class Patente extends Component {
  render() {
    return (
      <div>
        <Header />

        <Body />

        <Footer />
      </div>
    );
  }
}
class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Informacion patente a imprimir
      Patente_Comercial: "",
      Distrito: "",
      Direccion: "",
      Fecha_Limite: "",
      Ced_Jur_Fis: "",
      Solicitante: "",
      Actividad: "",
      Nombre_Local: "",
    };
    this.onClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (e) => {
    const {value, name} = e.target;
    console.log(value, name);

    this.setState({
      [name]: value,
    });
  };
  handleClick() {
    fetch(inspecOcular.RUTA_BASE+"patentes/insertarPatentes", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then(this.status)
      .then((res) => res.json())
      .then((data) => {
        console.log("respuesta del servidor en patente: ", data);
        if (data && !data.error) {
          alert("Creada correctamente");
          window.location.href = "./AdmSolPatCom";
        } else {
          alert("Error en datos");
        }
      });
  }
  componentDidMount() {
    this.solicitarDatosporCodigo(localStorage.getItem("SolPatC"));
  }
  solicitarDatosporCodigo(cod) {
    console.log("mi codigo" + cod);
    fetch(inspecOcular.RUTA_BASE+"certificado/patenteNueva", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({PK_Codigo_Inspeccion: cod}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("imprimiendo datos ", data);

        this.getDatos(data);
      });
    console.log(JSON.stringify({codigo: 25}));
  }
  getDatos(datos) {
    console.log("Datos que tengo> " + datos);

    this.setState({
      Direccion: datos.Direccion_Propietario,
    });
    this.setState({
      Ced_Jur_Fis: datos.Cedula_Propetario,
    });
    this.setState({
      Solicitante: datos.Nombre,
    });
    this.setState({
      Actividad: datos.Actividad,
    });
    this.setState({
      Nombre_Local: datos.Nombre_Comercial_Negocio,
    });
  }
  status(response) {
    if (response && response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(alert("Error al conectar al servidor"));
    }
  }
  render() {
    console.log("datos state patente", this.state);
    const {
      Patente_Comercial,
      Distrito,
      Direccion,
      Fecha_Limite,
      Ced_Jur_Fis,
      Solicitante,
      Actividad,
      Nombre_Local,
    } = this.state;
    return (
      <>
        <div className="container">
          <br />
          <br />
          <div className="row">
            <div className="col-sm-12 col-sm-offset-0">
              <div className="card">
                <div className=" card-header form-group text-center">
                  <h1>
                    <strong>Formulario creación de Patente</strong>
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
                          <label htmlFor="Patente_Comercial">
                            Patente Comercial N°:
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            value={Patente_Comercial}
                            name="Patente_Comercial"
                            id="Patente_Comercial"
                            onChange={this.handleInputChange}
                            required
                          />
                        </div>
                      </h6>
                      <h6>
                        <div className="form-group col-md-4">
                          <label htmlFor="Fecha_Limite">Fecha límite:</label>
                          <input
                            className="form-control"
                            type="date"
                            value={Fecha_Limite}
                            name="Fecha_Limite"
                            id="Fecha_Limite"
                            onChange={this.handleInputChange}
                            validators={["required"]}
                            errormessages={["El campo es requerido"]}
                            required
                          />
                        </div>
                      </h6>
                      <h6>
                        <div className="form-group col-md-4">
                          <label htmlFor="Distrito">Distrito:</label>
                          <input
                            className="form-control"
                            type="text"
                            value={Distrito}
                            name="Distrito"
                            id="Distrito"
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
                      <label htmlFor="Ced_Jur_Fis">
                        Cédula Jurídica o Física:{" "}
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={Ced_Jur_Fis}
                        name="Ced_Jur_Fis"
                        placeholder="AAAA-MM-DD"
                        maxLength="13"
                        id="Ced_Jur_Fis"
                        validators={["required"]}
                        errormessages={["El campo es requerido"]}
                        onChange={this.handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="Solicitante">Pertenece a:</label>
                      <input
                        className="form-control"
                        type="text"
                        value={Solicitante}
                        name="Solicitante"
                        id="Solicitante"
                        validators={["required"]}
                        errormessages={["El campo es requerido"]}
                        onChange={this.handleInputChange}
                        required
                      />
                    </div>
                    {/*----------------Nombre del local--------------------- */}
                    <div className="form-group col-md-4">
                      <label htmlFor="Actividad">Actividad autorizada: </label>
                      <input
                        className="form-control"
                        type="text"
                        value={Actividad}
                        name="Actividad"
                        id="Actividad"
                        validators={["required"]}
                        errormessages={["El campo es requerido"]}
                        onChange={this.handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group col-md-8">
                      <label htmlFor="Nombre_Local">
                        Para usar únicamente en el negocio denominado:
                      </label>
                      <textarea
                        className="form-control"
                        type="text"
                        value={Nombre_Local}
                        onChange={this.handleInputChange}
                        name="Nombre_Local"
                        id="Nombre_Local"
                        rows="5"
                        required
                      />
                    </div>
                    <div className="form-group col-md-8">
                      <label htmlFor="Direccion">situado en: </label>
                      <textarea
                        className="form-control"
                        type="text"
                        value={Direccion}
                        name="Direccion"
                        id="Direccion"
                        rows="5"
                        onChange={this.handleInputChange}
                        required
                      />
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
            {/*<a href="./PageContactUser">*/}
            <button
              type="submit"
              onClick={this.onClick}
              className="btn btn-primary text-center"
            >
              Crear
            </button>
            {/*</a>*/}
          </div>
        </div>
      </>
    );
  }
}
