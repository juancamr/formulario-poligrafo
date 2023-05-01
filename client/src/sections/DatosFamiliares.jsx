import React, { useState } from "react";
import "./Sections.css";

function DatosFamiliares() {
  const [familiares, setFamiliares] = useState([
    {
      nombre: "Juan Carlos",
      edad: 21,
    },
    {
      nombre: "Angelina",
      edad: 15,
    }
  ]);

  return (
    <div id="familiares" className="carousel-item">
      <div className="modal fade" id="familiarModal" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content"></div>
        </div>
      </div>
      <h1 className="mb-2">Datos Familiares</h1>
      <p className="mb-4">Por favor, registre a su familiar</p>
      <div className="row">
        {familiares.map((familiar) => {
          return (
            <div className="col-3">
              <div className="card">
                <i class="fa-solid fa-user"></i>
                <p>{familiar.nombre.split(' ')[0].slice(0, 10)}</p>
              </div>
            </div>
          );
        })}
        <div className="col-3">
          <button
            data-bs-toggle="modal"
            data-bs-target="familiarModal"
            className="btn btn-outline-dark"
          >
            <i class="fa-solid fa-user-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DatosFamiliares;
