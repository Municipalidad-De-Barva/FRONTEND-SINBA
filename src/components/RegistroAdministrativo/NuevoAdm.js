import React, {Component} from "react";
import "@fortawesome/fontawesome-free";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import ModalRegistrar from "./ModalRegistrar";
import validaciones from "../../util/validaciones";
import inspecOcular from "../../api/inspeccionOcular.api";
const validacion = new validaciones();
export default class NuevoAdm extends Component {
  render() {
    return (
      <div>
        <Header />
        <PagNAdmin />
        <Footer />
      </div>
    );
  }
}

class PagNAdmin extends Component {
  constructor(props) {
    super();
    this.state = {
      user: "",
      pass: "",
      name: "",
      rol: "3",
      email: "",
      Tipo_Identificacion: "1",
    };

    this.onClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);

    if (name === "user") {
      validacion.validarCedula(value, name);
    } else if (name === "name") {
      validacion.validarTexto(value, name);
    } else if (name === "pass") {
    } else if (name === "rol") {
    } else if (name === "email") {
      validacion.validarCorreo(value, name);
    }
    this.setState({
      [name]: value,
    });
  }
  devuelveError() {
    let errors = [];
    errors[0] = "ok";

    //email
    if (this.state.email === "") {
      errors[0] = "Email no puede ir vacio";
    } else {
      if (
        !this.state.email.match(
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@+[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        errors[0] = "Digite un correo valido";
      }
    }

    //Name
    if (this.state.name === "") {
      errors[0] = "Nombre no puede ir vacio";
    } else {
      if (
        !this.state.name.match(
          /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g
        )
      ) {
        errors[0] = "Nombre no debe tener números";
      } else {
        if (this.state.name.trim().length < 6) {
          errors[0] = "No es un nombre completo";
        }
      }

      //contra
      if (this.state.pass === "") {
        errors[0] = "Contraseña no puede ir vacio";
      } else {
        if (this.state.pass.trim().length < 6) {
          errors[0] = "Contraseña muy corta, min de 6 caracteres";
        } else {
          if (
            !this.state.pass.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,256}$/)
          ) {
            errors[0] = "La contraseña no cumple los parámetros";
          }
        }
      }

      if (!this.validarCedula(this.state.user)) {
        errors[0] = "Cedula no cumple los parametros";
      }

      // this.setState({errors: errors});
      return errors[0];
    }
  }

  validarCedula(valor) {
    var expresion = /^[0-9,A]-?\d{4}-?\d{4}$/;
    let regex = new RegExp(expresion);
    return regex.test(valor);
  }
  handleClick(e) {
    e.preventDefault();
    console.log(
      "Preparando datos para enviar al servidor, mostrar datos:",
      this.state
    );

    fetch(inspecOcular.RUTA_BASE+"empleado/crearEmpleado", {
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
    const {user, pass, name, rol, email, Tipo_Identificacion} = this.state;

    return (
      <div
        className="image-container set-full-height"
        style={{
          backgroundImage:
            "url(" +
            "https://images.pexels.com/photos/4476623/pexels-photo-4476623.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4476623.jpg&fm=jpg" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <br />
          <br />
          <div className="row">
            <div className="col-sm-12 col-sm-offset-12">
              <div className="card text-center">
                <form
                  className="text-center border border-light p-5"
                  action="#!"
                >
                  <p className="h4 mb-4">Registrar usuario</p>
                  <h5 align="left">Tipo de identificación:</h5>
                  <select
                    className="custom-select mr-sm-2 mb-4"
                    id="Tipo_Identificacion"
                    name="Tipo_Identificacion"
                    value={Tipo_Identificacion}
                    onChange={this.handleInputChange}
                    required
                  >
                    <option value="1" defaultValue>
                      Nacional
                    </option>
                    <option value="2">Residente</option>
                    {/*<option value="3">Pasaporte</option>
										<option value="4" >DIMEX</option>*/}
                  </select>
                  <h5 align="left">Número de identificación:</h5>
                  <input
                    type="text"
                    id="user"
                    name="user"
                    className="form-control mb-4"
                    placeholder="Ingrese el número de cédula"
                    value={user}
                    onChange={this.handleInputChange}
                    required
                  />
                  <h5 align="left">Nombre Completo:</h5>

                  <input
                    //className="form-control"
                    type="text"
                    id="name"
                    name="name"
                    className="form-control mb-4"
                    placeholder="Ingrese el nombre completo"
                    value={name}
                    validators={["required"]}
                    errormessages={["El campo es requerido"]}
                    onChange={this.handleInputChange}
                    required
                  />
                  <h5 align="left">Requerimientos de contraseña:</h5>
                  <h6 align="left">- La longitud mínima es de 6 caracteres.</h6>
                  <h6 align="left">- Debe contener al menos un número.</h6>
                  <h6 align="left">- Debe contener al menos una minúscula.</h6>
                  <h6 align="left" className="mb-4">
                    - Debe contener al menos una mayúscula.
                  </h6>

                  <input
                    type="text"
                    id="pass"
                    name="pass"
                    className="form-control mb-4"
                    placeholder="Ingrese la contraseña temporal"
                    value={pass}
                    onChange={this.handleInputChange}
                    required
                  />

                  <h5 align="left">Rol de usuario:</h5>
                  <select
                    className="custom-select mr-sm-2 mb-4"
                    id="rol"
                    name="rol"
                    value={rol}
                    onChange={this.handleInputChange}
                  >
                    <option value="1">Jefa/e patentes</option>
                    <option value="2">Tecnologías de información</option>
                    <option value="3" defaultValue>
                      Inspector
                    </option>
                  </select>
                  <h5 align="left">Correo Electrónico:</h5>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control mb-4"
                    placeholder="Ingrese el correo"
                    value={email}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div className="d-flex justify-content-around">
                    {/*}
										<div>
											<div className="custom-control custom-checkbox">
												<input
													value={remember}
													onChange={this.handleInputChange}
													type="checkbox"
													className="custom-control-input"
													id="remember"
												/>
												<label className="custom-control-label" htmlFor="remember">
													Recordarme
												</label>
											</div>
										</div>
										*/}
                  </div>
                  {/*<button
										data-toggle="modal"
										data-target="#modalMessageRegister"
										className="btn btn-info btn-block my-4 col-sm-2"
										type="button"
										onClick={this.onClick}
									>
										Registrar
									</button>
									*/}
                  {/*<input type="submit" 
									value="Enviar" 
								onClick={this.onClick} />*/}
                  <button
                    data-toggle="modal"
                    data-target="#modalMessageRegister"
                    className="btn btn-primary text-center"
                    type="	"
                    onClick={this.onClick}
                    value="Enviar"
                  >
                    Registrar
                  </button>
                  <ModalRegistrar name={name} error={this.devuelveError()} />
                </form>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
