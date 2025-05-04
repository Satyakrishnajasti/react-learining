import React, { useState } from "react";

export interface Car {
  year: number;
  make: string;
  model: string;
}

function ListCars() {
  const [car, addCar] = useState<Car[]>([]);
  const [carYear, setYear] = useState<number>(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, serCarModel] = useState("");

  function handelAddCar(): void {
    console.log(carYear);
    addCar([...car, { year: carYear, make: carMake, model: carModel }]);
  }

  function handelRemoveCar(index: number): void {
    addCar(car.filter((_, i) => index !== i));
  }

  function handelYearChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setYear(+(event.target as HTMLInputElement).value);
  }

  function handelMakeChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setCarMake((event.target as HTMLInputElement).value);
  }

  function handelModelChange(event: React.ChangeEvent<HTMLInputElement>): void {
    serCarModel((event.target as HTMLInputElement).value);
  }

  return (
    <div>
      <h2>List of Cars</h2>

      <div>
        <input
          type="number"
          value={carYear}
          onChange={(event) => handelYearChange(event)}
          placeholder="Enter car year"
        />
      </div>
      <div>
        <input
          type="text"
          value={carMake}
          onChange={(event) => handelMakeChange(event)}
          placeholder="Enter car maker"
        />
      </div>
      <div>
        <input
          type="text"
          value={carModel}
          onChange={(e) => handelModelChange(e)}
          placeholder="Enter model change"
        />
      </div>

      <button onClick={handelAddCar}>Add Car</button>

      <ul>
        {car.map((element, index) => (
          <li key={index} onClick={() => handelRemoveCar(index)}>
            {element.year} {element.model} {element.make}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListCars;
