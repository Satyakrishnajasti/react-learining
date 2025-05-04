import { useContext } from "react";
import { UserContent } from "./ComponentA";

function ComponentD() {
  const value = useContext(UserContent);
  return (
    <div className="box">
      <h2>ComponentD</h2>
      <h1>{value}</h1>
    </div>
  );
}

export default ComponentD;
