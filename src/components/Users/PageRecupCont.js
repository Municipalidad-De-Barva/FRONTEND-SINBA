import React, {Component} from "react";
import "@fortawesome/fontawesome-free";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import validaciones from "../../util/validaciones";
const validacion = new validaciones();
export default class PageRecupCont extends Component {
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
      user: "",
      pass: "",
    };
    this.onClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e) {
    const {value, name} = e.target;

    console.log(value, name);

    if (name === "user") {
      validacion.validarCedula(value, name);
    }
    this.setState({
      [name]: value,
    });
  }

  handleClick(e) {
    e.preventDefault();

    fetch("http://localhost:3001/api/empleado/recuperarCuenta", {
      //ruta cambio contra
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("respuesta del servidor: ", data);
        if (data.error === "El Usuario NO Existe") {
          console.log("El Usuario NO Existe");
          document.getElementById("user").style.borderColor = "red";
          document.getElementById("pass").style.borderColor = "red";
          alert("El Usuario NO Existe");
        }

        if (data.error === "Datos erroneos") {
          console.log("Entro al error Datos erroneos");
          alert("Datos erroneos");
        }
        if (data && !data.error) {
          alert("Cambio con éxito");
          window.location.href = "./AdmSolPatCom";
        }
      });
  }

  render() {
    const {user, pass} = this.state;
    return (
      <>
        <div className="row">
          <div className="col-sm-12 col-sm-offset-0">
            <div className="card">
              <div className=" card-header form-group text-center">
                <h1>
                  <strong>Ingrese datos de usuario a cambiar contraseña</strong>
                </h1>
              </div>
              <div className="card-body">
                <form
                  className="text-center border border-light p-5"
                  action="#!"
                >
                  <input
                    type="text"
                    id="user"
                    name="user"
                    className="form-control mb-4"
                    placeholder="Ingrese el numero de cédula"
                    value={user}
                    onChange={this.handleInputChange}
                    required
                  />

                  <input
                    type="password"
                    id="pass"
                    name="pass"
                    className="form-control mb-4"
                    placeholder="Ingrese contraseña nueva"
                    value={pass}
                    onChange={this.handleInputChange}
                    required
                  />

                  <button
                    className="btn btn-info btn-block my-4 col-sm-2"
                    type="submit"
                    onClick={this.onClick}
                  >
                    Cambiar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group col-md-4">
          <a href="./AdmSolPatCom">
            <button className="btn btn-primary text-center">Volver</button>
          </a>
        </div>
      </>
    );
  }
}
