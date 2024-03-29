import React, {Component} from "react";
import inspecOcular from "../../api/inspeccionOcular.api";
import {useRef} from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import SignaturePad from "react-signature-canvas";
import "./sigCanvas.css";
import "@fortawesome/fontawesome-free";
import va from "../../util/validaciones";
const validaciones = new va();

const sigCanvas = React.createRef();
const sigCanvas2 = React.createRef();
const sigCanvas3 = React.createRef();
const sigCanvas4 = React.createRef();
export default class ActaPostInspe extends Component {
  constructor(props) {
    super();
    this.state = {
      //Informacion Solicitante
      //PK_Codigo_Inspeccion: "",
      FK_Inspeccion_Patente_Nueva: localStorage.getItem("ocular"),
      Lugar: "",
      //Fecha: "",
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

      //PDF
      postSubmitted: false,
    };
    this.onClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  sunmitPost = (e) => {
    this.setState({
      postSubmitted: true,
    });
  };

  handleInputChange = (e) => {
    const {value, name} = e.target;
    console.log(value, name);

    if (name === "FK_Testigo1") {
      validaciones.validarCedula(value, name);
    }
    if (name === "FK_Testigo2") {
      validaciones.validarCedula(value, name);
    }
    if (name === "Tel_Testigo1") {
      validaciones.validarTelefono(value, name);
    }
    if (name === "Tel_Testigo2") {
      validaciones.validarTelefono(value, name);
    }
    if (name === "Correo_Testigo1") {
      validaciones.validarCorreo(value, name);
    }
    if (name === "Correo_Testigo2") {
      validaciones.validarCorreo(value, name);
    }
    this.setState({
      [name]: value,
    });
  };

  handleClick() {
    this.state.Firma_Inspector1 = sigCanvas.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    this.state.Firma_Inspector2 = sigCanvas2.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    this.state.Firma_Testigo1 = sigCanvas3.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    this.state.Firma_Testigo2 = sigCanvas4.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    console.log(
      "Preparando datos para enviar al servidor, mostrar datos:",
      this.state.Firma_Inspector1.length
    );
    console.log(
      "Preparando datos para enviar al servidor, mostrar datos:",
      this.state
    );

    fetch(inspecOcular.RUTA_INSERTAR_FIRMAS_TESTIGOS_INPECTOR, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
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
      //PK_Codigo_Inspeccion,
      FK_Inspeccion_Patente_Nueva,
      //Fecha,
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
      Lugar,
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
                          <strong>Acta Inspección Ocular</strong>
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
                              <strong>
                                Número de trámite: {FK_Inspeccion_Patente_Nueva}
                              </strong>
                            </h5>
                            <hr />
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="form-row">
                            <div className="form-group col-md-8">
                              <label htmlFor="Lugar">Lugar de la visita:</label>
                              <input
                                className="form-control"
                                type="text"
                                value={Lugar}
                                onChange={this.handleInputChange}
                                name="Lugar"
                                id="Lugar"
                                validators={["required"]}
                                errormessages={["El campo es requerido"]}
                                required
                              />
                              {/* <input
                                className="form-control"
                                type="text"
                                value={FK_Inspeccion_Patente_Nueva}
                                onChange={this.handleInputChange}
                                name="FK_Inspeccion_Patente_Nueva"
                                id="FK_Inspeccion_Patente_Nueva"
                                validators={["required"]}
                                errormessages={["El campo es requerido"]}
                                required
                            />*/}
                            </div>
                            {/*----------------Fecha--------------------- */}
                            {/*
                            <div className="form-group col-md-4">
                              <label htmlFor="Fecha">Fecha</label>
                              <input
                                className="form-control"
                                type="text"
                                value={Fecha}
                                placeholder="AAAA-MM-DD"
                                maxLength="13"
                                onChange={this.handleInputChange}
                                name="Fecha"
                                id="Fecha"
                                required
                              />
                            </div>
                            */}
                            <br />
                          </div>
                          <div className="form-row">
                            {/*"----------Testigo 1-------------"*/}
                            <div className="form-group col-md-8">
                              <label htmlFor="FK_Testigo1">
                                Cédula del testigo 1:
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                value={FK_Testigo1}
                                onChange={this.handleInputChange}
                                placeholder="0-0000-0000"
                                maxLength="11"
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
                                Cédula del testigo 2:
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                value={FK_Testigo2}
                                onChange={this.handleInputChange}
                                placeholder="0-0000-0000"
                                maxLength="11"
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
                          <div>
                            <br />
                            <br />
                          </div>
                          <div className="form-row">
                            {/*"----------Diligencias-------------"*/}
                            <div className="form-group col-md-30">
                              <label htmlFor="Diligencia">
                                Procedo a iniciar la inspección ocular que se
                                hace necesaria en las diligencias de:
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
                          </div>
                          <div>
                            <br />
                            <br />
                            <br />
                            <br />
                          </div>
                          <hr />
                        </div>
                        {/*"----------Firmas------------"*/}
                        <div className="form-group">
                          <div className="form-group">
                            <h5>Firma de los presentes</h5>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-5">
                              <label htmlFor="Firma_Inspector1">
                                Firma del inspector 1
                              </label>
                              <>
                                <SignaturePad
                                  ref={sigCanvas}
                                  canvasProps={{
                                    className: "signatureCanvas",
                                    value: Firma_Inspector1,
                                  }}
                                />
                              </>
                            </div>
                            <div className="form-group col-md-5">
                              <label htmlFor="Firma_Inspector2">
                                Firma del inspector 2
                              </label>
                              <>
                                <SignaturePad
                                  ref={sigCanvas2}
                                  canvasProps={{
                                    className: "signatureCanvas",
                                    value: Firma_Inspector2,
                                    onChange: this.handleInputChange,
                                  }}
                                />
                              </>
                            </div>
                            <div className="form-group col-md-5">
                              <label htmlFor="Firma_Testigo1">
                                Firma del testigo 1
                              </label>
                              <>
                                <SignaturePad
                                  ref={sigCanvas3}
                                  canvasProps={{
                                    className: "signatureCanvas",
                                    value: Firma_Testigo1,
                                    onChange: this.handleInputChange,
                                  }}
                                />
                              </>
                            </div>
                            <div className="form-group col-md-5">
                              <label htmlFor="Firma_Testigo2">
                                Firma del Testigo 2
                              </label>
                              <>
                                <SignaturePad
                                  ref={sigCanvas4}
                                  canvasProps={{
                                    className: "signatureCanvas",
                                    value: Firma_Testigo2,
                                    onChange: this.handleInputChange,
                                  }}
                                />
                              </>
                            </div>
                          </div>
                        </div>
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
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
          <br />
          <br />
        </div>
        <Footer />
      </div>
    );
  } /*Fin del render*/
}
