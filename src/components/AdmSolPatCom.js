import React, {Component} from "react";
import "@fortawesome/fontawesome-free";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import PatInspec from "./Inspeccion/PatInspec";
//import "./BodyIndex.css";
export default class AdmSolPatCom extends Component {
  render() {
    return (
      <div>
        <Header />

        <Body />

        <Footer />
      </div>
    );
  }
}

class Body extends Component {
  noEsAdmin() {
    //console.log(localStorage.getItem("type"));
    return localStorage.getItem("type") === "3";
    //1 y 2 hacen lo mismo por el momento
  }
  render() {
    return (
      <div className="container mt-5">
        <section className="text-center">
          <h3 className="font-weight-bold mb-5">
            Página administración de patentes
          </h3>

          <div className="row">
            {!this.noEsAdmin() ? (
              <>
                <div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
                  <div className="card hoverable">
                    <a href="./NuevoAdm">
                      <img
                        className="card-img-top"
                        src="https://images.pexels.com/photos/7354/startup-photos.jpg?auto=compress&cs=tinysrgb&h=750&w=1260"
                        alt=""
                      />

                      <div className="card-body">
                        <p className="card-title text-muted text-uppercase font-small mt-1 mb-3">
                          Crear usuario nuevo
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-md-0 mb-4">
                  <div className="card hoverable">
                    <a href="./PageListSolPatNueva">
                      <img
                        className="card-img-top"
                        src="https://images.pexels.com/photos/19043/pexels-photo.jpg?cs=srgb&dl=pexels-skitterphoto-19043.jpg&fm=jpg"
                        alt=""
                      />
                      <div className="card-body">
                        <p className="card-title text-muted text-uppercase font-small mt-1 mb-3">
                          Revisión Solicitud de Patentes
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
                  <div className="card hoverable">
                    <a href="./PatInspecR">
                      <img
                        className="card-img-top"
                        src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                      />
                      <div className="card-body">
                        <p className="card-title text-muted text-uppercase font-small mt-1 mb-3">
                          Ver Inspección Realizada
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
                  <div className="card hoverable">
                    <a href="./PageRecupCont">
                      <img
                        className="card-img-top"
                        src="https://images.pexels.com/photos/163142/glasses-notebook-wooden-business-163142.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                        alt=""
                      />
                      <div className="card-body">
                        <p className="card-title text-muted text-uppercase font-small mt-1 mb-3">
                          Recuperación de contrseña
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/*
                <div className="col-lg-0 col-md-12">
                  <PatInspec/>
                </div>*/}
                <div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
                  <div className="card hoverable">
                    <a href="./PatInspec">
                      {/*<a href="./PatInspec FormInspecc"></a>*/}
                      <img
                        className="card-img-top"
                        src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                      />
                      <div className="card-body">
                        <p className="card-title text-muted text-uppercase font-small mt-1 mb-3">
                          Pendientes de Inspección
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    );
  }
}
