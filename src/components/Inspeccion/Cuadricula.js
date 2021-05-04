/*
import React, { Component } from 'react';

  class Cuadricula extends Component {
      constructor() {
          super();
          this.state = {
              name: 'React',
              awsApiData: [],
          };
      }

      componentDidMount() {
          console.log('app mounted');
          fetch('https://robohash.p.rapidapi.com/index.php', {
          method: "GET",
        headers: {
          //  mode: 'no-cors',
        //"Content-Type": "application/json",
        },
    })
                .then(this.status)
              .then(data => data.json())
              .then(data => this.setState({ awsApiData: data }, () => console.log(data)));
      }

    status(response) {
        if (response && response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(console.log("Error al conectar al servidor"));
        }
    }

      render() {
          const data = this.state.awsApiData;
          return (
              <div className="main-content container">
           {(data && data.home) &&
              <div><h2>{data.home[0].title}</h2><br /><p>{data.home[0].body}</p>
              <img src={data.home[0].image} alt="image"></img>
              </div>
          }    
      </div>
          );
      }
  }
  export default Cuadricula;*/


  //-------------------------------------------------------------------------
import React from 'react';
//import { motion } from 'framer-motion';

const Cuadricula = ({ selectedImg }) => {
  const { docs } = fetch('https://robohash.p.rapidapi.com/index.php', {
          method: "GET",
        headers: {
          //  mode: 'no-cors',
        //"Content-Type": "application/json",
        },
    })
                .then(status)
              .then(data => data.json())
              .then(data => this.setState({ docs: data }, () => console.log(data)));

    function status(response) {
        if (response && response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(console.log("Error al conectar al servidor"));
        }
    }

  return (
    <div className="img-grid">
      {docs && docs.map(doc => (
        //<motion.div className="img-wrap" key={doc.id} 
        <div className="img-wrap" key={doc.id} 
          layout
          whileHover={{ opacity: 1 }}s
          onClick={() => selectedImg=doc.url}
        >
          {/*<motion.img src={doc.url} alt="uploaded pic"*/}
          <img src={doc.url} alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
         {/*</motion.div>*/}
        </div>
      ))}
    </div>
  )
}

export default Cuadricula;