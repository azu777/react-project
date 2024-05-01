import { useState } from "react";
import logo from "../assets/react.svg";

export default function Header() {
  const [now, setNow] = useState(new Date());

  setInterval(() => setNow(new Date()), 1000);

  return (
    <header>
      <img src={logo} alt="Resut" width={50} height={50} />
      <h3>University of Pisa</h3>

      <span data-testid="current-time">
        {" "}
        Current time: {now.toLocaleTimeString()}
      </span>
    </header>
  );
}
