function Button() {
  //   const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>
  //     (e.currentTarget.textContent = "Welcome");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    (e.currentTarget.style.display = "none");

  return <button onDoubleClick={(e) => handleClick(e)}>Click me</button>;
}

export default Button;
