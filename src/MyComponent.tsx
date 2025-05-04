import React, { useState } from "react";

function MyComponent() {
  const country = ["India", "USA"];
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [slectCountry, setCountry] = useState("India");
  const [shipping, setShipping] = useState("");
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
  const [cars, setCars] = useState<string[]>([]);
  const [Car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  const updateName = () => {
    setName(name);
  };

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setName(event.target.value);
  }

  const updateAge = () => {
    setAge(age + 1);
  };

  const ListItems = country.map((fruit) => (
    <option value={fruit}>{fruit}</option>
  ));

  function changeCountry(event: React.ChangeEvent<HTMLSelectElement>): void {
    setCountry(event.target.value);
  }

  function changeShipping(event: React.ChangeEvent<HTMLInputElement>): void {
    setShipping(event.target.value);
  }

  function changeYear(event: React.ChangeEvent<HTMLInputElement>): void {
    setCar({ ...Car, year: +event.target.value });
  }

  function handleAddFood(): void {
    const newFood = (document.getElementById("foodInput") as HTMLInputElement)
      .value;
    setFoods([...foods, newFood]);
  }

  function handelRemoveFood(index: number) {
    setFoods(foods.filter((_, i) => index !== i));
  }

  function addCars(): void {
    const addCar = (document.getElementById("addCars") as HTMLInputElement)
      .value;
    setCars((card) => [...card, addCar]);
  }
  return (
    <div>
      <h2>List Of Food</h2>
      <ul>
        {foods.map((fruit, index) => (
          <li key={index} onClick={() => handelRemoveFood(index)}>
            {fruit}
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Enter Food name" id="foodInput" />
      <button onClick={handleAddFood}>Add</button>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <p>Age: {age}</p>
      <button onClick={updateAge}>Set Age</button>

      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={handleNameChange}
      />
      <p>{slectCountry}</p>
      <select value={slectCountry} onChange={changeCountry}>
        {ListItems}
      </select>

      <label>
        <input
          type="radio"
          value="India"
          checked={shipping === "India"}
          onChange={changeShipping}
        />
        India
      </label>

      <label>
        <input
          type="radio"
          value="USA"
          checked={shipping === "USA"}
          onChange={changeShipping}
        />
        USA
      </label>

      <p>Country: {shipping}</p>

      <div>
        <p>
          Your favorite car is: {Car.year} {Car.make} {Car.model}
        </p>
        <input type="number" value={Car.year} onChange={changeYear} />
      </div>

      <div>{cars}</div>
      <input type="text" onChange={addCars} id="addCars" />
    </div>
  );
}

export default MyComponent;
