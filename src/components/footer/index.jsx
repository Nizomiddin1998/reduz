import { useState } from "react";
import {
  FooterProvider,
  FormTitle,
  FormInputProvider,
  FormGroup,
  FooterInput,
  ButtonGroup,
  Contact,
  SocialMedia,
} from "./style";
import Phone from "../../assets/icons/phone.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Telegram from "../../assets/icons/telegram.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Twitter from "../../assets/icons/twitter.svg";
import axios from "axios";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";
import { css } from "@emotion/react";
import ClockLoader from "react-spinners/ClockLoader";
import { systemColors } from "../../assets/styles/colors";
import { useTranslation } from "react-i18next";

const override = css`
  display: inline-flex;
  border-color: ${systemColors.mainBlue};
  margin: 0 10px;
`;

const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut",
});
export default function FooterComponent() {
  const {t} = useTranslation()
  const initialState = {
    firstName: "",
    phoneNumber: "",
    companyName: "",
  };
  const [isLoading, setIsLoading] = useState(false);
  const [contact, setContact] = useState(initialState);
  const [errorCodes, setErrorCodes] = useState(null)
  const { firstName, phoneNumber, companyName } = contact;
  function handleChange(e) {
    setContact((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (!isLoading) {
        if (firstName !== "" && phoneNumber !== "" && companyName !== "") {
          let url = `${process.env.REACT_APP_API_ROOT}`;
          setIsLoading(true);
          await axios.post(url, {
            firstName: firstName,
            phoneNumber: `+${phoneNumber}`,
            companyName: companyName,
          });
          setIsLoading(false);
          toast.success("Muvaffaqiyatli yuborildi", {
            transition: bounce,
          });
          setTimeout(() => {
            setContact(initialState);
          }, 1500);
        }
      }
    } catch (e) {
      console.log(e);
      setErrorCodes(e)
      // toast.error(e.code)
      setIsLoading(false)
    }
  }
  return (
    <FooterProvider id="contact">
      <FormTitle>{t("footer.request_demo_form")}</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormInputProvider className="container">
          <FormGroup>
            <label>{t("footer.name")}</label>
            <FooterInput
              type="text"
              name="firstName"
              required
              value={firstName}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>{t("footer.phone_number")}</label>
            <FooterInput
              type="number"
              required
              value={phoneNumber}
              name="phoneNumber"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>{t('footer.company_name')}</label>
            <FooterInput
              type="text"
              value={companyName}
              required
              name="companyName"
              onChange={handleChange}
            />
          </FormGroup>
        </FormInputProvider>
        <ButtonGroup>
          <button type="submit" className="btn btn-submit">
            {isLoading ? (
              <>
               <ClockLoader color={systemColors.mainBlue} loading={isLoading} css={override} size={20} />
                {t("footer.being_sent")}
              </>
            ) : (
              `${t("footer.send")}`
            )}
          </button>
        </ButtonGroup>
        <Contact>
          <div>
            <img src={Phone} alt="contact-me" />
            <span>+998 90 010-85-10</span>
          </div>
          <SocialMedia>
            <p>{t("footer.our_social_networks")}</p>
            <span>
              <a>
                <img src={Facebook} alt="facebook" />
              </a>
              <a href="http://www.telegram.com/@edutizim_uz" target="_blank">
                <img src={Telegram} alt="telegram" />
              </a>
              <a href="http://www.instagram.com/@edutizim_uz" target="_blank">
                <img src={Instagram} alt="instagram" />
              </a>
              <img src={Twitter} alt="twitter" />
            </span>
          </SocialMedia>
        </Contact>
      </form>
      <ToastContainer transition={bounce} />
    </FooterProvider>
  );
}
