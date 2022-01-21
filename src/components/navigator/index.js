import { useState, useEffect } from "react";
import {
  Nav,
  NavLink,
  BtnLink,
  MobileIcon,
  NavMenu,
} from "./index.style";
import { Turn as Hamburger } from "hamburger-react";
import logoTip from "../../assets/icons/logo.svg"

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div>
      <Nav>
        <NavLink to="/">
          <img src={logoTip} alt="registon" className="logo-image" />
        </NavLink>
        <MobileIcon onClick={handleClick} click={click}>
          <Hamburger
            duration={0.8}
            rounded
            size={20}
            toggled={click}
            toggle={setClick}
          />
        </MobileIcon>
        <NavMenu onClick={handleClick} click={click}>
          <NavLink href="#courses">
            <button className="nav-btn">Functions</button>
          </NavLink>
          <NavLink href="#aboutUs">
            <button className="nav-btn">Our customers</button>
          </NavLink>
          <NavLink to="/sign-up">
            <button className="nav-btn">Request a demo</button>
          </NavLink>
          <NavLink to="/sign-up">
            <button className="nav-btn">Contacts</button>
          </NavLink>
          <NavLink to="/sign-up">
            <button className="nav-btn">Uzbek</button>
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
}
