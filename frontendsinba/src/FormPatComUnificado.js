import React from "react";

class FormPatComUnificado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /**Radio button */
      tipoSol: "",
      /*Informacion Solicitante*/
      nomSolicitante: "",
      cedulaSolicitante: "",
      represLegalSolicitante: "",
      cedulaJuriSolicitante: "",
      telSolicitante: "",
      faxSolicitante: "",
      dirSolicitante: "",
      correoEleSolicitante: "",
      /*Informacion Dueño de local*/
      nomPropietario: "",
      represLegalPropietario: "",
      cedulaJuriPropietario: "",
      dirPropietario: "",
      /*Datos del local*/
      nomComercial: "",
      actividad: "",
      /*datos del local retiro */
      dirExactaLocal: "",
      numPatenteCom: "",
      /*datos del local renovacion */
      numPlanoCatastro: "",
      telLocal: "",
      faxLocal: "",
      estadoPaten: "",
      correoEleLocal: "",
      /*declaracion jurada */
      declaraJura: "",
      /*Informacion del traspaso*/
      nomTraspaso: "",
      nomNegocio: "",
      cedulaTraspaso: "",
      represLegalTraspaso: "",
      cedulaJuriTraspaso: "",
      telTraspaso: "",
      faxTraspaso: "",
      dirTraspaso: "",
      correoEleTraspaso: "",
      /*Autorizo a*/
      nomAutorizado: "",
      cedAutorizado: "",
      message: "",
    };
  }

  save(e) {
    this.setState({ message: "Guardado correctamente" });
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <span>{console.log(JSON.stringify(this.state))}</span>
            <span>{JSON.stringify(this.state)}</span>
          </div>
          <div>
            <h1>Formulario Patente Comercial Unificado</h1>
            <h3>Numero de tramite:</h3>
            <h3>Fecha del tramite:</h3>
            <h3>Funcionario que recibe:</h3>
          </div>
          <div>
            <h3>Tipo de solicitud:</h3>
            <input
              type="radio"
              value="1"
              onChange={(e) => this.setState({ tipoSol: e.target.value })}
              name="tipoSol"
              id="tipoSol"
            ></input>
            <label htmlFor="tipoSol">Nueva </label>

            <input
              type="radio"
              value="2"
              onChange={(e) => this.setState({ tipoSol: e.target.value })}
              name="tipoSol"
              id="tipoSol"
            ></input>
            <label htmlFor="tipoSol">Traspaso </label>

            <input
              type="radio"
              value="3"
              onChange={(e) => this.setState({ tipoSol: e.target.value })}
              name="tipoSol"
              id="tipoSol"
            ></input>
            <label htmlFor="tipoSol">Traslado </label>

            <input
              type="radio"
              value="4"
              onChange={(e) => this.setState({ tipoSol: e.target.value })}
              name="tipoSol"
              id="tipoSol"
            ></input>
            <label htmlFor="tipoSol">Retiro </label>

            <input
              type="radio"
              value="5"
              onChange={(e) => this.setState({ tipoSol: e.target.value })}
              name="tipoSol"
              id="tipoSol"
            ></input>
            <label htmlFor="tipoSol">Renovacion </label>

            <input
              type="radio"
              value="6"
              onChange={(e) => this.setState({ tipoSol: e.target.value })}
              name="tipoSol"
              id="tipoSol"
            ></input>
            <label htmlFor="tipoSol">Cambio </label>
          </div>
          <div>
            <h2>Datos del Solicitante:</h2>
            <div>
              <label htmlFor="nomSolicitante">
                Nombre del solicitante o patentado:
              </label>
              <input
                type="text"
                value={this.state.nomSolicitante}
                onChange={(e) =>
                  this.setState({ nomSolicitante: e.target.value })
                }
                name="nomSolicitante"
                id="nomSolicitante"
              />
            </div>

            <div>
              <label htmlFor="cedulaSolicitante">Cedula:</label>
              <br></br>
              <input
                type="text"
                value={this.state.cedulaSolicitante}
                onChange={(e) =>
                  this.setState({ cedulaSolicitante: e.target.value })
                }
                name="cedulaSolicitante"
                id="cedulaSolicitante"
              />
              <br></br>
            </div>

            <div>
              <label htmlFor="represLegalSolicitante">
                En caso de sociedades: Nombre del representante legal
              </label>
              <br></br>
              <input
                type="text"
                value={this.state.represLegalSolicitante}
                onChange={(e) =>
                  this.setState({ represLegalSolicitante: e.target.value })
                }
                name="represLegalSolicitante"
                id="represLegalSolicitante"
              />
              <br></br>
            </div>

            <div>
              <label htmlFor="cedulaJuriSolicitante">Cedula Juridica:</label>
              <br></br>
              <input
                type="text"
                value={this.state.cedulaJuriSolicitante}
                onChange={(e) =>
                  this.setState({ cedulaJuriSolicitante: e.target.value })
                }
                name="cedulaJuriSolicitante"
                id="cedulaJuriSolicitante"
              />
              <br></br>
            </div>

            <div>
              <label>Lugar o medio de notificación:</label>
              <br></br>
            </div>

            <div>
              <label htmlFor="telSolicitante">Telefono:</label>
              <br></br>
              <input
                type="tel"
                value={this.state.telSolicitante}
                onChange={(e) =>
                  this.setState({ telSolicitante: e.target.value })
                }
                name="telSolicitante"
                id="telSolicitante"
              />
              <br></br>
            </div>

            <div>
              <label htmlFor="faxSolicitante">Fax:</label>
              <br></br>
              <input
                type="tel"
                value={this.state.faxSolicitante}
                onChange={(e) =>
                  this.setState({ faxSolicitante: e.target.value })
                }
                name="faxSolicitante"
                id="faxSolicitante"
              />{" "}
              <br></br>
            </div>

            <div>
              <label htmlFor="dirSolicitante">Dirección:</label>
              <br></br>
              <input
                type="text"
                value={this.state.dirSolicitante}
                onChange={(e) =>
                  this.setState({ dirSolicitante: e.target.value })
                }
                name="dirSolicitante"
                id="dirSolicitante"
              />
              <br></br>
            </div>
            <div>
              <label htmlFor="correoEleSolicitante">Correo electrónico:</label>
              <br></br>
              <input
                type="email"
                value={this.state.correoEleSolicitante}
                onChange={(e) =>
                  this.setState({ correoEleSolicitante: e.target.value })
                }
                name="correoEleSolicitante"
                id="correoEleSolicitante"
              />
              <br></br>
            </div>
          </div>
          {/* fin de datos del solicitante*/}
          <div>
            <h2>Dueño de la propiedad:</h2>

            <div>
              <label htmlFor="nomPropietario">Nombre del propietario</label>
              <br></br>
              <input
                type="text"
                value={this.state.nomPropietario}
                onChange={(e) =>
                  this.setState({ nomPropietario: e.target.value })
                }
                name="nomPropietario"
                id="nomPropietario"
              />
              <br></br>
            </div>

            <div>
              <label htmlFor="represLegalPropietario">
                En caso de sociedades: Nombre del representante legal:
              </label>
              <br></br>
              <input
                type="text"
                value={this.state.represLegalPropietario}
                onChange={(e) =>
                  this.setState({ represLegalPropietario: e.target.value })
                }
                name="represLegalPropietario"
                id="nomPrepresLegalPropietarioropietario"
              />
              <br></br>
            </div>

            <div>
              <label htmlFor="cedulaJuriPropietario">
                Cédula jurídica o personal:
              </label>
              <br></br>
              <input
                type="text"
                value={this.state.cedulaJuriPropietario}
                onChange={(e) =>
                  this.setState({ cedulaJuriPropietario: e.target.value })
                }
                name="cedulaJuriPropietario"
                id="cedulaJuriPropietario"
              />
              <br></br>
            </div>

            <div>
              <label htmlFor="dirPropietario">Dirección:</label>
              <br></br>
              <input
                type="text"
                value={this.state.dirPropietario}
                onChange={(e) =>
                  this.setState({ dirPropietario: e.target.value })
                }
                name="dirPropietario"
                id="dirPropietario"
              />
              <br></br>
            </div>
          </div>
          {/*fin de dueño de la propiedad */}
          <div>
            <h2>Datos del Local</h2>
            <div>
              <label htmlFor="nomComercial">
                Nombre comercial del negocio o local
              </label>
              <br></br>
              <input
                type="text"
                value={this.state.nomComercial}
                onChange={(e) =>
                  this.setState({ nomComercial: e.target.value })
                }
                name="nomComercial"
                id="nomComercial"
              />
              <br></br>
            </div>

            <div>
              <label htmlFor="actividad">Actividad específica</label>
              <br></br>
              <input
                type="text"
                value={this.state.actividad}
                onChange={(e) => this.setState({ actividad: e.target.value })}
                name="actividad"
                id="actividad"
              />
              <br></br>
            </div>
          </div>
          {/*fin de datos del local */}
          <div>
            <h2>Datos Del Local Retiro</h2>
            <div>
              <label htmlFor="dirExactaLocal">
                Dirección exacta del local, Distrito, otras señas
              </label>
              <br></br>
              <textarea
                value={this.state.dirExactaLocal}
                onChange={(e) =>
                  this.setState({ dirExactaLocal: e.target.value })
                }
                name="dirExactaLocal"
                id="dirExactaLocal"
                rows="4"
                cols="50"
              ></textarea>
              <br></br>
            </div>

            <div>
              <label htmlFor="numPatenteCom">Numero de Patente comercial</label>
              <br></br>
              <input
                type="text"
                value={this.state.numPatenteCom}
                onChange={(e) =>
                  this.setState({ numPatenteCom: e.target.value })
                }
                name="numPatenteCom"
                id="numPatenteCom"
              />
              <br></br>
            </div>
          </div>
          {/*fin datos del local retiro */}
          <div>
            <h2>Datos Del Local Renovacion</h2>
            <div>
              <label htmlFor="numPlanoCatastro">Numero de Plano catastro</label>
              <br></br>
              <input
                type="number"
                placeholder="Ingrese numero"
                value={this.state.numPlanoCatastro}
                onChange={(e) =>
                  this.setState({ numPlanoCatastro: e.target.value })
                }
                name="numPlanoCatastro"
                id="numPlanoCatastro"
              />
              <br></br>
              <div>
                <label htmlFor="telLocal">Telefono:</label>
                <br></br>
                <input
                  type="tel"
                  value={this.state.telLocal}
                  onChange={(e) => this.setState({ telLocal: e.target.value })}
                  name="telLocal"
                  id="telLocal"
                />
                <br></br>
              </div>

              <div>
                <label htmlFor="faxLocal">Fax:</label>
                <br></br>
                <input
                  type="tel"
                  value={this.state.faxLocal}
                  onChange={(e) => this.setState({ faxLocal: e.target.value })}
                  name="faxLocal"
                  id="faxLocal"
                />{" "}
                <br></br>
              </div>

              <div>
                <label htmlFor="correoEleLocal">Correo electrónico:</label>
                <br></br>
                <input
                  type="email"
                  value={this.state.correoEleLocal}
                  onChange={(e) =>
                    this.setState({ correoEleLocal: e.target.value })
                  }
                  name="correoEleLocal"
                  id="correoEleLocal"
                />
                <br></br>
              </div>
            </div>

            <div>
              <label>Estado de la Patente</label>
              <br></br>
              <label htmlFor="estadoPaten">Activa </label>
              <input
                type="radio"
                value="1"
                onChange={(e) => this.setState({ estadoPaten: e.target.value })}
                name="estadoPaten"
                id="estadoPaten"
              />
              <br></br>
              <label htmlFor="estadoPaten">Inactiva </label>
              <input
                type="radio"
                value="0"
                onChange={(e) => this.setState({ estadoPaten: e.target.value })}
                name="estadoPaten"
                id="estadoPaten"
              />
              <br></br>
            </div>
          </div>
          {/*Fin de datos del local renovacion */}
          <div>
            <h2>Declaracion jurada Solicitud nueva</h2>
            <label>Declaro bajo juramento que </label>
            <label>No</label>
            <input
              type="radio"
              value="0"
              onChange={(e) => this.setState({ declaraJura: e.target.value })}
              name="declaraJura"
              id="declaraJura"
            />
            <label>Si</label>
            <input
              type="radio"
              value="1"
              onChange={(e) => this.setState({ declaraJura: e.target.value })}
              name="declaraJura"
              id="declaraJura"
            />
            <label>utilizare repertorio musical (ACAM)</label>
            <p>
              Nosotros, los abajo firmantes de calidades antes mencionadas,
              apercibimos de las penas que se castiga los delitos de falso
              testimonio y perjurio declaramos bajo fe de juramento que la
              información anotada anteriormente en lo que corresponde a cada
              uno, es verdadera (Ley 6683 y Decreto 23485 MP)
            </p>
          </div>
          {/*Fin declaracion jurada Solicitud*/}
          <div>
            <h2>Declaracion jurada Retiro</h2>
            <p>
              Yo, el abajo firmante, de calidades antes mencionadas, a percibido
              de las penas con que se castiga los delitos de falso testimonio y
              perjurio, declaro bajo fe de juramento que la información que he
              suministrado es verdadera
            </p>
          </div>
          {/*Fin declaracion jurada Retiro*/}
          <div>
            <div>
              <label>Firma del solicitante</label>
              <br></br>
              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
              ></textarea>
              <br></br>
            </div>
            <div>
              <label>Cedula solicitante</label>
              <br></br>
              <input type="text" />
              <br></br>
            </div>
            <div>
              <label>Firma del dueño</label>
              <br></br>
              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
              ></textarea>
              <br></br>
            </div>
            <div>
              <label>Cedula del dueño</label>
              <br></br>
              <input type="text" />
              <br></br>
            </div>
          </div>
          {/*Fin firmas*/}
          <div>
            <h2>Datos de la persona a traspasar</h2>
            <div>
              <label htmlFor="nomTraspaso">
                Nombre de la persona a traspasar
              </label>
              <br></br>
              <input
                type="text"
                value={this.state.nomTraspaso}
                onChange={(e) => this.setState({ nomTraspaso: e.target.value })}
                name="nomTraspaso"
                id="nomTraspaso"
              />
              <br></br>
            </div>
            <div>
              <label htmlFor="nomNegocio">Nombre del Negocio</label>
              <br></br>
              <input
                type="text"
                value={this.state.nomNegocio}
                onChange={(e) => this.setState({ nomNegocio: e.target.value })}
                name="nomNegocio"
                id="nomNegocio"
              />
              <br></br>
            </div>
            <div>
              <label htmlFor="cedulaTraspaso">Cedula</label>
              <br></br>
              <input
                type="text"
                value={this.state.cedulaTraspaso}
                onChange={(e) =>
                  this.setState({ cedulaTraspaso: e.target.value })
                }
                name="cedulaTraspaso"
                id="cedulaTraspaso"
              />
              <br></br>
            </div>
            <div>
              <label htmlFor="represLegalTraspaso">
                En caso de sociedades: Nombre del representante legal:
              </label>
              <br></br>
              <input
                type="text"
                value={this.state.represLegalTraspaso}
                onChange={(e) =>
                  this.setState({ represLegalTraspaso: e.target.value })
                }
                name="represLegalTraspaso"
                id="represLegalTraspaso"
              />
              <br></br>
            </div>

            <div>
              <label htmlFor="cedulaJuriTraspaso">
                Cédula jurídica o personal:
              </label>
              <br></br>
              <input
                type="text"
                value={this.state.cedulaJuriTraspaso}
                onChange={(e) =>
                  this.setState({ cedulaJuriTraspaso: e.target.value })
                }
                name="cedulaJuriTraspaso"
                id="cedulaJuriTraspaso"
              />
              <br></br>
            </div>

            <div>
              <label>Lugar o medio de notificación:</label>
              <br></br>
            </div>

            <div>
              <label htmlFor="telTraspaso">Telefono:</label>
              <br></br>
              <input
                type="tel"
                value={this.state.telTraspaso}
                onChange={(e) => this.setState({ telTraspaso: e.target.value })}
                name="telTraspaso"
                id="telTraspaso"
              />
              <br></br>
            </div>

            <div>
              <label>Fax:</label>
              <br></br>
              <input
                type="tel"
                value={this.state.faxTraspaso}
                onChange={(e) => this.setState({ faxTraspaso: e.target.value })}
                name="faxTraspaso"
                id="faxTraspaso"
              />{" "}
              <br></br>
            </div>

            <div>
              <label htmlFor="dirTraspaso">Dirección:</label>
              <br></br>
              <input
                type="text"
                value={this.state.dirTraspaso}
                onChange={(e) => this.setState({ dirTraspaso: e.target.value })}
                name="dirTraspaso"
                id="dirTraspaso"
              />
              <br></br>
            </div>
            <div>
              <label htmlFor="correoEleTraspaso">Correo electrónico:</label>
              <br></br>
              <input
                type="email"
                value={this.state.correoEleTraspaso}
                onChange={(e) =>
                  this.setState({ correoEleTraspaso: e.target.value })
                }
                name="correoEleTraspaso"
                id="correoEleTraspaso"
              />
              <br></br>
            </div>
          </div>{" "}
          {/*Datos de la persona a traspasar*/}
          <div>
            <label>Timbre fiscal</label>
            <br></br>
            <textarea
              id="w3review"
              name="w3review"
              rows="4"
              cols="50"
            ></textarea>
            <br></br>
          </div>{" "}
          {/*Timbre traspaso*/}
          <div>
            <div>
              <label>Timbre de abogado</label>
              <br></br>
              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
              ></textarea>
              <br></br>
            </div>

            <div>
              <label>Firmas autenticadas por notario Publico</label>
              <br></br>
              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
              ></textarea>
              <br></br>
            </div>

            <div>
              <label>Firma</label>
              <br></br>
              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
              ></textarea>
              <br></br>
            </div>

            <div>
              <label>Sello</label>
              <br></br>
              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
              ></textarea>
              <br></br>
            </div>
          </div>
          {/*Timbre y firma solicitud nueva*/}
          <div>
            <label htmlFor="nomAutorizado">Autorizo a </label>
            <input
              type="text"
              value={this.state.nomAutorizado}
              onChange={(e) =>
                this.setState({ nomAutorizado: e.target.value })
              }
              name="nomAutorizado"
              id="nomAutorizado"
            />
            <label htmlFor="cedAutorizado">cedula </label>
            <input type="text" value={this.state.cedAutorizado}
              onChange={(e) =>
                this.setState({ cedAutorizado: e.target.value })
              }
              name="cedAutorizado"
              id="cedAutorizado"/>
            <br></br>
            <p>
              Para que presente y retire documentos con respecto a este trámite
            </p>
            <div>
              <label>Firma de la persona autorizada</label>
              <br></br>
              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
              ></textarea>
              <br></br>
            </div>
          </div>
          {/*Fin autorizacion*/}
          <div>
            <h2>Departamento de cobros</h2>
            <p>Estar al dia con los siguientes departamentos: </p>
            <ol>
              <li>Bienes inmuebles </li>
              <li>Ingenieria </li>
              <li>Basura </li>
              <li>Acueducto </li>
              <li>Cementerio </li>
              <li>Limpieza de vias </li>
              <li>Funcionario que aprueba </li>
            </ol>
          </div>
          {/*Gestiones al dia Nueva, traspaso, traslado*/}
          <div>
            <input type="submit" value="Enviar" />
            {/*<button onClick={this.save.bind(this)}>Enviar</button>
                        <spam>[this.state.message]*/}
            <input type="reset" value="Limpiar" />
          </div>
        </form>
      </div>
    );
  }
}

export default FormPatComUnificado;
