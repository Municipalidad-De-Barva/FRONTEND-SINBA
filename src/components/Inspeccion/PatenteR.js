import React, {Component} from "react";
import "@fortawesome/fontawesome-free";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import PatenteRevision from "./PatenteRevision";
export default class PatenteR extends Component {
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
  constructor() {
    super();
    this.state = {
      todos: [],
      idSolicitud: "",
    };

    this.pedirFormularios();
  }

  pedirFormularios() {
    fetch("http://localhost:3001/api/inspOcular/listarInspeccionesOculares", {
      //ruta de BRYAN que carga patentes
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(this.status)
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0]);
        this.setState({todos: data});
      });
    //console.log("respuesta del servidor: ", this.state.todos);
  }
  status(response) {
    if (response && response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(alert("Error al conectar al servidor"));
    }
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-6" key={i}>
          <div className="card mt-4">
            <div className="card-header text-center">
              <h3>N° {todo.Numero_Patente}</h3>
            </div>
            {/*
            <div className="card-title text-center">
              <span className="badge badge-pill badge-info ml-2">
                {todo.Estado}
              </span>
            </div>*/}
            <div className="card-body">
              <p>
                <strong>Nombre Del Local: </strong>
                {todo.Local}
              </p>
            </div>
            <div className="card-footer text-center">
              <a href={`?id=${todo.Numero_Patente}`}>
                <button className="btn btn-success">Revisar</button>
              </a>
            </div>
          </div>
        </div>
      );
    });

    const url = new URL(document.location);
    const hasId = url.searchParams.has("id");

    if (hasId) {
      return <PatenteRevision id={url.searchParams.get("id")} />;
    }
    return (
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-md-7">
            <div className="row">{todos}</div>
          </div>
        </div>
      </div>
    );
  }
}