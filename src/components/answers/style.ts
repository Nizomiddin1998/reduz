import styled from "styled-components";
import { systemColors } from "../../assets/styles/colors";

export const AnswerProvider = styled.div`
  font-family: "DM Sans", sans-serif;
  margin-top: 135px;
  h1 {
    text-align: center;
    font-size: 39px;
    line-height: 49px;
    letter-spacing: -0.4px;
    color: ${systemColors.mainBlue};
    margin-bottom: 46px;
  }
  @media (max-width: 576px) {
    h1 {
      font-size: 26px;
    }
  }
`;
export const AnswerContainer = styled.div`
  .question-info article {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: ${systemColors.mainBlue};
    margin-bottom: 7px;
  }
  .question-info p {
    font-size: 14px;
    line-height: 24px;
    color: rgba(21, 20, 57, 0.4);
  }
  @media (max-width: 576px) {
    .question-info {
      display: none;
    }
    .question-info article {
      font-size: 15px;
      text-align: center;
    }
    .question-info p {
      font-size: 14px;
      line-height: 20px;
      text-align: center;
    }
  }
`;

export const SliderProvider = styled.div`
  display: none;
  @media (max-width: 576px) {
    display: block;
  }
`;
