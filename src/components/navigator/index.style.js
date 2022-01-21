import styled from "styled-components";
import { Link } from "react-router-dom";
import { systemColors } from "../../assets/styles/colors";

export const Nav = styled.nav`
  width: calc(100% - 220.56px);
  margin: 0 auto;
  background-color: white;
  font-family: 'DM Sans', sans-serif;
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0.5rem calc((100vw - 1200px) / 2); */
  z-index: 1000;
  @media (max-width: 576px) {
    width: calc(100% - 20px);
  }
`;

export const NavLink = styled.a`
  color: ${systemColors.mainBlue} !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500 !important;
  text-decoration: none !important;
  transition: 0.4s ease-in-out;
  padding: 0 1rem;
  height: 10%;
  cursor: pointer;

  &:hover {
    text-decoration: none !important;
  }
  .logo-image {
    width: 176.64px;
  }
  .nav-btn {
    margin-top: 13px;
    font-family: 'DM Sans', sans-serif;
    transition: all .5s;
    background-color: transparent;
    border: none;
    color: ${systemColors.mainBlue};
    font-size: 18.6px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    
  }
  @media (max-width: 576px) {
    img {
      width: 130px !important;
    }
  }
  @media (max-width: 960px) {
    color: black;
  }
`;
export const BtnLink = styled(Link)`
  .login-btn {
    width: 160px;
    height: 40px;
    background: var(--btn_color);
    border-radius: 8px;
    color: white;
    border: none;
    &:focus {
      outline: none;
    }
    img {
      width: 220px;
    }
  }
`;
export const PhoneLink = styled.a`
  color: #000;
  display: none;
  font-weight: 500 !important;
  text-decoration: none !important;
  transition: 0.4s ease-in-out;
  padding: 0 1rem;
  /* height: 100%; */
  @media (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
`;
export const MobileIcon = styled.div`
  display: none;
  width: 20px;
  svg {
    width: 18px;
    font-weight: lighter !important;
  }
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    width: 20px;
    color: black;
    top: -2px;
    right: 20px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    transition: all 0.5s linear;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    width: 100%;
    height: 90vh;
    padding: 0;
    z-index: 1000;
    top: 90px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #fff;
    backdrop-filter: blur(3px) !important;
  }
`;
