import React, { useContext, useState } from "react";
import { Calculator } from "../context/Calc";
import { Button } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';

function Form() {
  const [height, setHeigth] = useState(180);
  const [weigth, setWeigth] = useState(70);

  const { calculate } = useContext(Calculator);
  const calc = calculate(height, weigth);

  return (
    
    <div class="justify-content-center">
      <h1 class="display-3" align="center">Calcula tu IMC</h1>
      <hr></hr>
        <Badge pill bg="secondary">
        Altura : {height} cm
      </Badge>
      <input
        type="range"
        class="form-range"
        min="100"
        max="200"
        step="1"
        id="customRange3"
        onChange={(e) => setHeigth(e.target.value)}
        value={height}
      />
      <Badge pill bg="secondary">
        Peso : {weigth} kg
      </Badge>

      <input
        type="range"
        class="form-range"
        min="40"
        max="120"
        step="1"
        id="customRange3"
        onChange={(e) => setWeigth(e.target.value)}
        value={weigth}
      />

      <hr></hr>
    <div align="center">
      <Button variant = {
        (calc>=18.50) && (calc<=24.99)? "success":"danger"}
      
      size ="md" className="mb-4" > Indice de masa corporal: {calc}</Button>
      </div>
    </div>
  );
}

export default Form;
