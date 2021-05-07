import React, {Component} from "react";
import "@fortawesome/fontawesome-free";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import FormAproInspe from "./FormAproInspe";
export default class PatInspecR extends Component {
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
    fetch("http://localhost:3001/api/allNForms/terminados", { //ruta de BRYAN que carga oculares
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({todos: data});
      });
    //console.log("respuesta del servidor: ", this.state.todos);
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-6" key={i}>
          <div className="card mt-4">
            <div className="card-header text-center">
              <h3>N° {todo.PK_Codigo}</h3>
            </div>
            <div className="card-title text-center">
              <span className="badge badge-pill badge-info ml-2">
                {todo.Estado}
              </span>
            </div>
            <div className="card-body">
              <p>
                <strong>Nombre Del Local: </strong>
                {todo.Nombre_Comercial_Negocio}
              </p>
            </div>
            <div className="card-footer text-center">
              <a href={`?id=${todo.PK_Codigo}`}>
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
      return <FormAproInspe id={url.searchParams.get("id")} />;
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
