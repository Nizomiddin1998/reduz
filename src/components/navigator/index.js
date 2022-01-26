import { useState, useEffect } from "react";
import {
  Nav,
  NavLink,
  BtnLink,
  MobileIcon,
  NavMenu,
} from "./index.style";
import { Twirl as Hamburger } from "hamburger-react";
import Select from "react-select"
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
            rounded
            direction="right"
            size={24}
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
            {/* <button className="nav-btn">Uzbek</button> */}
            {/* <Select className="nav-btn react-select" placeholder={"Uzbek"} /> */}
            <select className="nav-btn  language-select">
              <option value="uz">Uzbek</option>
              <option value="en">English</option>
            </select>
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
}
