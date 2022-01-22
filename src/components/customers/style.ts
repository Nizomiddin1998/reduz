import styled from "styled-components";
import { systemColors } from "../../assets/styles/colors";

export const CustomersProvider = styled.div`
text-align: center;
font-family: 'DM Sans', sans-serif;
font-weight: 400;
.customer-header {
    h1 {
        color: ${systemColors.mainBlue};
        font-size: 44px;
    }
}
`