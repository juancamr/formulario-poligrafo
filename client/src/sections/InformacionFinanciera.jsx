import React, { useState } from "react";
import InputRadio from "./components/InputRadio";
import TextArea from "./components/TextArea";
import InputText from "./components/InputTextSimple";

function InformacionFinanciera() {
  const [isShow, setIsShow] = useState(false);
  const arraySiNo = [
    ["si", "fa-solid fa-check"],
    ["no", "fa-solid fa-xmark"],
  ];
  const arrayPresupuestos = [
    ["Vivienda", "vivienda"],
    ["Servicios", "servicios"],
    ["Alimentacion", "alimentacion"],
    ["Educacion", "educacion"],
    ["Otros", "otros"],
  ];

  return (
    <div id="financiera" className="carousel-item active">
      <h1>Informaci&oacute;n Financiera</h1>
      <div className="row mb-3">
        <div className="col-8 d-flex align-items-center">
          <p className="mb-0">¿Tiene pr&eacute;stamos?</p>
        </div>
        <div className="col-4">
          <div className="row">
            {arraySiNo.map(([value, icon]) => {
              return (
                <div className="col-4">
                  <InputRadio
                    handleShow={() =>
                      value === "si" ? setIsShow(true) : setIsShow(false)
                    }
                    value={value}
                    id={`${value}prestamos`}
                    icon={icon}
                    name="prestamos"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {isShow && (
        <TextArea
          placeholder="Indique el monto y entidad"
          name="explicacion_financiera"
        />
      )}
      <div className="row mt-3">
        <div className="col-8">
          <p className="mb-0">¿Actualmente recibe otro ingreso?</p>
        </div>
        <div className="col-4">
          <div className="row">
            {arraySiNo.map(([value, icon]) => {
              return (
                <div className="col-4">
                  <InputRadio
                    value={value}
                    id={`${value}ingreso`}
                    icon={icon}
                    name="ingreso"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="row mt-3 mb-3">
        <div className="col-8">
          <p className="mb-0">
            ¿Cu&aacute;l es tu presupuesto mensual de gastos?
          </p>
        </div>
        <div className="col-4">
          <InputText placeholder="S/." name="prespuesto" />
        </div>
      </div>
      <p>Por favor, describa el gasto de cada secci&oacute;n:</p>
      <div className="row">
        {arrayPresupuestos.map(([content, name]) => (
          <div className="col-4 mb-3">
            <InputText placeholder={content} name={name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default InformacionFinanciera;
