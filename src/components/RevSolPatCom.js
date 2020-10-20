import React, {Component} from "react";
const ref = React.createRef();

export default class PDFgenerator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notInfoForm: "",
			insCCSS: "",
			insFODESAF: "",
			exoPoliRie: "",
			declJura: "",
			timbFisc: "",
			impuMunic: "",
			selecTo: "",
		};
	}
	toggleChange = () => {
		this.setState({
			isChecked: !this.state.isChecked,
		});
	};

	handleClick() {
		console.log(
			"Preparando datos para enviar al servidor, mostrar datos:",
			this.props
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
			body: JSON.stringify(this.props),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("respuesta del servidor: ", data);
			});
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
		} = this.props;

		return (
			<>
				<div className="container" ref={ref}>
					<br />
					<br />
					<table className="tabRev">
						<tr>
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
															En caso de sociedades: Nombre del representante
															legal
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
															En caso de sociedades: Nombre del representante
															legal:
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
														<label htmlFor="actividad">
															Actividad específica:
														</label>
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
													<div className="form-group col-md-1">
														<input
															disabled
															type="radio"
															value="1"
															name="declaraJura"
															id="declaraJura"
														/>
														<label> Si </label>
													</div>
													<div className="form-group col-md-1">
														<input
															disabled
															type="radio"
															value="0"
															name="declaraJura"
															id="declaraJura"
														/>
														<label> No </label>
													</div>
													<p>utilizare repertorio musical (ACAM)</p>
												</div>

												<div className="alert alert-warning" role="alert">
													<p className="mb-0 text-center">
														Declaro bajo juramento que: Nosotros, los abajo
														firmantes de calidades antes mencionadas,
														apercibimos de las penas que se castiga los delitos
														de falso testimonio y perjurio declaramos bajo fe de
														juramento que la información anotada anteriormente
														en lo que corresponde a cada uno, es verdadera (Ley
														6683 y Decreto 23485 MP)
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
						</tr>
						<tr>
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
							<table className="Requisitos">
								<tr>
									<td>
										<input
											type="checkbox"
											value="1"
											name="selecTo"
											id="selecTo"
											checked={this.state.isChecked}
											//onChange={this.toggleChange}
										/>
									</td>
									<td>
										<label htmlFor="selecTo">Seleccionar todo </label>
									</td>
								</tr>
								<div>
									<br />
								</div>
								<tr>
									<td>
										<input
											type="checkbox"
											value="1"
											name="notInfoForm"
											id="notInfoForm"
											checked={this.state.isChecked}
										/>
									</td>
									<td>
										<label htmlFor="notInfoForm">Formulario completo </label>
									</td>
								</tr>
								<tr>
									<td>
										<input
											value="1"
											name="insCCSS"
											id="insCCSS"
											type="checkbox"
											checked={this.state.isChecked}
										/>
									</td>
									<td>
										<label htmlFor="insCCSS">
											Inscrito y al día con la CCSS
										</label>
									</td>
								</tr>
								<tr>
									<td>
										<input
											value="1"
											name="insFODESAF"
											id="insFODESAF"
											type="checkbox"
											checked={this.state.isChecked}
										/>
									</td>
									<td>
										<label htmlFor="insFODESAF">
											Inscrito y al día en FODESAF
										</label>
									</td>
								</tr>
								<tr>
									<td>
										<input
											value="1"
											name="exoPoliRie"
											id="exoPoliRie"
											type="checkbox"
											checked={this.state.isChecked}
										/>
									</td>
									<td>
										<label htmlFor="exoPoliRie">
											Tener la exoneracion y la poliza de riesgo al dia
										</label>
									</td>
								</tr>
								<tr>
									<td>
										<input
											value="1"
											name="timbFisc"
											id="timbFisc"
											type="checkbox"
											checked={this.state.isChecked}
										/>
									</td>
									<td>
										<label htmlFor="timbFisc">Timbre fiscal</label>
									</td>
								</tr>
								<tr>
									<td>
										<input
											value="1"
											name="declJura"
											id="declJura"
											type="checkbox"
											checked={this.state.isChecked}
										/>
									</td>
									<td>
										<label htmlFor="declJura">Declaracion jurada firmada</label>
									</td>
								</tr>
								<tr>
									<td>
										<input
											value="1"
											name="impuMunic"
											id="impuMunic"
											type="checkbox"
											checked={this.state.isChecked}
										/>
									</td>
									<td>
										<label htmlFor="declJura">Impuestos municipales</label>
									</td>
								</tr>
								<div>
									<br />
									<br />
								</div>
							</table>
						</tr>
					</table>
				</div>
				<div className="form-group col-md-4">
					<button
						type="submit"
						onClick={this.onClick}
						className="btn btn-primary text-center"
					>
						Guardar
					</button>
				</div>
			</>
		);
	}
}
