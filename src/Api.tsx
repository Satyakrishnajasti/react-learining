import { useEffect, useState } from "react";

function API() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
    return () => {
      ///cleanup code
    };
  }, [count, color]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  function addCount(): void {
    setCount(count + 1);
  }

  function subTract(): void {
    setCount(count - 1);
  }

  function changeColor(): void {
    setColor((e) => (e === "green" ? "red" : "green"));
  }

  return (
    <div>
      {data.map((element) => (
        <p>{element.id}</p>
      ))}
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subTract}>Subtract</button>
      <br />

      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default API;
