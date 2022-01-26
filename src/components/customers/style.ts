import styled from "styled-components";
import { systemColors } from "../../assets/styles/colors";

export const CustomersProvider = styled.div`
  margin-top: 150px;
  text-align: center;
  font-family: "DM Sans", sans-serif;
  font-weight: 400;
  .customer-header {
    h1 {
      color: ${systemColors.mainBlue};
      font-size: 44px;
    }
    @media (max-width: 676px) {
      h1 {
        font-size: 26px;
      }
    }
  }
  @media (max-width: 576px) {
    img {
      width: 121px;
    }
    .partners-logo-group {
      display: flex;
      overflow-x: scroll !important;
      .partners-logo-header {
        display: flex;
      }
      .parners-logo-footer{
        display: flex;
      }
      ::-webkit-scrollbar {
         display: none;
      }
    }
  }
`;
