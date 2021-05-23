import React, {Component} from "react";
import "@fortawesome/fontawesome-free";
import Header from "./Header/header";
import Footer from "./Footer/footer";

export default class PageRecupCont extends Component {
  render() {
    return (
      <div>
        <Header />

        <PageList />

        <Footer />
      </div>
    );
  }
}

class PageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //viene de contribuyente
      user: "",
      pass: "",
    };
    this.onClick = this.handleClick.bind(this);
    //this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    fetch("http://localhost:3001/api/auth/signin", {
      //ruta cambio contra
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("respuesta del servidor: ", data);
        console.log(localStorage.getItem("token"));
        console.log(localStorage.getItem("auth"));
        if (data.auth) {
          window.location.href = "./AdmSolPatCom";
        }
        if (data.error === "ambos nulos") {
          console.log("Entro al error ambos nulos");
          document.getElementById("user").style.borderColor = "red";
          document.getElementById("pass").style.borderColor = "red";
        }
        if (data.error === "usuario nulo") {
          console.log("Entro al error usuario nulo");
          document.getElementById("user").style.borderColor = "red";
          document.getElementById("pass").style.borderColor = "gray";
        }
        if (data.error === "pass nulo") {
          console.log("Entro al error pass nulo");
          document.getElementById("user").style.borderColor = "gray";
          document.getElementById("pass").style.borderColor = "red";
        }

        if (data.error === "Datos erroneos") {
          console.log("Entro al error Datos erroneos");
          alert("Datos erroneos");
        }
      });
  }

  render() {
    const {user, pass} = this.state;
    return (
      <>
        <div className="row">
          <div className="col-sm-12 col-sm-offset-0">
            <div className="card">
              <div className=" card-header form-group text-center">
                <h1>
                  <strong>Ingrese datos de usuario a cambiar contraseña</strong>
                </h1>
              </div>
              <div className="card-body">
                <div className="form-group col-md-10">
                  <h7>
                    <div className="form-group col-md-4">
                      <label htmlFor="FK_Solicitud_Patente">
                        Usuario: {user}
                      </label>
                    </div>
                  </h7>
                  <h7>
                    <div className="form-group col-md-4">
                      <label htmlFor="FK_Solicitud_Patente">
                        contraseña: {pass}
                      </label>
                    </div>
                  </h7>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group col-md-4">
          <a href="./PatInspecR">
            <button className="btn btn-primary text-center">Volver</button>
          </a>
        </div>
      </>
    );
  }
}
