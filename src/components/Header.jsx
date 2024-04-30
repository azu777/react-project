import logo from '/vite.svg';

export default function Header() {
  const current = new Date();
  return (
    <header>
      <img src={logo} alt="Resut" />
      {/* <h3>My Header</h3> */}

      <span data-testid="current-time">Current time: { current.toLocaleTimeString() }</span>
    </header>
  );
}
