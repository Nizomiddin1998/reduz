import styled from "styled-components";
import { systemColors } from "../../assets/styles/colors";

export const PanelProvider = styled.div`
  margin-top: 260px;
  font-family: "Dm Sans", sans-serif;
  position: relative;
  @media (max-width: 676px) {
      margin-top: 80px;
  }
`;

export const PanelTop = styled.div`
  display: flex;
  justify-content: space-between;
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
      .left-side-info h3 {
          margin: 0;
          font-size: 16px;
          line-height: 23px;
      }
      .left-side-info p {
          width: 100%;
          font-size: 12px;
          line-height: 16px;
          margin-top: 12px;
      }
  }
`;
export const RightSide = styled.div`
  position: absolute;
  right: 0;
  top: -40px;
  width: 60%;
  text-align: right;
  img {
    width: 70%;
  }
  @media (max-width: 676px) {
      top: 0;
      /* right: -30px; */
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
  width: 100%;
  img {
    width: 80%;
  }
  
`;

export const BottomRight = styled.div`
  /* width: 60%; */
  margin-top: 40px;
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
      h1 {
          font-size: 16px;
          line-height: 20px;
      }
      p {
          font-size: 12px;
          margin: 0;
          line-height: 16px;
      }
  }
`;
