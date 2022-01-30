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
import { useTranslation } from "react-i18next"
import i18n from "../../i18n";
export default function Navbar() {
  const { t } = useTranslation()
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
  function changeLanguage(e){
    i18n.changeLanguage(e.target.value)
  }

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
          <NavLink href="#functions">
            <button className="nav-btn">{t("navigation.functions")}</button>
          </NavLink>
          <NavLink href="#customers">
            <button className="nav-btn">{t("navigation.customers")}</button>
          </NavLink>
          <NavLink href="#contact">
            <button className="nav-btn">{t("navigation.request")}</button>
          </NavLink>
          <NavLink href="#contact">
            <button className="nav-btn">{t("navigation.contacts")}</button>
          </NavLink>
          <NavLink to="/sign-up">
            {/* <button className="nav-btn">Uzbek</button> */}
            {/* <Select className="nav-btn react-select" placeholder={"Uzbek"} /> */}
            <select className="nav-btn  language-select" onClick={changeLanguage}>
              <option value="uz">Uzbek</option>
              <option value="en">English</option>
            </select>
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
}
