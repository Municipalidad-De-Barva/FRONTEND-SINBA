import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import "react-bootstrap";
//import {prueba} from "./apiFetch";

class FormPatComUnificado extends Component {
	constructor(props) {
		super(props);
		this.state = {
			/*Tipo de solicitud*/
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
		};
		this.onClick = this.handleClick.bind(this);
	}
	handleClick(event) {
		console.log(this.state);
		//prueba();
		fetch("http://localhost:3001/", {
			method: "POST",
			body: "{'msg':'oa'}",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	}

	render() {
		return (
			<div className="container">
				{/*className="text-center"*/}
				<div>
					<form>
						{/*
						<div className="form-group">
							<span>{console.log(JSON.stringify(this.state))}</span>
							<span>{JSON.stringify(this.state)}</span>
						</div>
						*/}
						<div className="form-group">
							<h1>Formulario Patente Comercial Unificado</h1>
							<h3>Numero de tramite:</h3>
							<h3>Fecha del tramite:</h3>
							<h3>Funcionario que recibe:</h3>
						</div>
						<div className="form-group">
							<h3>Tipo de solicitud:</h3>
							<hr />
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									value="1"
									onChange={(e) => this.setState({tipoSol: e.target.value})}
									name="tipoSol"
									id="tipoSol"
								></input>
								<label className="form-check-label" htmlFor="tipoSol">
									Nueva{" "}
								</label>
							</div>

							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									value="2"
									onChange={(e) => this.setState({tipoSol: e.target.value})}
									name="tipoSol"
									id="tipoSol"
								></input>
								<label className="form-check-label" htmlFor="tipoSol">
									Traspaso{" "}
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									value="3"
									onChange={(e) => this.setState({tipoSol: e.target.value})}
									name="tipoSol"
									id="tipoSol"
								></input>
								<label className="form-check-label" htmlFor="tipoSol">
									Traslado{" "}
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									value="4"
									onChange={(e) => this.setState({tipoSol: e.target.value})}
									name="tipoSol"
									id="tipoSol"
								></input>
								<label className="form-check-label" htmlFor="tipoSol">
									Retiro{" "}
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									value="5"
									onChange={(e) => this.setState({tipoSol: e.target.value})}
									name="tipoSol"
									id="tipoSol"
								></input>
								<label className="form-check-label" htmlFor="tipoSol">
									Renovacion{" "}
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									value="6"
									onChange={(e) => this.setState({tipoSol: e.target.value})}
									name="tipoSol"
									id="tipoSol"
								></input>
								<label className="form-check-label" htmlFor="tipoSol">
									Cambio{" "}
								</label>
							</div>
						</div>
						{/*fin de tipos de solicitud */}
						<div className="form-group">
							<h2>Datos del Solicitante:</h2>
							<hr />
							<div className="form-row">
								<div className="form-group col-md-8">
									<label htmlFor="nomSolicitante">
										Nombre del solicitante o patentado:
									</label>
									<input
										className="form-control"
										type="text"
										value={this.state.nomSolicitante}
										onChange={(e) =>
											this.setState({nomSolicitante: e.target.value})
										}
										name="nomSolicitante"
										id="nomSolicitante"
									/>
								</div>
								{/*----------------CEDULA--------------------- */}
								<div className="form-group col-md-4">
									<label htmlFor="cedulaSolicitante">Cedula: </label>
									<input
										className="form-control"
										type="text"
										value={this.state.cedulaSolicitante}
										onChange={(e) =>
											this.setState({cedulaSolicitante: e.target.value})
										}
										name="cedulaSolicitante"
										id="cedulaSolicitante"
									/>
								</div>
								<br />
							</div>

							<div className="form-row">
								{/*"----------Nombre del representante legal-------------"*/}
								<div className="form-group col-md-8">
									<label htmlFor="represLegalSolicitante">
										En caso de sociedades: Nombre del representante legal
									</label>

									<input
										className="form-control"
										type="text"
										value={this.state.represLegalSolicitante}
										onChange={(e) =>
											this.setState({represLegalSolicitante: e.target.value})
										}
										name="represLegalSolicitante"
										id="represLegalSolicitante"
									/>
								</div>
								{/*"----------CEDULA JURIDICA-------------"*/}
								<div className="form-group col-md-4">
									<label htmlFor="cedulaJuriSolicitante">
										Cedula Juridica:
									</label>

									<input
										className="form-control"
										type="text"
										value={this.state.cedulaJuriSolicitante}
										onChange={(e) =>
											this.setState({cedulaJuriSolicitante: e.target.value})
										}
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
								{/*"----------Telefono------------"*/}
								<div className="form-group col-md-3">
									<label htmlFor="telSolicitante">Telefono:</label>

									<input
										className="form-control"
										type="tel"
										value={this.state.telSolicitante}
										onChange={(e) =>
											this.setState({telSolicitante: e.target.value})
										}
										name="telSolicitante"
										id="telSolicitante"
									/>
								</div>
								{/*"----------Fax------------"*/}
								<div className="form-group col-md-3">
									<label htmlFor="faxSolicitante">Fax:</label>
									<input
										className="form-control"
										type="tel"
										value={this.state.faxSolicitante}
										onChange={(e) =>
											this.setState({faxSolicitante: e.target.value})
										}
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
										value={this.state.correoEleSolicitante}
										onChange={(e) =>
											this.setState({correoEleSolicitante: e.target.value})
										}
										name="correoEleSolicitante"
										id="correoEleSolicitante"
									/>
								</div>
							</div>

							<div className="form-row">
								{/*"----------Dirección-------------"*/}
								<div className="form-group col-md-12">
									<label htmlFor="dirSolicitante">Dirección:</label>

									<input
										className="form-control"
										type="text"
										value={this.state.dirSolicitante}
										onChange={(e) =>
											this.setState({dirSolicitante: e.target.value})
										}
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
									<label htmlFor="nomPropietario">Nombre del propietario</label>
									<input
										className="form-control"
										type="text"
										value={this.state.nomPropietario}
										onChange={(e) =>
											this.setState({nomPropietario: e.target.value})
										}
										name="nomPropietario"
										id="nomPropietario"
									/>
								</div>
								<div className="form-group col-md-6">
									<label htmlFor="represLegalPropietario">
										En caso de sociedades: Nombre del representante legal:
									</label>
									<input
										className="form-control"
										type="text"
										value={this.state.represLegalPropietario}
										onChange={(e) =>
											this.setState({represLegalPropietario: e.target.value})
										}
										name="represLegalPropietario"
										id="nomPrepresLegalPropietarioropietario"
									/>
								</div>
							</div>

							<div className="form-row">
								{/*"----------Cédula jurídica o personal:-------------"*/}
								<div className="form-group col-md-4">
									<label htmlFor="cedulaJuriPropietario">
										Cédula jurídica o personal:
									</label>

									<input
										className="form-control"
										type="text"
										value={this.state.cedulaJuriPropietario}
										onChange={(e) =>
											this.setState({cedulaJuriPropietario: e.target.value})
										}
										name="cedulaJuriPropietario"
										id="cedulaJuriPropietario"
									/>
								</div>
							</div>

							<div className="form-row">
								{/*"----------Dirección Dueño de la propiedad:-------------"*/}
								<div className="form-group col-md-12">
									<label htmlFor="dirPropietario">Dirección:</label>

									<input
										className="form-control"
										type="text"
										value={this.state.dirPropietario}
										onChange={(e) =>
											this.setState({dirPropietario: e.target.value})
										}
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
										value={this.state.nomComercial}
										onChange={(e) =>
											this.setState({nomComercial: e.target.value})
										}
										name="nomComercial"
										id="nomComercial"
									/>
								</div>
								{/*"-----------Actividad específica:------------"*/}
								<div className="form-group col-md-6">
									<label htmlFor="actividad">Actividad específica:</label>
									<input
										className="form-control"
										type="text"
										value={this.state.actividad}
										onChange={(e) => this.setState({actividad: e.target.value})}
										name="actividad"
										id="actividad"
									/>
								</div>
							</div>
						</div>
						{/*fin de datos del local */}
						<div className="form-group">
							<h2>Datos Del Local Retiro</h2>
							<hr />
							<div className="form-row">
								{/*"-----------Direccion Retiro------------"*/}
								<div className="form-group col-md-12">
									<label htmlFor="dirExactaLocal">
										Dirección exacta del local, Distrito, otras señas
									</label>

									<input
										className="form-control"
										type="text"
										value={this.state.dirExactaLocal}
										onChange={(e) =>
											this.setState({dirExactaLocal: e.target.value})
										}
										name="dirExactaLocal"
										id="dirExactaLocal"
									/>
								</div>
								{/*"-----------Numero de Patente comercial Retiro------------"*/}
								<div className="form-group col-md-4">
									<label htmlFor="numPatenteCom">
										Numero de Patente comercial
									</label>
									<input
										className="form-control"
										type="text"
										value={this.state.numPatenteCom}
										onChange={(e) =>
											this.setState({numPatenteCom: e.target.value})
										}
										name="numPatenteCom"
										id="numPatenteCom"
									/>
								</div>
							</div>
						</div>
						{/*fin datos del local retiro */}
						<div className="form-group">
							<h2>Datos Del Local Renovacion</h2>
							<hr />

							<div className="form-row">
								{/*"-----------Numero de Plano catastro------------"*/}
								<div className="form-group col-md-4">
									<label htmlFor="numPlanoCatastro">
										Numero de Plano catastro
									</label>
									<input
										className="form-control"
										type="number"
										placeholder="Ingrese numero"
										value={this.state.numPlanoCatastro}
										onChange={(e) =>
											this.setState({numPlanoCatastro: e.target.value})
										}
										name="numPlanoCatastro"
										id="numPlanoCatastro"
									/>
								</div>
							</div>

							<div className="form-row">
								{/*"-----------Telefono------------"*/}
								<div className="form-group col-md-3">
									<label htmlFor="telLocal">Telefono:</label>
									<input
										className="form-control"
										type="tel"
										value={this.state.telLocal}
										onChange={(e) => this.setState({telLocal: e.target.value})}
										name="telLocal"
										id="telLocal"
									/>
								</div>

								{/*"-----------Fax------------"*/}
								<div className="form-group col-md-3">
									<label htmlFor="faxLocal">Fax:</label>
									<input
										className="form-control"
										type="tel"
										value={this.state.faxLocal}
										onChange={(e) => this.setState({faxLocal: e.target.value})}
										name="faxLocal"
										id="faxLocal"
									/>
								</div>

								{/*"-----------Correo electrónico:------------"*/}
								<div className="form-group col-md-6">
									<label htmlFor="correoEleLocal">Correo electrónico:</label>

									<input
										className="form-control"
										type="email"
										value={this.state.correoEleLocal}
										onChange={(e) =>
											this.setState({correoEleLocal: e.target.value})
										}
										name="correoEleLocal"
										id="correoEleLocal"
									/>
								</div>
							</div>

							<div className="form-row">
								{/*"-----------Telefono------------"*/}
								<div className="form-group col-md-2">
									<label>Estado de la Patente</label>
								</div>
								<div className="form-group col-md-1">
									<input
										type="radio"
										value="1"
										onChange={(e) =>
											this.setState({estadoPaten: e.target.value})
										}
										name="estadoPaten"
										id="estadoPaten"
									/>
									<label htmlFor="estadoPaten">Activa </label>
								</div>

								<div className="form-group col-md-1">
									<input
										type="radio"
										value="0"
										onChange={(e) =>
											this.setState({estadoPaten: e.target.value})
										}
										name="estadoPaten"
										id="estadoPaten"
									/>
									<label htmlFor="estadoPaten">Inactiva </label>
								</div>
							</div>
						</div>
						{/*Fin de datos del local renovacion */}
						<div className="form-group">
							<h2>Declaracion jurada Solicitud nueva</h2>
							<p>Declaro bajo juramento que</p>

							<input
								type="radio"
								value="0"
								onChange={(e) => this.setState({declaraJura: e.target.value})}
								name="declaraJura"
								id="declaraJura"
							/>
							<label>Si utilizare repertorio musical (ACAM)</label>
							<br />

							<input
								type="radio"
								value="1"
								onChange={(e) => this.setState({declaraJura: e.target.value})}
								name="declaraJura"
								id="declaraJura"
							/>
							<label>No utilizare repertorio musical (ACAM)</label>
							<br />
							<p>
								Nosotros, los abajo firmantes de calidades antes mencionadas,
								apercibimos de las penas que se castiga los delitos de falso
								testimonio y perjurio declaramos bajo fe de juramento que la
								información anotada anteriormente en lo que corresponde a cada
								uno, es verdadera (Ley 6683 y Decreto 23485 MP)
							</p>
						</div>
						{/*Fin declaracion jurada Solicitud*/}
						<div className="form-group">
							<h2>Declaracion jurada Retiro</h2>
							<p>
								Yo, el abajo firmante, de calidades antes mencionadas, a
								percibido de las penas con que se castiga los delitos de falso
								testimonio y perjurio, declaro bajo fe de juramento que la
								información que he suministrado es verdadera
							</p>
						</div>
						{/*Fin declaracion jurada Retiro*/}
						<div className="form-group">
							<div>
								<label>Firma del solicitante</label>

								<textarea
									id="w3review"
									name="w3review"
									rows="4"
									cols="50"
								></textarea>
								<br />
							</div>
							<div>
								<label>Cedula solicitante</label>

								<input type="text" />
								<br />
							</div>
							<div>
								<label>Firma del dueño</label>

								<textarea
									id="w3review"
									name="w3review"
									rows="4"
									cols="50"
								></textarea>
								<br />
							</div>
							<div>
								<label>Cedula del dueño</label>

								<input type="text" />
								<br />
							</div>
						</div>
						{/*Fin firmas*/}
						<div className="form-group">
							<h2>Datos de la persona a traspasar</h2>
							<div>
								<label htmlFor="nomTraspaso">
									Nombre de la persona a traspasar
								</label>

								<input
									type="text"
									value={this.state.nomTraspaso}
									onChange={(e) => this.setState({nomTraspaso: e.target.value})}
									name="nomTraspaso"
									id="nomTraspaso"
								/>
								<br />
							</div>
							<div>
								<label htmlFor="nomNegocio">Nombre del Negocio</label>

								<input
									type="text"
									value={this.state.nomNegocio}
									onChange={(e) => this.setState({nomNegocio: e.target.value})}
									name="nomNegocio"
									id="nomNegocio"
								/>
								<br />
							</div>
							<div>
								<label htmlFor="cedulaTraspaso">Cedula</label>

								<input
									type="text"
									value={this.state.cedulaTraspaso}
									onChange={(e) =>
										this.setState({cedulaTraspaso: e.target.value})
									}
									name="cedulaTraspaso"
									id="cedulaTraspaso"
								/>
								<br />
							</div>
							<div>
								<label htmlFor="represLegalTraspaso">
									En caso de sociedades: Nombre del representante legal:
								</label>

								<input
									type="text"
									value={this.state.represLegalTraspaso}
									onChange={(e) =>
										this.setState({represLegalTraspaso: e.target.value})
									}
									name="represLegalTraspaso"
									id="represLegalTraspaso"
								/>
								<br />
							</div>

							<div>
								<label htmlFor="cedulaJuriTraspaso">
									Cédula jurídica o personal:
								</label>

								<input
									type="text"
									value={this.state.cedulaJuriTraspaso}
									onChange={(e) =>
										this.setState({cedulaJuriTraspaso: e.target.value})
									}
									name="cedulaJuriTraspaso"
									id="cedulaJuriTraspaso"
								/>
								<br />
							</div>

							<div>
								<label>Lugar o medio de notificación:</label>
								<br />
							</div>

							<div>
								<label htmlFor="telTraspaso">Telefono:</label>

								<input
									type="tel"
									value={this.state.telTraspaso}
									onChange={(e) => this.setState({telTraspaso: e.target.value})}
									name="telTraspaso"
									id="telTraspaso"
								/>
								<br />
							</div>

							<div>
								<label>Fax:</label>
								<input
									type="tel"
									value={this.state.faxTraspaso}
									onChange={(e) => this.setState({faxTraspaso: e.target.value})}
									name="faxTraspaso"
									id="faxTraspaso"
								/>
								<br />
							</div>

							<div>
								<label htmlFor="dirTraspaso">Dirección:</label>

								<input
									type="text"
									value={this.state.dirTraspaso}
									onChange={(e) => this.setState({dirTraspaso: e.target.value})}
									name="dirTraspaso"
									id="dirTraspaso"
								/>
								<br />
							</div>
							<div>
								<label htmlFor="correoEleTraspaso">Correo electrónico:</label>

								<input
									type="email"
									value={this.state.correoEleTraspaso}
									onChange={(e) =>
										this.setState({correoEleTraspaso: e.target.value})
									}
									name="correoEleTraspaso"
									id="correoEleTraspaso"
								/>
								<br />
							</div>
						</div>{" "}
						{/*Datos de la persona a traspasar*/}
						<div className="form-group">
							<label>Timbre fiscal: </label>

							<textarea
								id="w3review"
								name="w3review"
								rows="4"
								cols="50"
							></textarea>
							<br />
						</div>{" "}
						{/*Timbre traspaso*/}
						<div className="form-group">
							<div>
								<label>Timbre de abogado: </label>

								<textarea
									id="w3review"
									name="w3review"
									rows="4"
									cols="50"
								></textarea>
								<br />
							</div>

							<div>
								<label>Firmas autenticadas por notario Publico:</label>

								<textarea
									id="w3review"
									name="w3review"
									rows="4"
									cols="50"
								></textarea>
								<br />
							</div>

							<div>
								<label>Firma: </label>

								<textarea
									id="w3review"
									name="w3review"
									rows="4"
									cols="50"
								></textarea>
								<br />
							</div>

							<div>
								<label>Sello: </label>

								<textarea
									id="w3review"
									name="w3review"
									rows="4"
									cols="50"
								></textarea>
								<br />
							</div>
						</div>
						{/*Timbre y firma solicitud nueva*/}
						<div className="form-group">
							<label htmlFor="nomAutorizado">Autorizo a: </label>
							<input
								type="text"
								value={this.state.nomAutorizado}
								onChange={(e) => this.setState({nomAutorizado: e.target.value})}
								name="nomAutorizado"
								id="nomAutorizado"
							/>
							<br />
							<label htmlFor="cedAutorizado">cedula </label>

							<input
								type="text"
								value={this.state.cedAutorizado}
								onChange={(e) => this.setState({cedAutorizado: e.target.value})}
								name="cedAutorizado"
								id="cedAutorizado"
							/>
							<br />
							<p>
								Para que presente y retire documentos con respecto a este
								trámite
							</p>
							<div>
								<label>Firma de la persona autorizada</label>
								<br />
								<textarea
									id="w3review"
									name="w3review"
									rows="4"
									cols="50"
								></textarea>
								<br />
							</div>
						</div>
						{/*Fin autorizacion*/}
						<div className="form-group">
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
						<div className="form-group">
							<Button
								variant="primary"
								type="submit"
								onClick={this.onClick}
								value="Enviar"
							>
								Enviar
							</Button>
							<Button
								variant="secondary"
								type="reset"
								onClick={this.onClick}
								value="Limpiar"
							>
								Limpiar
							</Button>
						</div>
					</form>
				</div>
			</div>
		);
	} /*Fin del render*/
}

export default FormPatComUnificado;
