import React from "react";
import ReactDOM from "react-dom";

import {BrowserRouter as Router, Route} from "react-router-dom";
import "./index.css";

import * as serviceWorker from "./serviceWorker";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import FormSolPatCom from "./components/FormPatentesNuevas/FormSolPatCom";
import Body from "./views";
import Login from "./components/Login";
import AdmSolPatCom from "./components/AdmSolPatCom";
import NuevoAdm from "./components/RegistroAdministrativo/NuevoAdm";
import PageListSolPatNueva from "./components/PageAdmin/PageListSolPatNueva";
import PageListSolPatNuevaPendiente from "./components/PageAdmin/PageListSolPatNuevaPendiente";
import PageListSolPatNuevaAprobadas from "./components/PageAdmin/PageListSolPatNuevaAprobadas";
import PageListSolPatNuevaRechazadas from "./components/PageAdmin/PageListSolPatNuevaRechazadas";
import RevSolPatCom from "./components/RevSolPatCom";
import ActaPostInspe from "./components/Inspeccion/ActaPostInspe";
import FormInspecc from "./components/Inspeccion/FormInspecc";
import PatInspec from "./components/Inspeccion/PatInspec";
import PatInspecR from "./components/Inspeccion/PatInspecR";
import FormAproInspe from "./components/Inspeccion/FormAproInspe";
import PageContactUser from "./components/Users/PageContactUser";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route
        exact
        path="/"
        render={() => {
          return <Body />;
        }}
      ></Route>
      <Route
        path="/FormSolPatCom"
        render={() => {
          return <FormSolPatCom />;
        }}
      ></Route>
      <Route
        path="/Login"
        render={() => {
          return <Login />;
        }}
      ></Route>
      <Route
        path="/AdmSolPatCom"
        render={() => {
          return <AdmSolPatCom />;
        }}
      ></Route>
      <Route
        path="/NuevoAdm"
        render={() => {
          return <NuevoAdm />;
        }}
      ></Route>
      <Route
        path="/PageListSolPatNueva"
        render={() => {
          return <PageListSolPatNueva />;
        }}
      ></Route>
      <Route
        path="/PageListSolPatNuevaPendiente"
        render={() => {
          return <PageListSolPatNuevaPendiente />;
        }}
      ></Route>
      <Route
        path="/PageListSolPatNuevaAprobadas"
        render={() => {
          return <PageListSolPatNuevaAprobadas />;
        }}
      ></Route>
      <Route
        path="/PageListSolPatNuevaRechazadas"
        render={() => {
          return <PageListSolPatNuevaRechazadas />;
        }}
      ></Route>
      <Route
        path="/RevSolPatCom"
        render={() => {
          return <RevSolPatCom />;
        }}
      ></Route>
      <Route
        path="/ActaPostInspe"
        render={() => {
          return <ActaPostInspe />;
        }}
      ></Route>
      <Route
        path="/FormInspecc"
        render={() => {
          return <FormInspecc />;
        }}
      ></Route>
      <Route
        path="/PatInspec"
        render={() => {
          return <PatInspec />;
        }}
      ></Route>
      <Route
        path="/PatInspecR"
        render={() => {
          return <PatInspecR />;
        }}
      ></Route>
      <Route
        path="/FormAproInspe"
        render={() => {
          return <FormAproInspe />;
        }}
      ></Route>
      <Route
        path="/PageContactUser"
        render={() => {
          return <PageContactUser />;
        }}
      ></Route>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
/*script*/
