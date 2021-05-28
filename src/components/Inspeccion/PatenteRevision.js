import React, {Component} from "react";
import "@fortawesome/fontawesome-free";
import Header from "../Header/header";
import Footer from "../Footer/footer";
//import "./BodyIndex.css";
export default class PatenteRevision extends Component {
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
      Fecha: "",
      Ced_Jur_Fis: "",
      Solicitante: "",
      Actividad: "",
      Nombre_Local: "",
    };
  }

  componentDidMount() {
    const {id} = this.props;
    this.solicitarDatosporCodigo(id);
  }
  solicitarDatosporCodigo(cod) {
    console.log("mi codigo" + cod);
    fetch("http://localhost:3001/api/patentes/obtenerPatentes", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({Numero_Patente: cod}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("imprimiendo datos ", data[0]);

        this.getDatos(data[0]);
      });
    console.log(JSON.stringify({codigo: cod}));
  }
  getDatos(datos) {
    console.log("Datos que tengo> " + datos);

    this.setState({
      Patente_Comercial: datos.Numero_Patente,
    });
    this.setState({
      Direccion: datos.Direccion,
    });
    this.setState({
      Distrito: datos.Distrito,
    });
    this.setState({
      Fecha: datos.Fecha,
    });
    this.setState({
      Ced_Jur_Fis: datos.Cedula_Juridica,
    });
    this.setState({
      Solicitante: datos.Contribuyente,
    });
    this.setState({
      Actividad: datos.Actividad,
    });
    this.setState({
      Nombre_Local: datos.Local,
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
    const {
      Patente_Comercial,
      Distrito,
      Direccion,
      Fecha,
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
                    <strong>IMPRESION PATENTE COMERCIAL NUEVA</strong>
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
                            disabled
                          />
                        </div>
                      </h6>
                      <h6>
                        <div className="form-group col-md-4">
                          <label htmlFor="Fecha">Fecha:</label>
                          <input
                            className="form-control"
                            type="date"
                            value={Fecha}
                            name="Fecha"
                            id="Fecha"
                            disabled
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
                            disabled
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
                        disabled
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
                        disabled
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
                        disabled
                      />
                    </div>
                    <div className="form-group col-md-8">
                      <label htmlFor="Nombre_Local">
                        Para usar únicamente en el negocio denominado:
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={Nombre_Local}
                        name="Nombre_Local"
                        id="Nombre_Local"
                        disabled
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="Direccion">situado en: </label>
                      <input
                        className="form-control"
                        type="text"
                        value={Direccion}
                        name="Direccion"
                        id="Direccion"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <br />
            <br />
          </div>
          <div className="form-group col-md-4">
            <button
              type="submit"
              onClick={this.onClick}
              className="btn btn-primary text-center"
            >
              IMPRIMIR
            </button>
          </div>
        </div>
      </>
    );
  }
}
