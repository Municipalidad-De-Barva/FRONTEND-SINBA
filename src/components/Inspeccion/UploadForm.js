import React, {useState} from "react";
//import ProgressBar from './ProgressBar';
//import useStorage from './useStorage';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error1, setError1] = useState(null);
  //const { progress, error } = useStorage(file);

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    const types = ["image/png", "image/jpeg"];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError1("");
      /////////////////////////////////////////////////////////////
      let progress = 0;
      let error = null;
      fetch(`https://api.chucknorris.io/jokes/random`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
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
      /////
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
  return (
    <div>
      <input type="file" onChange={changeHandler} />
      <div className="output">
        {error1 && <div className="error">{error1}</div>}
        {file && <div>{file.name}</div>}
        {/*file && <UseStorage file={file}/>*/}
        {file && <img href={file} />}
      </div>
    </div>
  );
};

export default UploadForm;
