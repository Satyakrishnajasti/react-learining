import { useEffect, useRef, useState } from "react";

function Ref() {
  const [number, setNumber] = useState(0);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const ref = useRef(0);

  useEffect(() => {
    console.log(number);
  });

  function handleClick(): void {
    setNumber(number + 1);
    ref.current++;

    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.style.backgroundColor = "red";
    }

    console.log(ref.current);
  }
  return (
    <div>
      <p>{number}</p>
      <button onClick={handleClick}>Increment</button>
      <input ref={inputRef} />
    </div>
  );
}

export default Ref;
