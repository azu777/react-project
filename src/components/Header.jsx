import logo from '../assets/pisa.avif';

export default function Header() {
  const current = new Date();
  return (
    <header>
      <img src={logo} alt="Resut" sizes="20x2"/>
      <h3>Univercity of Pisa</h3>

      <span data-testid="current-time"> Current time: { current.toLocaleTimeString() }</span>
    </header>
  );
}
