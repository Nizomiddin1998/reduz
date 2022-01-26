import styled from "styled-components";
import { systemColors } from "../../assets/styles/colors";

export const PanelProvider = styled.div`
  width: 100%;
  margin-top: 150px;
  font-family: "Dm Sans", sans-serif;
  position: relative;
  @media (max-width: 676px) {
    margin-top: 80px;
    overflow-x: hidden;
  }
`;

export const PanelTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow-x: hidden !important;

`;
export const LeftSide = styled.div`
  /* position: absolute; */
  margin-left: 200px;
  width: 40%;
  .left-side-info h3 {
    font-weight: bold;
    font-size: 39px;
    line-height: 40px;
    letter-spacing: -0.4px;
    color: #3d68ff;
  }
  .left-side-info p {
    width: 80%;
    margin-top: 21px;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: rgba(21, 20, 57, 0.4);
  }
  @media (max-width: 992px) {
    margin-left: 100px;
  }
  @media (max-width: 676px) {
    margin-left: 16px;
    width: 50%;
    .left-side-info h3 {
      margin: 0;
      font-size: 15px;
      line-height: 23px;
    }
    .left-side-info p {
      width: 100%;
      font-size: 12px;
      line-height: 16px;
      margin-top: 12px;
    }
  }
  @media (max-width: 400px) {
    .left-side-info h3 {
      font-size: 13px;
    }
  }
`;
export const RightSide = styled.div`
  position: absolute;
  right: 0;
  top: -40px;
  width: 60%;
  text-align: right;
  margin: 0;
  img {
    width: 70%;
  }
  @media (max-width: 676px) {
    top: 0;
    right: -30px;
    overflow-x:hidden;
    img {
      width: 92%;
    }
  }
`;

export const PanelBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 89px auto;
  width: calc(100% - 300px);
  @media (max-width: 676px) {
    width: 100%;
    margin-top: 24px;
  }
`;
export const BottomLeft = styled.div`
  width: 38%;
  img {
    width: 100%;
  }
  @media (max-width: 576px) {
    width: 50%;
  }
`;

export const BottomRight = styled.div`
  width: 62%;
  margin-left: 100px;
  h1 {
    width: 65%;
    font-weight: bold;
    font-size: 39px;
    line-height: 52px;
    letter-spacing: -0.4px;
    color: ${systemColors.mainBlue};
  }
  p {
    width: 80%;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    color: rgba(21, 20, 57, 0.4);
    margin-top: 28px;
  }
  @media (max-width: 676px) {
    margin: 0;
    width: 50%;
    h1 {
      font-size: 16px;
      line-height: 20px;
      width: 100%;
    }
    p {
      width: 100%;
      font-size: 12px;
      margin: 0;
      line-height: 16px;
    }
  }
  @media (max-width: 400px) {
    h1 {
      font-size: 13px;
    }
  }
`;
