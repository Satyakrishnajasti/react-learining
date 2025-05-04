import styles from "./Button.module.css";

function Button1() {
  return <button className={styles.button}>Click Me</button>;
}

function Button2() {
  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return <button style={styles}>Click Me</button>;
}

export default Button2;
