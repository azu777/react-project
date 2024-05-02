import classes from "./Button.module.css";

console.log(classes)

export default function Button({ children, onClick, isActive }) {
  return (
    <button
      className={isActive ? `${classes.button} ${classes.active}` : classes.button}
      data-test={children}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
