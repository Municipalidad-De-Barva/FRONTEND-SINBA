import React, {Component} from "react";
import inspecOcular from "../../api/inspeccionOcular.api";

export default class Cuadricula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: [],
    };
  }

  componentDidMount() {
    console.log(JSON.stringify({Codigo: localStorage.getItem("SolPatC")}));
    fetch(inspecOcular.RUTA_BASE+"inspector/obtenerImagenes", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({Codigo: localStorage.getItem("SolPatC")}),
    })
      //.then(this.status)
      .then((data) => data.json())
      .then((data) => {
        console.log("MI DATA DATA" + JSON.stringify(data));
        this.setState({docs: data});
      });
    console.log("app mounted METODO 2");
  }

  status(response) {
    if (response && response.status >= 200 && response.status < 300) {
      console.log("rESUELTO");
      return Promise.resolve(response);
    } else {
      return Promise.reject(console.log("Error al conectar al servidor"));
    }
  }

  render() {
    const docs = this.state.docs;
    return (
      <div className="img-grid">
        {docs &&
          docs.map((doc) => (
            //<motion.div className="img-wrap" key={doc.id}
            <div
              className="img-wrap"
              key={doc.URL_Imagen}
              layout
              whileHover={{opacity: 1}}
              s
              //onClick={() => (selectedImg = doc.url)}
            >
              {
                //<motion.img src={doc.url} alt="uploaded pic"
              }
              <div className="col-lg-6 mb-4">
                <img
                  className="w-50"
                  src={inspecOcular.RUTA_IMG + doc.URL_Imagen}
                  alt="uploaded pic"
                  //initial={{opacity: 0}}
                  //animate={{opacity: 1}}
                  //transition={{delay: 1}}
                />
              </div>
              {
                //</motion.div>
              }
            </div>
          ))}
      </div>
    );
  }
}
