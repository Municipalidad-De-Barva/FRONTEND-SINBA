import React, {Component} from "react";
import "@fortawesome/fontawesome-free";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <div className="text-center">
            <img
              src="./assets/images/logoHeader.png"
              alt="Municipalidad de Barva"
              height="64px"
              width="256x"
            />
          </div>

          <nav className="mb-1 navbar navbar-expand-lg navbar-dark bg-dark">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent-3"
              aria-controls="navbarSupportedContent-3"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent-3"
            >
              {/*start menu */}
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a
                    className="nav-link waves-effect waves-light"
                    href="./"
                  >
                    <span className="sr-only">(current)</span>Inicio
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link waves-effect waves-light"
                    href="https://munibarva.go.cr/tramites-en-linea/"
                  >
                    <span className="sr-only">(current)</span>Municipalidad
                  </a>
                </li>
              </ul>
              {/* end menu */}
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
