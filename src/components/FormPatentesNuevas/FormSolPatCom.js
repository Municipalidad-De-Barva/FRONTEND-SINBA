import React, {Component} from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import PDF from "../PDFgenerator";
import ModalDatosAdjunto from "./ModalDatosAdjunto";
import "@fortawesome/fontawesome-free";

export default class FormSolPatCom extends Component {
  constructor(props) {
    super();
    this.state = {
      //Informacion Solicitante
      nomSolicitante: "",
      cedulaSolicitante: "",
      represLegalSolicitante: "",
      cedulaJuriSolicitante: "",
      telSolicitante: "",
      faxSolicitante: "",
      dirSolicitante: "",
      correoEleSolicitante: "",

      //Informacion Dueño de local
      nomPropietario: "",
      represLegalPropietario: "",
      cedulaJuriPropietario: "",
      dirPropietario: "",

      //Datos del local
      nomComercial: "",
      actividad: "",

      //Declaración jurada
      declaraJura: "1",

      //Autorizo a
      nomAutorizado: "",
      cedAutorizado: "",

      //PDF
      postSubmitted: false,
    };
    this.onClick = this.handleClick.bind(this);
    //this.handleInputChange = this.handleInputChange.bind(this);
  }
  sunmitPost = (e) => {
    this.setState({
      postSubmitted: true,
    });
  };

  handleInputChange = (e) => {
    const {value, name} = e.target;
    console.log(value, name);

    if (name === "nomSolicitante") {
      this.validarTexto(value);
    }

    if (name === "cedulaSolicitante") {
      this.validarCedula(value);
    }
    this.setState({
      [name]: value,
    });
  };

  handleInputChangeDeclaraJura = (e) => {
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
  };

  validarTexto(valor) {
    let regex = new RegExp("^[a-zA-Z]+$");

    if (regex.test(valor)) {
      console.log(" texto valido");
    } else {
      console.log(" texto invalido");
    }
  }

  validarCedula(valor) {
    var expresion = /^[0-9,A]-?\d{4}-?\d{4}$/;
    let regex = new RegExp(expresion);

    if (regex.test(valor)) {
      console.log(" cedula valido");
    } else {
      console.log(" cedula invalido");
    }
  }
  handleClick() {
    console.log(
      "Preparando datos para enviar al servidor, mostrar datos:",
      this.state
    );

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
    return <Modal />;
  }

  render() {
    const {
      nomSolicitante,
      cedulaSolicitante,
      represLegalSolicitante,
      cedulaJuriSolicitante,
      telSolicitante,
      faxSolicitante,
      dirSolicitante,
      correoEleSolicitante,
      nomPropietario,
      represLegalPropietario,
      cedulaJuriPropietario,
      dirPropietario,
      nomComercial,
      actividad,
      declaraJura,
      nomAutorizado,
      cedAutorizado,
    } = this.state;

    return (
      <div>
        <Header />
        <div
          className="image-container set-full-height"
          style={{
            backgroundImage:
              "url(" +
              "https://images.pexels.com/photos/4476623/pexels-photo" +
              "-4476623.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4476623.jpg&fm=jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          //style="background-image: url('src/images/backGroundFormPatNueva.jpg')"
        >
          <>
            {!this.state.postSubmitted ? (
              <div className="container">
                <br />
                <br />
                <div className="row">
                  <div className="col-sm-12 col-sm-offset-0">
                    <div className="card">
                      <form id="formPat">
                        <div
                          className=" card-header form-group text-center"
                          id="n1"
                        >
                          <h1>
                            <strong>Formulario Patente Comercial Nueva.</strong>
                          </h1>
                        </div>
                        <div className="card-body" id="n2">
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

                          <div className="form-group">
                            <div className="form-group">
                              <h2>Datos del Solicitante:</h2>
                            </div>

                            <hr />
                            <div className="form-row">
                              <div className="form-group col-md-8">
                                <label htmlFor="nomSolicitante">
                                  Nombre del solicitante o patentado:
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  value={nomSolicitante}
                                  placeholder="Ingrese su nombre completo"
                                  onChange={this.handleInputChange}
                                  name="nomSolicitante"
                                  id="nomSolicitante"
                                  validators={["required"]}
                                  errormessages={["El campo es requerido"]}
                                  required
                                />
                              </div>
                              {/*----------------Cédula--------------------- */}
                              <div className="form-group col-md-4">
                                <label htmlFor="cedulaSolicitante">
                                  Cédula:{" "}
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  value={cedulaSolicitante}
                                  placeholder="0-0000-0000"
                                  maxLength="11"
                                  onChange={this.handleInputChange}
                                  name="cedulaSolicitante"
                                  id="cedulaSolicitante"
                                  required
                                />
                              </div>
                              <br />
                            </div>

                            <div className="form-row">
                              {/*"----------Nombre del representante legal-------------"*/}
                              <div className="form-group col-md-8">
                                <label htmlFor="represLegalSolicitante">
                                  En caso de sociedades: Nombre del
                                  representante legal
                                </label>

                                <input
                                  className="form-control"
                                  type="text"
                                  value={represLegalSolicitante}
                                  onChange={this.handleInputChange}
                                  name="represLegalSolicitante"
                                  id="represLegalSolicitante"
                                />
                              </div>
                              {/*"----------Cédula Jurídica-------------"*/}
                              <div className="form-group col-md-4">
                                <label htmlFor="cedulaJuriSolicitante">
                                  Cédula Jurídica:
                                </label>

                                <input
                                  className="form-control"
                                  type="text"
                                  value={cedulaJuriSolicitante}
                                  onChange={this.handleInputChange}
                                  name="cedulaJuriSolicitante"
                                  id="cedulaJuriSolicitante"
                                />
                              </div>
                            </div>

                            <div className="form-group row">
                              <h4 className=" col-sm-3 col-form-label">
                                Lugar o medio de notificación:
                              </h4>
                            </div>

                            <div className="form-row">
                              {/*"----------Teléfono------------"*/}
                              <div className="form-group col-md-3">
                                <label htmlFor="telSolicitante">
                                  Teléfono:
                                </label>

                                <input
                                  className="form-control"
                                  type="tel"
                                  value={telSolicitante}
                                  onChange={this.handleInputChange}
                                  name="telSolicitante"
                                  id="telSolicitante"
                                  required
                                />
                              </div>
                              {/*"----------Fax------------"*/}
                              <div className="form-group col-md-3">
                                <label htmlFor="faxSolicitante">Fax:</label>
                                <input
                                  className="form-control"
                                  type="tel"
                                  value={faxSolicitante}
                                  onChange={this.handleInputChange}
                                  name="faxSolicitante"
                                  id="faxSolicitante"
                                />
                              </div>
                              {/*"----------Correo electrónico:------------"*/}
                              <div className="form-group col-md-6">
                                <label htmlFor="correoEleSolicitante">
                                  Correo electrónico:
                                </label>

                                <input
                                  className="form-control"
                                  type="email"
                                  value={correoEleSolicitante}
                                  onChange={this.handleInputChange}
                                  name="correoEleSolicitante"
                                  id="correoEleSolicitante"
                                  required
                                />
                              </div>
                            </div>

                            <div className="form-row">
                              {/*"----------Dirección-------------"*/}
                              <div className="form-group col-md-12">
                                <label htmlFor="dirSolicitante">
                                  Dirección:
                                </label>

                                <input
                                  className="form-control"
                                  type="text"
                                  value={dirSolicitante}
                                  onChange={this.handleInputChange}
                                  name="dirSolicitante"
                                  id="dirSolicitante"
                                />
                              </div>
                            </div>
                          </div>
                          {/* fin de datos del solicitante*/}
                          <div className="form-group">
                            <h2>Dueño de la propiedad:</h2>
                            <hr />

                            <div className="form-row">
                              {/*"----------Nombre del propietario-------------"*/}
                              <div className="form-group col-md-6">
                                <label htmlFor="nomPropietario">
                                  Nombre del propietario
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  value={nomPropietario}
                                  onChange={this.handleInputChange}
                                  name="nomPropietario"
                                  id="nomPropietario"
                                  required
                                />
                              </div>
                              <div className="form-group col-md-6">
                                <label htmlFor="represLegalPropietario">
                                  En caso de sociedades: Nombre del
                                  representante legal:
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  value={represLegalPropietario}
                                  onChange={this.handleInputChange}
                                  name="represLegalPropietario"
                                  id="nomPrepresLegalPropietarioropietario"
                                />
                              </div>
                            </div>

                            <div className="form-row">
                              {/*"----------Cédula jurídica o personal:-------------"*/}
                              <div className="form-group col-md-4">
                                <label htmlFor="cedulaJuriPropietario">
                                  Cédula jurídica o física:
                                </label>

                                <input
                                  className="form-control"
                                  type="text"
                                  value={cedulaJuriPropietario}
                                  onChange={this.handleInputChange}
                                  name="cedulaJuriPropietario"
                                  id="cedulaJuriPropietario"
                                />
                              </div>
                            </div>

                            <div className="form-row">
                              {/*"----------Dirección Dueño de la propiedad:-------------"*/}
                              <div className="form-group col-md-12">
                                <label htmlFor="dirPropietario">
                                  Dirección:
                                </label>

                                <input
                                  className="form-control"
                                  type="text"
                                  value={dirPropietario}
                                  onChange={this.handleInputChange}
                                  name="dirPropietario"
                                  id="dirPropietario"
                                />
                              </div>
                            </div>
                          </div>
                          {/*fin de dueño de la propiedad */}
                          <div className="form-group">
                            <h2>Datos del Local</h2>
                            <hr />

                            <div className="form-row">
                              {/*"-----------Nombre comercial del negocio o local------------"*/}
                              <div className="form-group col-md-6">
                                <label htmlFor="nomComercial">
                                  Nombre comercial del negocio o local:
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  value={nomComercial}
                                  onChange={this.handleInputChange}
                                  name="nomComercial"
                                  id="nomComercial"
                                  required
                                />
                              </div>
                              {/*"-----------Actividad específica:------------"*/}
                              <div className="form-group col-md-6">
                                <label htmlFor="actividad">
                                  Actividad específica:
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  value={actividad}
                                  onChange={this.handleInputChange}
                                  name="actividad"
                                  id="actividad"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          {/*fin de datos del local */}
                          <div className="form-group">
                            <h2>Declaración jurada Solicitud nueva</h2>
                            <hr />

                            <div className="form-row">
                              <div className="form-group col-md-1">
                                <input
                                  type="radio"
                                  onChange={this.handleInputChangeDeclaraJura}
                                  name="declaraJura"
                                  id="declaraJura"
                                  required
                                />
                                <label> Si </label>
                              </div>
                              <div className="form-group col-md-1">
                                <input
                                  type="radio"
                                  onChange={this.handleInputChangeDeclaraJura}
                                  name="declaraJura"
                                  id="declaraJura"
                                  required
                                />
                                <label> No </label>
                              </div>
                              <p>utilizare repertorio musical (ACAM)</p>
                            </div>

                            <div className="alert alert-warning" role="alert">
                              <p className="mb-0 text-center">
                                Declaro bajo juramento que: Nosotros, los abajo
                                firmantes de calidades antes mencionadas,
                                apercibimos de las penas que se castiga los
                                delitos de falso testimonio y perjurio
                                declaramos bajo fe de juramento que la
                                información anotada anteriormente en lo que
                                corresponde a cada uno, es verdadera
                              </p>
                            </div>
                          </div>
                          {/*Fin Declaración jurada Solicitud*/}
                          <div className="form-group">
                            <br />
                            <div className="form-row">
                              <div className="form-group col-md-6">
                                <label>
                                  Firma del solicitante:
                                  __________________________________
                                </label>
                              </div>
                              <div className="form-group col-md-6">
                                <label>
                                  Cédula solicitante:
                                  __________________________________
                                </label>
                              </div>
                            </div>
                            <br />
                            <div className="form-row">
                              <div className="form-group col-md-6">
                                <label>
                                  Firma del dueño:
                                  ______________________________________
                                </label>
                                <hr />
                              </div>
                              <div className="form-group col-md-6">
                                <label>
                                  Cédula del dueño:
                                  __________________________________
                                </label>
                              </div>
                            </div>
                          </div>
                          {/*Fin firmas*/}
                          <div className="form-group">
                            <div className="form-row">
                              <div className="form-group text-center col-md-6 ">
                                <label className="text-center">
                                  Timbre fiscal:{" "}
                                </label>
                              </div>
                              <div className="form-group  text-center col-md-6">
                                <label>Timbre de abogado: </label>
                              </div>
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                          </div>
                          {/*Timbre traspaso*/}
                          <div className="form-group">
                            <div>
                              <label>
                                Firmas autenticadas por notario Público:
                                __________________________________ Firma:
                                __________________________________
                              </label>
                              <br />
                            </div>

                            <div>
                              <label>Sello: </label>

                              <br />
                              <br />
                              <br />
                              <br />
                            </div>
                          </div>
                          {/*Timbre y firma solicitud nueva*/}
                          <div className="form-group">
                            <div className="form-row">
                              <div className="form-group col-md-8">
                                <label htmlFor="nomAutorizado">
                                  Autorizo a:{" "}
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  value={nomAutorizado}
                                  onChange={this.handleInputChange}
                                  name="nomAutorizado"
                                  id="nomAutorizado"
                                />
                              </div>
                              <div className="form-group col-md-4">
                                <label htmlFor="cedAutorizado">Cédula </label>

                                <input
                                  className="form-control"
                                  type="text"
                                  value={cedAutorizado}
                                  onChange={this.handleInputChange}
                                  name="cedAutorizado"
                                  id="cedAutorizado"
                                />
                              </div>
                            </div>

                            <p>
                              Para que presente y retire documentos con respecto
                              a este trámite
                            </p>
                            <br />
                            <div>
                              <label>
                                Firma de la persona autorizada:
                                __________________________________
                              </label>
                            </div>
                          </div>
                          {/*Fin autorizacion*/}
                        </div>
                        <div className="card-header form-group">
                          <h2>Departamento de cobros</h2>
                          <hr />
                          <p>Estar al día con los siguientes departamentos: </p>
                          <ol>
                            <li>Bienes inmuebles </li>
                            <li>Ingeniería </li>
                            <li>Basura </li>
                            <li>Acueducto </li>
                            <li>Cementerio </li>
                            <li>Limpieza de vías </li>
                            <li>Funcionario que aprueba </li>
                          </ol>
                        </div>
                        <div className="card-header form-group">
                          <ModalDatosAdjunto />
                        </div>
                        <div className="card-footer text-center">
                          <div className="form-row">
                            <div className="form-group col-md-2 text-center">
                              <button
                                className="btn btn-primary text-center"
                                type="	"
                                onClick={this.onClick}
                                value="Enviar"
                                id="butSend"
                              >
                                Enviar
                              </button>
                            </div>

                            <div className="form-group col-md-2 text-center">
                              <button
                                type="button"
                                className="btn btn-info text-center"
                                //onClick={this.sunmitPost}
                                onClick={() => {
                                  var prtContent = document.getElementById(
                                    "formPat"
                                  );
                                  //var WinPrint= window.open(' ', '_blank', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
                                  var WinPrint = window.open(
                                    " ",
                                    "_blank",
                                    "resizable=yes, scrollbars=yes, titlebar=yes, width=800, height=900, top=10, left=10"
                                  );
                                  WinPrint.document.write(
                                    '<head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">' +
                                      '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">' +
                                      "</head>"
                                  );
                                  //WinPrint.document.write(prtContent.innerHTML);
                                  WinPrint.document.write(
                                    document.getElementById("n1").innerHTML
                                  );
                                  WinPrint.document.write(
                                    document.getElementById("n2").innerHTML
                                  );
                                  WinPrint.document.getElementById(
                                    "declaraJura"
                                  );
                                  WinPrint.document.close();
                                  WinPrint.addEventListener(
                                    "load",
                                    function () {
                                      WinPrint.focus();
                                      WinPrint.print();
                                      WinPrint.close();
                                    }
                                  );
                                }}
                              >
                                Imprimir
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <PDF
                nomSolicitante={nomSolicitante}
                cedulaSolicitante={cedulaSolicitante}
                represLegalSolicitante={represLegalSolicitante}
                cedulaJuriSolicitante={cedulaJuriSolicitante}
                telSolicitante={telSolicitante}
                faxSolicitante={faxSolicitante}
                dirSolicitante={dirSolicitante}
                correoEleSolicitante={correoEleSolicitante}
                nomPropietario={nomPropietario}
                represLegalPropietario={represLegalPropietario}
                cedulaJuriPropietario={cedulaJuriPropietario}
                dirPropietario={dirPropietario}
                nomComercial={nomComercial}
                actividad={actividad}
                declaraJura={declaraJura}
                nomAutorizado={nomAutorizado}
                cedAutorizado={cedAutorizado}
              />
            )}
          </>
          <br />
          <br />
        </div>
        <Footer />
      </div>
    );
  } /*Fin del render*/
}

class Modal extends Component {
  render() {
    return (
      <div class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Ir a la pagina principal
              </button>
              <button type="button" class="btn btn-primary">
                Seguir en esta pagina
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
