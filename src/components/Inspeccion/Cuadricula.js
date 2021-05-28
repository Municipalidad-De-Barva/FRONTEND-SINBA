
import React, { Component } from 'react';

export default class Cuadricula extends Component {
      constructor(props) {
          super(props);
          this.state = {
              docs: [],
          };
      }

      componentDidMount() {
          console.log(JSON.stringify({Codigo: 23}));
          fetch('http://localhost:3001/api/inspector/obtenerImagenes', {
          method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({Codigo: 23}),
    })
                //.then(this.status)
              .then(data => data.json())
              .then((data) =>{
                console.log("MI DATA DATA"+JSON.stringify(data));
                 this.setState({ docs: data });
                });
      console.log('app mounted METODO 2');
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
      {docs && docs.map((doc) => (
          //<motion.div className="img-wrap" key={doc.id}
          <div
            className="img-wrap"
            key={doc.URL_Imagen}
            layout
            whileHover={{opacity: 1}}
            s
            //onClick={() => (selectedImg = doc.url)}
          >
            {//<motion.img src={doc.url} alt="uploaded pic"
            }
            <div className="col-lg-6 mb-4">
            <img
              className="w-100"
              src={"http://localhost:3001/"+doc.URL_Imagen}
              alt="uploaded pic"
              //initial={{opacity: 0}}
              //animate={{opacity: 1}}
              //transition={{delay: 1}}
            />
            </div>
            {//</motion.div>
            }
          </div>
        ))}
    </div>
          );
      }
  }

//-------------------------------------------------------------------------
/*
import React from "react";
//import { motion } from 'framer-motion';

const Cuadricula = ({selectedImg}) => {
  const {docs} = fetch("http://localhost:3001/api/inspector/obtenerImagenes", {
    method: "POST",
    headers: {
      //  mode: 'no-cors',
      //"Content-Type": "application/json",
    },
    body:JSON.stringify({Codigo: 23})
  })
    .then(status)
    .then((data) => data.json())
    .then((data) => this.setState({docs: data}, () => console.log(data)));

  function status(response) {
    if (response && response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(console.log("Error al conectar al servidor"));
    }
  }

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          //<motion.div className="img-wrap" key={doc.id}
          <div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{opacity: 1}}
            s
            onClick={() => (selectedImg = doc.url)}
          >
            {//<motion.img src={doc.url} alt="uploaded pic"
            }
            <img
              src={doc.url}
              alt="uploaded pic"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 1}}
            />
            {//</motion.div>
            }
          </div>
        ))}
    </div>
  );
};*/

//export default Cuadricula;
