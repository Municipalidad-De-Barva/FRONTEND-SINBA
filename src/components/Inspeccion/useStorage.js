//import { useState, useEffect } from 'react';
import React,{ useState } from 'react';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  //const [url, setUrl] = useState(null);

  //useEffect(() => {


    /*
    fetch(`http://localhost:3001/api/gallery/${file.name}`, {
      method: "POST",
      headers: {
        //Accept: "application/json",
        //"Content-Type": "application/json"
        "Content-Type": "multipart/form-data"
      },
      //body: JSON.stringify(this.state),
      body:{file}
    })*/
    /*const fetchJ=async()=>{
      const data = await */
      fetch(`https://api.chucknorris.io/jokes/random`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      }
    })
    .catch(err=>{
        setError(err);
        console.log("No conecta: "+err);
    })
    .then((res)=>
      //console.log("Data1---- "+JSON.stringify(res));
      res.json()
    )
    .then((data)=>{
      console.log("Data---- "+JSON.stringify(data));
        if(data==200){
            setProgress(100);
            console.log("Envio completo");
        }else{
            if(data){
              setProgress(100);
                setError(data);
                console.log("Error: "+data.value);
            } 
        }
        })
    //}
    
  /*}, [file]);*/
  if(progress==0){ 
    console.log("esperando"); 
    //return <div> Loading.... </div>
  }
  console.log("suo");// return <div>Done</div>
  //return { progress, error };
  return  progress;
}

export default useStorage;