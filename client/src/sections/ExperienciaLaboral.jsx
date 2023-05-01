import React, { useState } from "react";
import InputRadio from "./components/InputRadio";
import $ from 'jquery'
import TextArea from "./components/TextArea";

function ExperienciaLaboral() {
  const [isShow, setIsShow] = useState(false);

  function handleShow(value) {
    value === "si" && setIsShow(true);
    // document.getElementById('explicacion_experiencia').focus();
  }

  const arraySiNo = [
    ["si", "fa-solid fa-check"],
    ["no", "fa-solid fa-xmark"],
  ];
  const [trabajos, setTrabajos] = useState([
    {
      empresa: "Tiims",
      cargo: "Programador",
      salida: "aun",
    },
    {
      empresa: "Tiims",
      cargo: "Programador",
      salida: "aun",
    },
  ]);

  return (
    <div id="experiencia" className="carousel-item">
      <h1 className="mb-2">Experiencia Laboral</h1>
      <p className="mb-3">
        Indique los 3 &uacute;ltimos empleos, empezando por el m&aacute;s
        reciente.
      </p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Empresa</th>
            <th scope="col">Cargo</th>
            <th scope="col">Salida</th>
          </tr>
        </thead>
        <tbody>
          {trabajos.length <= 3 &&
            trabajos.map((estudio) => {
              return (
                <tr>
                  <td>{estudio.empresa}</td>
                  <td>{estudio.cargo}</td>
                  <td>{estudio.salida}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {trabajos.length < 3 && (
        <button className="btn btn-outline-dark">Agregar experiencia +</button>
      )}
      <div className="row mt-4 mb-3">
        <div className="col-6">
          <p className="mb-2">¿Recibi&oacute; amonestaciones escritas?</p>
          <div className="row">
            {arraySiNo.map(([value, icon]) => {
              return (
                <div className="col-3">
                  <InputRadio
                    handleShow={() => handleShow(value)}
                    value={value}
                    id={`${value}amon`}
                    icon={icon}
                    name="amonestaciones"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-6">
          <p className="mb-2">¿Le han solicitado su carta de renuncia?</p>
          <div className="row">
            {arraySiNo.map(([value, icon]) => {
              return (
                <div className="col-3">
                  <InputRadio
                    handleShow={() => handleShow(value)}
                    value={value}
                    id={`${value}ren`}
                    icon={icon}
                    name="renuncia"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {isShow && (
        <TextArea
          placeholder="Por favor, explique"
          name="explicacion_experiencia"
        />
      )}
    </div>
  );
}

export default ExperienciaLaboral;
