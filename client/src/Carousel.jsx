import React from "react";
import $ from "jquery";
import "./Carousel.css";
import DatosPersonales from "./sections/DatosPersonales";
import DatosPersonales2 from "./sections/DatosPersonales2";
import DatosFamiliares from "./sections/DatosFamiliares";
import FormacionAcademica from "./sections/FormacionAcademica";
import ExperienciaLaboral from "./sections/ExperienciaLaboral";
import InformacionFinanciera from "./sections/InformacionFinanciera";

export default function () {
  return (
    <div id="carousel" className="carousel slide">
      <div className="carousel-inner">
        <DatosPersonales />
        <DatosPersonales2 />
        <DatosFamiliares />
        <FormacionAcademica />
        <ExperienciaLaboral />
        <InformacionFinanciera />
      </div>
      <div className="navigation-container d-flex">
        <button
          className="btn btn-outline-dark"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="prev"
        >
          Volver
        </button>
        <button
          className="btn btn-dark ms-auto"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
