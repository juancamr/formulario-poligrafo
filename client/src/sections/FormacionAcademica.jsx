import React, { useState } from "react";
import "./Sections.css";

function FormacionAcademica() {
  const [estudios, setEstudios] = useState([
    {
      centro: "UTP",
      especialidad: "Ing Software",
      situacion: "En curso",
    },
  ]);
  return (
    <div className="carousel-item">
      <h1 className="mb-2">Formaci&oacute;n acad&eacute;mica</h1>
      <p className="mb-4">
        Indique los 3 &uacute;ltimos estudios realizados o que cursa
        actualmente.
      </p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Centro de estudios</th>
            <th scope="col">Especialidad</th>
            <th scope="col">Situaci&oacute;n</th>
          </tr>
        </thead>
        <tbody>
          {estudios.length <= 3 &&
            estudios.map((estudio) => {
              return (
                <tr>
                  <td>{estudio.centro}</td>
                  <td>{estudio.especialidad.slice(0, 12)}</td>
                  <td>{estudio.situacion}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {estudios.length < 3 && (
        <button className="btn btn-outline-dark">hgregar estudio +</button>
      )}
    </div>
  );
}

export default FormacionAcademica;
