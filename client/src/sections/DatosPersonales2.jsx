import React from "react";
import InputText from "./components/InputText";
import InputSelect from "./components/InputSelect";

function DatosPersonales2() {
  return (
    <div className="carousel-item">
      <h1>Datos Personales</h1>
      <div className="row">
        <InputSelect
          titulo="Estado civil"
          options={[
            ["Soltero", "soltero"],
            ["Casado", "casado"],
            ["Viudo", "viudo"],
            ["Divorciado", "divorciado"],
            ["Casado", "casado"]
          ]}
        />
        <InputText placeholder="Distrito" name="distrito" />
        <InputText placeholder="Direcci&oacute;n" name="direccion" lg="true"/>
        <InputSelect titulo="La casa donde vives es" options={[
          ["Propia", "propia"],
          ["Alquilada", "alquilada"],
          ["Padres", "padres"],
          ["Familiar", "familiar"],
          ["Otros", "otros"]
        ]} />
        <InputText placeholder="Tel&eacute;fono" name="telefono" />
        <InputText placeholder="Correo" name="correo" />
        <InputText placeholder="Brevete" name="brevete" />
      </div>
    </div>
  );
}

export default DatosPersonales2;
