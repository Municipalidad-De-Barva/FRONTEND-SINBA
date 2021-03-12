import React, {Component} from "react";
import "@fortawesome/fontawesome-free";

export default class ModalRegistrar extends Component {
  render() {
    if (this.props.error === "ok") {
      return (
        <div className="modal" tabIndex="-1" id="modalMessageRegister">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Usuario Nuevo Registrado</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>{this.props.name}</p>
              </div>
              <div className="modal-footer">
                <a href="./NuevoAdm">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Registrar un nuevo usuario
                  </button>
                </a>
                <a href="./AdmSolPatCom">
                  <button type="button" className="btn btn-primary">
                    Ir a la pagina principal
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="modal" tabIndex="-1" id="modalMessageRegister">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Problemas con Usuario Nuevo</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>{this.props.error}</p>
              </div>
              <div className="modal-footer">
                <a href="./NuevoAdm">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Intentar el registro de nuevo
                  </button>
                </a>
                <a href="./AdmSolPatCom">
                  <button type="button" className="btn btn-primary">
                    Ir a la pagina principal
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
