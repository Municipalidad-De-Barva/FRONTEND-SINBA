export default class validaciones {
  constructor() {}
  validarTelefono(valor, a) {
    let telefono = /^\d{8}$/;
    let regex = new RegExp(telefono);
    let doc = document.getElementById(a);

    if (regex.test(valor)) {
      console.log(" telefono valido", a);
      doc.style.borderColor = "";
    } else {
      console.log(" telefono invalido");
      doc.style.borderColor = "red";
    }
  }

  validarCorreo(valor, a) {
    let correo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    let regex = new RegExp(correo);
    let doc = document.getElementById(a);

    if (regex.test(valor)) {
      console.log(" correo valido", a);
      doc.style.borderColor = "";
    } else {
      console.log(" correo invalido");
      doc.style.borderColor = "red";
    }
  }

  validarTexto(valor, a) {
    let texto = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    // "^[a-zA-Z/s]+$";
    let regex = new RegExp(texto);
    let doc = document.getElementById(a);

    if (regex.test(valor)) {
      console.log(" texto valido", a);
      doc.style.borderColor = "";
    } else {
      console.log(" texto invalido");
      doc.style.borderColor = "red";
    }
  }

  validarCedula(valor, name) {
    var expresion = /^[0-9,A]-?\d{4}-?\d{4}$/;
    let regex = new RegExp(expresion);
    let doc = document.getElementById(name);
    if (regex.test(valor)) {
      console.log(" cedula valido");
      doc.style.borderColor = "";
    } else {
      console.log(" cedula invalido");
      doc.style.borderColor = "red";
    }
  }

  /*
  validarCedula(valor) {
    var expresion = /^[0-9,A]-?\d{4}-?\d{4}$/;
    let regex = new RegExp(expresion);
    return regex.test(valor);
  }
  */

  validarCedulaJuridica(valor, a) {
    var expresion = /^[0-9]-?\d{3}-?\d{6}$/;
    let regex = new RegExp(expresion);
    let doc = document.getElementById(a);
    if (regex.test(valor)) {
      console.log(" cedula valido");
      doc.style.borderColor = "";
    } else {
      console.log(" cedula invalido");
      doc.style.borderColor = "red";
    }
  }
}
