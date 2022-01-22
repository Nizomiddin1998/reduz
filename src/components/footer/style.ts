import styled from "styled-components";
import { systemColors } from "../../assets/styles/colors";

export const FooterProvider = styled.footer`
  width: 100%;
  height: auto;
  background: ${systemColors.mainBlue};
  margin-top: 139px;
  overflow-x: hidden;
`;
export const FormTitle = styled.h1`
  font-family: "Rubik", sans-serif;
  font-size: 44px;
  line-height: 53px;
  letter-spacing: -0.02em;
  color: #ffffff;
  padding: 48px 0;
  font-weight: 400;
  text-align: center;
  @media (max-width: 576px) {
    font-size: 26px;
    padding: 20px 0;
  }
`;

export const FormInputProvider = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-family: SfProDisplay;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  label {
    color: white;
    font-size: 15px;
    line-height: 22px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 4px 18px;
  }
  @media (max-width: 576px) {
    margin-bottom: 18px;
  }
`;
export const FooterInput = styled.input`
  width: 291px;
  height: 44px;
  background: #ffffff;
  border-radius: 24px;
  margin: 4px 18px;
  border: none;
  outline: none;
  text-indent: 30px;
  font-family: SfProDisplay;
`;

export const ButtonGroup = styled.div`
  text-align: center;
  .btn-submit {
    width: 291px;
    height: 44px;
    background: ${systemColors.mainBtnColor};
    border-radius: 24px;
    text-transform: capitalize;
    color: white;
    cursor: pointer;
    font-family: "Rubik", sans-serif;
    font-size: 18px;
  }
  @media (max-width: 576px) {
    margin-top: 18px;
  }
`;

export const Contact = styled.div`
  text-align: center;
  margin-top: 38px;
  margin-bottom: 53px;
  font-family: "Rubik", sans-serif;
  span {
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.02em;
    color: #ffffff;
    margin: 0px 8px;
  }
`;
export const SocialMedia = styled.div`
  p {
    line-height: 22px;
    color: #ffffff;
    margin: 10px 0px;
  }
  img {
    margin: 0 9px;
    cursor: pointer;
  }
`;
