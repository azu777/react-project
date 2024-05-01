import "./Button.css";

export default function Button({ children, onClick, isActive }) {
  return (
    <button
      className={isActive ? "button active" : "button"}
      data-test={children}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
