import React, {Component} from "react";

export default class ModalDatosAdjunto extends Component {
	render() {
		return (
			<div>
				<Modal />
			</div>
		);
	}
}
class Modal extends Component {
	render() {
		return (
			<div>
				<button
					type="button"
					class="btn btn-primary"
					data-toggle="modal"
					data-target="#exampleModal"
				>
					ver documentos Adjuntos
				</button>
				<div
					class="modal fade"
					id="exampleModal"
					tabindex="1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title text-center">
									DEBE ADJUNTAR PARA TRAMITAR PATENTE:
								</h5>
								<button
									type="button"
									class="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body justify">
								<p>
									Formulario de Declaración Jurada de solicitud. Debe venir
									firmado por los interesados en el trámite (solicitante de la
									patente y dueño de la propiedad, si estos fueran diferentes) y
									todas las firmas deberán estar autenticadas por un abogado lo
									más exacta posible y que coincida con el permiso de salud y el
									uso del suelo, teléfono, fax, correo electrónico y lugar para
									recibir notificaciones. Puede ser solicitado en Plataforma de
									Servicios y debe venir con sello y firma.
								</p>

								<p>
									Fotocopia del Contrato del INS, y del recibo cancelado o la
									constancia de exoneración de la misma y los originales a
									efectos de confrontarlos (ley No. 6727 de riesgo del Trabajo
									en su Art. 202). Puede aportar solo las copias debidamente
									certificadas por un abogado. La actividad que indica este
									contrato debe estar acorde con lo anotado en el formulario de
									solicitud y la dirección debe coincidir con la dirección
									mostrada en el uso de suelo y el escritorio.
								</p>

								<p>
									En caso de que la propiedad donde se va a desarrollar la
									actividad no sea propiedad del dueño del negocio se debe
									aportar el Contrato de Arrendamiento (se omite este requisito
									si el dueño de la propiedad firma la solicitud) suscrito entre
									el solicitante de la licencia y el dueño de la propiedad (que
									debe estar inscrito obligatoriamente como tal en la
									Municipalidad), en el caso de sociedades, el contrato deberá
									estar suscrito con el representante legal en representación de
									la sociedad. La actividad que se va a desarrollar debe estar
									acorde con lo permitido en el contrato y esté debidamente
									autenticado por un abogado.
								</p>

								<p>Aprobación del Uso del Suelo.</p>

								<p>
									Permiso de Funcionamiento del Ministerio de Salud - Setena o
									SENASA.
								</p>

								<p>
									Nota Importante: Cuando se deje de ejercer la actividad, es
									obligación del patentado solicitar por escrito ante la
									Municipalidad de Barva el retiro de la patente respectiva,
									caso contrario se le seguirá cobrando el impuesto establecido.
								</p>

								<p>
									NOTA: Es obligación del solicitante indicar número de fax o
									dirección exacta para notificaciones, de lo contrario ACEPTARÁ
									que el lugar de notificaciones sea las oficinas centrales de
									la Municipalidad de Barva por lo cual será su responsabilidad
									estar en contacto con esta.
								</p>

								<p></p>

								<p>
									Todos nuestros trámites y servicios son Totalmente Gratuitos.
								</p>

								<p>
									Constancia de la C.C.S.S. de estar al día con sus
									obligaciones.
								</p>

								<p>Estar al día con Fodesaf.</p>

								<p>Fotocopia de Cédula de Identidad.</p>

								<p>
									Si es una sociedad aportar certificación de Personería
									Jurídica. Si es extranjero presentar copia de Cédula de
									Residencia debidamente certificada y al día a efecto de
									verificar la condición del solicitante.
								</p>
							</div>
							<div class="modal-footer">
								<button
									type="button"
									class="btn btn-secondary"
									data-dismiss="modal"
								>
									Cerrar
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
