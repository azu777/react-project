import { useEffect, useState } from "react";
import logo from "../../assets/react.svg";
// import "./Header.css";
import { styled } from "styled-components";

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`;

export default function Header() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <HeaderContainer>
      <img src={logo} alt="Resut" width={50} height={50} />
      <h3 className="centered">University of Pisa</h3>

      <span data-testid="current-time"> {now.toLocaleTimeString()}</span>
    </HeaderContainer>
  );
}
