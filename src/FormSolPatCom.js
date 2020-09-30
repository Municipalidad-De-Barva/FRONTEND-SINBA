import React, {Component} from "react";

export default class FormSolPatCom extends Component {
	constructor(props) {
		super(props);
		this.state = {
			/*Tipo de solicitud
			tipoSol: "",*/

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

			/*datos del local retiro
			dirExactaLocal: "",
			numPatenteCom: "",*/

			/*datos del local renovacion 
			numPlanoCatastro: "",
			telLocal: "",
			faxLocal: "",
			estadoPaten: "",
			correoEleLocal: "",*/

			/*Declaración jurada */
			declaraJura: "",

			/*Informacion del traspaso
			nomTraspaso: "",
			nomNegocio: "",
			cedulaTraspaso: "",
			represLegalTraspaso: "",
			cedulaJuriTraspaso: "",
			telTraspaso: "",
			faxTraspaso: "",
			dirTraspaso: "",
			correoEleTraspaso: "",*/

			/*Autorizo a*/
			nomAutorizado: "",
			cedAutorizado: "",
		};
		this.onClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		console.log(this.state);
		//prueba();
		//var msg=JSON.stringify({"msg":'oa'});
		//var msg={"msg":'oa'};
		fetch("http://localhost:3001/api/nuevoForm", {
			//method: "GET",
			//body: msg,
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
				console.log(data);

				//console.log(JSON.stringify(msg));
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
						<div className="form-group text-center">
							<h1>
								<strong>Formulario Patente Comercial Unificado.</strong>
							</h1>
						</div>

						<div className="form-row">
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
							</div>
							<div className="form-group col-md-2">
								<img
									src="logo192.png"
									className="rounded mx-auto d-block"
									height="100px"
									width="100px"
									alt="logoMuniBarva"
								></img>
							</div>
						</div>

						<div className="form-group">
							<div className="form-group text-center">
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
										value={this.state.nomSolicitante}
										placeholder="Ingrese su nombre completo"
										pattern="[A-Za-z]"
										onChange={(e) =>
											this.setState({nomSolicitante: e.target.value})
										}
										name="nomSolicitante"
										id="nomSolicitante"
										validators={["required"]}
										errormessages={["El campo es requerido"]}
										required
									/>
								</div>
								{/*----------------Cédula--------------------- */}
								<div className="form-group col-md-4">
									<label htmlFor="cedulaSolicitante">Cédula: </label>
									<input
										className="form-control"
										type="text"
										value={this.state.cedulaSolicitante}
										placeholder="Ingrese Número  de Cédula"
										onChange={(e) =>
											this.setState({cedulaSolicitante: e.target.value})
										}
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
								{/*"----------Cédula Jurídica-------------"*/}
								<div className="form-group col-md-4">
									<label htmlFor="cedulaJuriSolicitante">
										Cédula Jurídica:
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
								{/*"----------Teléfono------------"*/}
								<div className="form-group col-md-3">
									<label htmlFor="telSolicitante">Teléfono:</label>

									<input
										className="form-control"
										type="tel"
										value={this.state.telSolicitante}
										onChange={(e) =>
											this.setState({telSolicitante: e.target.value})
										}
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
										required
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
										required
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
										required
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
								<div className="form-group col-md-3">
									<p>Declaro bajo juramento que:</p>
								</div>

								<div className="form-group col-md-1">
									<input
										type="radio"
										value="1"
										onChange={(e) =>
											this.setState({declaraJura: e.target.value})
										}
										name="declaraJura"
										id="declaraJura"
									/>
									<label>Si </label>
								</div>
								<div className="form-group col-md-1">
									<input
										type="radio"
										value="0"
										onChange={(e) =>
											this.setState({declaraJura: e.target.value})
										}
										name="declaraJura"
										id="declaraJura"
									/>
									<label>No</label>
								</div>
								<p>utilizare repertorio musical (ACAM)</p>
							</div>

							<div className="alert alert-warning" role="alert">
								<p className="mb-0 text-center">
									Nosotros, los abajo firmantes de calidades antes mencionadas,
									apercibimos de las penas que se castiga los delitos de falso
									testimonio y perjurio declaramos bajo fe de juramento que la
									información anotada anteriormente en lo que corresponde a cada
									uno, es verdadera (Ley 6683 y Decreto 23485 MP)
								</p>
							</div>
						</div>
						{/*Fin Declaración jurada Solicitud*/}
						<div className="form-group">
							<br />
							<div className="form-row">
								<div className="form-group col-md-6">
									<label>
										Firma del solicitante: __________________________________
									</label>
								</div>
								<div className="form-group col-md-6">
									<label>
										Cédula solicitante: __________________________________
									</label>
								</div>
							</div>
							<br />
							<div className="form-row">
								<div className="form-group col-md-6">
									<label>
										Firma del dueño: ______________________________________
									</label>
									<hr />
								</div>
								<div className="form-group col-md-6">
									<label>
										Cédula del dueño: __________________________________
									</label>
								</div>
							</div>
						</div>
						{/*Fin firmas*/}
						<div className="form-group">
							<div className="form-row">
								<div className="form-group text-center col-md-6 ">
									<label className="text-center">Timbre fiscal: </label>
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
									<label htmlFor="nomAutorizado">Autorizo a: </label>
									<input
										className="form-control"
										type="text"
										value={this.state.nomAutorizado}
										onChange={(e) =>
											this.setState({nomAutorizado: e.target.value})
										}
										name="nomAutorizado"
										id="nomAutorizado"
									/>
								</div>
								<div className="form-group col-md-4">
									<label htmlFor="cedAutorizado">Cédula </label>

									<input
										className="form-control"
										type="text"
										value={this.state.cedAutorizado}
										onChange={(e) =>
											this.setState({cedAutorizado: e.target.value})
										}
										name="cedAutorizado"
										id="cedAutorizado"
									/>
								</div>
							</div>

							<p>
								Para que presente y retire documentos con respecto a este
								trámite
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
						<div className="form-group">
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
						{/*Gestiones al día Nueva, traspaso, traslado*/}

						<div className="justify-content-center form-group">
							<div className="form-row">
								<div className="form-group col-md-2 text-center">
									<button
										className="btn btn-primary text-center"
										type="submit"
										onClick={this.onClick}
										value="Enviar"
									>
										Enviar
									</button>
								</div>
								<div className="form-group col-md-2 text-center">
									<button
										type="reset"
										className="btn btn-danger text-center"
										onClick={this.onClick}
										value="Cancelar"
									>
										Cancelar
									</button>
								</div>
								<div className="form-group col-md-2 text-center">
									<button
										type="button"
										className="btn btn-info text-center"
										onClick={this.onClick}
										value="Imprimir"
									>
										Imprimir
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	} /*Fin del render*/
}
