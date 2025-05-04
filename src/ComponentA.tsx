import { createContext, useState } from "react";
import ComponentB from "./ComponentB";

export const UserContent = createContext("");

function ComponentA() {
  const [user] = useState<string>("BroCode");
  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContent.Provider value={user}>
        <ComponentB />
      </UserContent.Provider>
    </div>
  );
}

export default ComponentA;
