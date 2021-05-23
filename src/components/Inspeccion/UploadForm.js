import React, {useState} from "react";
import apiInspOcular from "../../api/inspeccionOcular.api";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error1, setError1] = useState(null);
  //const [send, setSend] = useState(false);
  //const { progress, error } = useStorage(file);

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    const types = ["image/png", "image/jpeg"];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError1(null);
    } else {
      setFile(null);
      setError1("Debe escoger una imagen!");
    }
    console.log(selected);
  };
  //--------------------------
  function status(response) {
    if (response && response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(setError1("Error al conectar al servidor"));
    }
  }
  function json(response) {
    return response.json();
  }
  function enviar() {
    if (!error1) {
      /////////////////////////////////////////////////////////////
      let progress = 0;
      let error = null;
      const formData = new FormData();
      formData.append("Codigo", localStorage.getItem("paraImg"));
      formData.append("userpic", file, file.name);
      //`https://api.chucknorris.io/jokes/random`;
      fetch(apiInspOcular.RUTA_INSERTAR_IMAGEN, {
        method: "POST",
        body: formData,
      })
        .catch((err) => {
          error = err;
          console.log("No conecta: " + err);
        })
        .then(status)
        .then(json)
        .then((data) => {
          console.log("Data---- " + JSON.stringify(data));
          if (data) {
            progress = 100;
            //setError1(JSON.stringify(data));
            console.log("Valor: " + data.value);
          }
        });
      if (progress == 0) {
        console.log("esperando");
      }
      console.log("suo");
    }
  }
  function cann() {
    //setSend(false);
    setFile(null);
    setError1("Cancelado");
  }
  return (
    <div>
      <input type="file" onChange={changeHandler} />
      <hr />
      <div>
        {error1 && <div className="error">{error1}</div>}
        {file && <div>{file.name}</div>}
        {/*file && <UseStorage file={file}/>*/}
        {file && <img href={file} />}
        <button id="send" className="btn btn-primary" onClick={enviar}>
          Enviar
        </button>
        <button id="cancelar" className="btn btn-secondary" onClick={cann}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default UploadForm;
