import React from "react";
import InputText from "./components/InputText";
import InputDate from "./components/inputDate";
import InputRadio from "./components/InputRadio";
import InputSelect from "./components/InputSelect";

export default function () {
  return (
    <div className="carousel-item active">
      <h1>Datos personales</h1>
      <div className="row">
        <InputText placeholder="Nombres" name="nombres" />
        <InputText placeholder="Apellidos" name="apellidos" />
        <InputText placeholder="Razon Social" name="razon_social" />
        <InputText placeholder="Cargo" name="cargo" />
        <InputDate placeholder="Nacimiento" name="fecha_nacimiento" />
        <InputText placeholder="Lugar de nacimiento" name="lugar_nacimiento" />
        <InputText placeholder="Nacionalidad" name="nacionalidad" />
        <div className="col-6">
          <div className="row">
            <div className="col-3">
              <InputRadio
                name="gender"
                id="masculino"
                value="masculino"
                icon="fa-solid fa-person"
              />
            </div>
            <div className="col-3">
              <InputRadio
                name="gender"
                id="femenino"
                value="femenino"
                icon="fa-solid fa-female"
              />
            </div>
            <div className="col-3">
              <InputRadio
                name="gender"
                id="otro"
                value="otro"
                icon="fa-solid fa-mars-double"
              />
            </div>
          </div>
        </div>
        <InputSelect
          titulo="Tipo de documento"
          name="tipo_documento"
          options={[
            ["DNI", "dni"],
            ["Pasaporte", "pasaporte"],
            ["Carnet Extranjeria", "carnet"],
          ]}
        />
        <InputText placeholder="Nro documento" name="nro_documento" />
      </div>
    </div>
  );
}
