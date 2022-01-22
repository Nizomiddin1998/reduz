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

export default function FooterComponent() {
  return (
    <FooterProvider>
      <FormTitle>Demo shaklini so‘rash</FormTitle>
      <form>
        <FormInputProvider className="container">
          <FormGroup>
            <label>Ismingiz</label>
            <FooterInput />
          </FormGroup>
          <FormGroup>
            <label>Telefon raqamingiz</label>
            <FooterInput />
          </FormGroup>
          <FormGroup>
            <label>Kompaniya nomi</label>
            <FooterInput />
          </FormGroup>
        </FormInputProvider>
        <ButtonGroup>
          <button className="btn btn-submit">yuborish</button>
        </ButtonGroup>
        <Contact>
          <div>
            <img src={Phone} alt="contact-me" />
            <span>+998 90 010-85-10</span>
          </div>
          <SocialMedia>
              <p>Ijtimoiy tarmoqlarimiz:</p>
              <span>
                  <img src={Facebook} alt="facebook" />
                  <img src={Telegram} alt="telegram" />
                  <img src={Instagram} alt="instagram" />
                  <img src={Twitter} alt="twitter" />
              </span>
          </SocialMedia>
        </Contact>
      </form>
    </FooterProvider>
  );
}
