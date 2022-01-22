import styled from "styled-components";
import { systemColors } from "../../assets/styles/colors";

export const MainProvider = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MainHeader = styled.div`
  margin-top: 28.5px;
`;

export const MainTitle = styled.div`
  h1 {
    font-weight: bold;
    font-size: 54px;
    line-height: 70px;
    text-align: center;
    letter-spacing: -1px;
    color: ${systemColors.mainBlue};
    width: 70%;
    margin: auto;
  }
  @media (max-width: 576px) {
    h1 {
      font-size: 26px;
      line-height: 37px;
      width: 100%;
      font-weight: 500;
    }
  }
`;

export const MainBtn = styled.div`
  margin: 30.46px 0 50px 0;
  text-align: center;
  display: flex;
  justify-content: center;
  button {
    width: 184px;
    height: 56px;
    border: none;
    outline: none;
    cursor: pointer;
    background: ${systemColors.mainBtnColor};
    border-radius: 100px;
    color: white;
    font-size: 16.7px;
    font-family: "Dm Sans", sans-serif;
  }
  @media (max-width: 576px) {
    button {
      width: 171px;
      height: 45px;
    }
  }
`;

export const MainPicture = styled.div`
  width: 65%;
  margin: auto;
  img {
    width: 100%;
  }
  @media (max-width: 576px) {
    width: 80%;
  }
  @media (max-width: 360px) {
    width: 90%;
  }
`;

export const MainContainer = styled.div`
  margin-top: 87px;
  .main-content-info {
    width: 93%;
  }
  p {
    font-family: "Dm Sans", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16.8px;
    line-height: 26px;
    color: rgba(21, 20, 57, 0.4);
    text-align: center;
    position: relative;
    &:before {
      position: absolute;
      content: "";
      right: -35px;
      width: 2px;
      height: 117px;
      background: rgba(21, 20, 57, 0.4);
      opacity: 0.3;
    }
  }
  @media (max-width: 768px) {
    .main-content-info {
      display: none;
    }
    p {
      &:before {
        position: absolute;
        content: "";
        background: transparent;
      }
    }
  }
`;

export const MainSliderProvider = styled.div`
  display: none;
  @media (max-width: 576px) {
    display: block;
  }
`;
