import React, {Component} from "react";
const ref = React.createRef();

function mostrarDeclaracionJurada(declaraJura) {
	let description;
	if (declaraJura === "1") {
		description = <strong>SI</strong>;
	} else {
		description = <strong>NO</strong>;
	}

	return (
		<div className="form-group col-md-4">
			<p> {description} utilizare repertorio musical (ACAM)</p>
		</div>
	);
}

export default class RevSolPatCom extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nomSolicitante: "",
			cedulaSolicitante: "",
			represLegalSolicitante: "",
			cedulaJuriSolicitante: "",
			telSolicitante: "",
			faxSolicitante: "",
			dirSolicitante: "",
			correoEleSolicitante: "",
			nomPropietario: "",
			represLegalPropietario: "",
			cedulaJuriPropietario: "",
			dirPropietario: "",
			declaraJura: "",
			nomComercial: "",
			actividad: "",
			nomAutorizado: "",
			cedAutorizado: "",

			//------------
			codigoSolicitud: "0",
			notInfoForm: "0",
			insCCSS: "0",
			insFODESAF: "0",
			exonePoliRiesgo: "0",
			declJura: "0",
			timbFisc: "0",
			impuMunic: "0",
		};
		this.onClick = this.handleClick.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(e) {
		const {value, name} = e.target;
		console.log(value, name);

		if (document.getElementById("notInfoForm").checked === true) {
			document.getElementById("notInfoForm").value = 0;
		} else {
			document.getElementById("notInfoForm").value = 1;
		}
		if (document.getElementById("insCCSS").checked === true) {
			document.getElementById("insCCSS").value = 0;
		} else {
			document.getElementById("insCCSS").value = 1;
		}
		if (document.getElementById("insFODESAF").checked === true) {
			document.getElementById("insFODESAF").value = 0;
		} else {
			document.getElementById("insFODESAF").value = 1;
		}
		if (document.getElementById("exonePoliRiesgo").checked === true) {
			document.getElementById("exonePoliRiesgo").value = 0;
		} else {
			document.getElementById("exonePoliRiesgo").value = 1;
		}
		if (document.getElementById("declJura").checked === true) {
			document.getElementById("declJura").value = 0;
		} else {
			document.getElementById("declJura").value = 1;
		}
		if (document.getElementById("timbFisc").checked === true) {
			document.getElementById("timbFisc").value = 0;
		} else {
			document.getElementById("timbFisc").value = 1;
		}
		if (document.getElementById("impuMunic").checked === true) {
			document.getElementById("impuMunic").value = 0;
		} else {
			document.getElementById("impuMunic").value = 1;
		}

		this.setState({
			[name]: value,
		});
	}
	handleClick() {
		console.log("Datos revision de formulario", this.state);
		var sta = {};
		sta.codigoSolicitud=this.state.codigoSolicitud;
		sta.notInfoForm=this.state.notInfoForm;
		sta.insCCSS=this.state.insCCSS;
		sta.insFODESAF=this.state.insFODESAF;
		sta.exonePoliRiesgo=this.state.exonePoliRiesgo;
		sta.declJura=this.state.declJura;
		sta.timbFisc=this.state.timbFisc;
		sta.impuMunic=this.state.impuMunic;
		fetch("http://localhost:3001/api/revision", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				/*'Access-Control-Allow-Headers': '*',
				"Access-Control-Allow-Origin": "*",
      			"Access-Control-Allow-Credentials": "true",
      			"Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT"*/
			},
			
			body: JSON.stringify(sta),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("respuesta del servidor en revSolPatCom: ", data);
			});
	}

	componentDidMount() {
		const {id} = this.props;
		this.solicitarDatosporCodigo(id);
	}

	solicitarDatosporCodigo(cod) {
		fetch("http://localhost:3001/api/EspForm/selected", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				/*'Access-Control-Allow-Headers': '*',
				"Access-Control-Allow-Origin": "*",
      			"Access-Control-Allow-Credentials": "true",
      			"Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT"*/
			},
			body: JSON.stringify({codigo: cod}),
		})
			.then((res) => res.json())
			.then((data) => {
				//console.log("imprimiendo datos ", data[0]);
				//this.setState({datos: data[0]});
				this.getDatos(data[0]);
			});
	}
	toggleChange = () => {
		this.setState({
			isChecked: !this.state.isChecked,
		});
	};

	getDatos(datos) {
		this.setState({
			nomSolicitante: datos.Nombre,
		});
		this.setState({
			cedulaSolicitante: datos.FK_ID_Contribuyente,
		});

		this.setState({
			represLegalSolicitante: datos.Nombre_Representante_Legal_Contribuyente,
		});

		this.setState({
			cedulaJuriSolicitante: datos.Cedula_Representante_Legal_Contribuyente,
		});

		this.setState({
			telSolicitante: datos.Telefono,
		});

		this.setState({
			faxSolicitante: datos.Fax,
		});

		this.setState({
			dirSolicitante: datos.Direccion,
		});

		this.setState({
			correoEleSolicitante: datos.Correo,
		});

		this.setState({
			nomPropietario: datos.Nombre_Propetario,
		});
		this.setState({
			represLegalPropietario: datos.Nombre_Representante_Legal_Propietario,
		});
		this.setState({
			cedulaJuriPropietario: datos.Cedula_Propetario,
		});

		this.setState({
			dirPropietario: datos.Direccion_Propietario,
		});

		this.setState({
			declaraJura: datos.Declaracion_Jurada,
		});

		this.setState({
			nomComercial: datos.Nombre_Comercial_Negocio,
		});
		this.setState({
			actividad: datos.Actividad,
		});

		this.setState({
			nomAutorizado: datos.Nombre_Persona_Autorizada,
		});

		this.setState({
			cedAutorizado: datos.ID_Persona_Autorizada,
		});

		this.setState({
			codigoSolicitud: datos.PK_Codigo,
		});

		console.log(datos);
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
			declaraJura,
			nomComercial,
			actividad,
			nomAutorizado,
			cedAutorizado,
		} = this.state;

		return (
			<>
				<div className="container" ref={ref}>
					<br />
					<br />
					<div className="row">
						<div className="col-sm-12 col-sm-offset-0">
							<div className="card">
								<div className=" card-header form-group text-center">
									<h1>
										<strong>Revisión Patente Comercial Nueva.</strong>
									</h1>
								</div>
								<div className="card-body">
									<div className="form-row">
										<div className="form-group col-md-2">
											<a href="https://munibarva.go.cr/">
												<img
													src="logo192.png"
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
													disabled
													className="form-control"
													type="text"
													value={nomSolicitante}
													name="nomSolicitante"
													id="nomSolicitante"
												/>
											</div>
											{/*----------------Cédula--------------------- */}
											<div className="form-group col-md-4">
												<label htmlFor="cedulaSolicitante">Cédula: </label>
												<input
													disabled
													className="form-control"
													type="text"
													value={cedulaSolicitante}
													maxLength="11"
													name="cedulaSolicitante"
													id="cedulaSolicitante"
												/>
											</div>
										</div>

										<div className="form-row">
											{/*"----------Nombre del representante legal-------------"*/}
											<div className="form-group col-md-8">
												<label htmlFor="represLegalSolicitante">
													En caso de sociedades: Nombre del representante legal
												</label>

												<input
													disabled
													className="form-control"
													type="text"
													value={represLegalSolicitante}
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
													disabled
													className="form-control"
													type="text"
													value={cedulaJuriSolicitante}
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
													disabled
													className="form-control"
													type="tel"
													value={telSolicitante}
													name="telSolicitante"
													id="telSolicitante"
												/>
											</div>
											{/*"----------Fax------------"*/}
											<div className="form-group col-md-3">
												<label htmlFor="faxSolicitante">Fax:</label>
												<input
													disabled
													className="form-control"
													type="tel"
													value={faxSolicitante}
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
													disabled
													className="form-control"
													type="email"
													value={correoEleSolicitante}
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
													disabled
													className="form-control"
													type="text"
													value={dirSolicitante}
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
													disabled
													className="form-control"
													type="text"
													value={nomPropietario}
													name="nomPropietario"
													id="nomPropietario"
												/>
											</div>
											<div className="form-group col-md-6">
												<label htmlFor="represLegalPropietario">
													En caso de sociedades: Nombre del representante legal:
												</label>
												<input
													disabled
													className="form-control"
													type="text"
													value={represLegalPropietario}
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
													disabled
													className="form-control"
													type="text"
													value={cedulaJuriPropietario}
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
													disabled
													className="form-control"
													type="text"
													value={dirPropietario}
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
													disabled
													className="form-control"
													type="text"
													value={nomComercial}
													name="nomComercial"
													id="nomComercial"
												/>
											</div>
											{/*"-----------Actividad específica:------------"*/}
											<div className="form-group col-md-6">
												<label htmlFor="actividad">Actividad específica:</label>
												<input
													disabled
													className="form-control"
													type="text"
													value={actividad}
													name="actividad"
													id="actividad"
												/>
											</div>
										</div>
									</div>
									{/*fin de datos del local */}
									<div className="form-group">
										<h2>Declaración jurada Solicitud nueva</h2>
										<hr />
										<div className="form-row">
											{mostrarDeclaracionJurada(declaraJura)}
										</div>

										<div className="alert alert-warning" role="alert">
											<p className="mb-0 text-center">
												Declaro bajo juramento que: Nosotros, los abajo
												firmantes de calidades antes mencionadas, apercibimos de
												las penas que se castiga los delitos de falso testimonio
												y perjurio declaramos bajo fe de juramento que la
												información anotada anteriormente en lo que corresponde
												a cada uno, es verdadera.
											</p>
										</div>
									</div>
									{/*Fin Declaración jurada Solicitud*/}
									<div className="form-group">
										<div className="form-row">
											<div className="form-group col-md-8">
												<label htmlFor="nomAutorizado">Autorizo a: </label>
												<input
													disabled
													className="form-control"
													type="text"
													value={nomAutorizado}
													name="nomAutorizado"
													id="nomAutorizado"
												/>
											</div>
											<div className="form-group col-md-4">
												<label htmlFor="cedAutorizado">Cédula </label>

												<input
													disabled
													className="form-control"
													type="text"
													value={cedAutorizado}
													name="cedAutorizado"
													id="cedAutorizado"
												/>
											</div>
										</div>
										<br />
									</div>
									{/*Fin autorizacion*/}
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
						<div className="form-group">
							<h2>Revisión de formulario</h2>
						</div>
						<div>
							<br />
						</div>
						<div className="custom-control custom-switch">
							<input
								type="checkbox"
								className="custom-control-input"
								name="notInfoForm"
								id="notInfoForm"
								checked={this.state.isChecked}
								onChange={this.handleInputChange}
							/>
							<label
								style={{font: 16}}
								className="custom-control-label"
								htmlFor="notInfoForm"
							>
								Formulario completo
							</label>
						</div>
						<div>
							<br />
						</div>
						<div className="custom-control custom-switch">
							<input
								type="checkbox"
								className="custom-control-input"
								name="insCCSS"
								id="insCCSS"
								checked={this.state.isChecked}
								onChange={this.handleInputChange}
							/>
							<label className="custom-control-label" htmlFor="insCCSS">
								Inscrito y al día con la CCSS
							</label>
						</div>
						<div>
							<br />
						</div>
						<div className="custom-control custom-switch">
							<input
								type="checkbox"
								className="custom-control-input"
								name="insFODESAF"
								id="insFODESAF"
								checked={this.state.isChecked}
								onChange={this.handleInputChange}
							/>
							<label className="custom-control-label" htmlFor="insFODESAF">
								Inscrito y al día en FODESAF
							</label>
						</div>
						<div>
							<br />
						</div>
						<div className="custom-control custom-switch">
							<input
								type="checkbox"
								className="custom-control-input"
								name="exonePoliRiesgo"
								id="exonePoliRiesgo"
								checked={this.state.isChecked}
								onChange={this.handleInputChange}
							/>
							<label className="custom-control-label" htmlFor="exonePoliRiesgo">
								Tener la exoneracion y la poliza de riesgo al dia
							</label>
						</div>
						<div>
							<br />
						</div>
						<div className="custom-control custom-switch">
							<input
								type="checkbox"
								className="custom-control-input"
								name="timbFisc"
								id="timbFisc"
								checked={this.state.isChecked}
								onChange={this.handleInputChange}
							/>
							<label className="custom-control-label" htmlFor="timbFisc">
								Timbre fiscal
							</label>
						</div>
						<div>
							<br />
						</div>
						<div className="custom-control custom-switch">
							<input
								type="checkbox"
								className="custom-control-input"
								name="declJura"
								id="declJura"
								checked={this.state.isChecked}
								onChange={this.handleInputChange}
							/>
							<label className="custom-control-label" htmlFor="declJura">
								Documentación ACAM
							</label>
						</div>
						<div>
							<br />
						</div>
						<div className="custom-control custom-switch">
							<input
								type="checkbox"
								className="custom-control-input"
								name="impuMunic"
								id="impuMunic"
								checked={this.state.isChecked}
								onChange={this.handleInputChange}
							/>
							<label className="custom-control-label" htmlFor="impuMunic">
								Impuestos municipales
							</label>
						</div>

						<br />
						<br />
					</div>
					<div className="form-group col-md-4">
						<a href="./PageListSolPatNueva">
							<button
								type="submit"
								onClick={this.onClick}
								className="btn btn-primary text-center"
							>
								Guardar
							</button>
						</a>
					</div>
				</div>
			</>
		);
	}
}
