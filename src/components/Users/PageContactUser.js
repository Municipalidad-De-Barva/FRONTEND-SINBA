import React, {Component} from "react";
import "@fortawesome/fontawesome-free";
import Header from "../Header/header";
import Footer from "../Footer/footer";
export default class PageContactUser extends Component {
  render() {
    return (
      <div>
        <Header />

        <PageList />

        <Footer />
      </div>
    );
  }
}

class PageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //viene de contribuyente
      Nombre_Solicitante: "",
      Correo: "",
      Telefono1: "",
    };
    //this.onClick = this.handleClick.bind(this);
    //this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount() {
    //const {id} = this.props;
    this.solicitarDatosporCodigo(localStorage.getItem("codd"));
  }
  solicitarDatosporCodigo(cod) {
    fetch("http://localhost:3001/api/inspOcular/obtenerContribuyenteOcular", {
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
      .then((res) => res.json())
      .then((data) => {
        console.log("imprimiendo datos ", data);
        //this.setState({datos: data[0]});
        this.getDatos(data);
      });
  }
  /*
  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };*/

  getDatos(datos) {
    this.setState({
      Nombre_Solicitante: datos.Nombre,
    });
    this.setState({
      Correo: datos.Correo,
    });
    this.setState({
      Telefono1: datos.Telefono,
    });

    console.log(datos);
  }

  render() {
    const {Nombre_Solicitante, Correo, Telefono1} = this.state;
    return (
      <>
        <div className="row">
          <div className="col-sm-12 col-sm-offset-0">
            <div className="card">
              <div className=" card-header form-group text-center">
                <h1>
                  <strong>Datos de usuario solicitante</strong>
                </h1>
              </div>
              <div className="card-body">
                <div className="form-group col-md-10">
                  <h7>
                    <div className="form-group col-md-4">
                      <label htmlFor="FK_Solicitud_Patente">
                        Nombre: {Nombre_Solicitante}
                      </label>
                    </div>
                  </h7>
                  <h7>
                    <div className="form-group col-md-4">
                      <label htmlFor="FK_Solicitud_Patente">
                        Telefono: {Telefono1}
                      </label>
                    </div>
                  </h7>
                  <h7>
                    <div className="form-group col-md-4">
                      <label htmlFor="FK_Solicitud_Patente">
                        Correo electrónico: {Correo}
                      </label>
                    </div>
                  </h7>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group col-md-4">
          <a href="./PatInspecR">
            <button className="btn btn-primary text-center">Volver</button>
          </a>
        </div>
      </>
    );
  }
}
