import { CustomersProvider } from "./style";
import Att from "../../assets/images/partners_logo/ATT.png";
import Forbes from "../../assets/images/partners_logo/Forbes.png";
import Amd from "../../assets/images/partners_logo/AMD.png";
import Facebook from "../../assets/images/partners_logo/Facebook.png";
import Attlasian from "../../assets/images/partners_logo/Attlasian.png";
import Disney from "../../assets/images/partners_logo/Disney.png";
import Ebay from "../../assets/images/partners_logo/Ebay.png";
import { useTranslation } from "react-i18next";
export default function Customers() {
  const {t} = useTranslation()
  return (
    <CustomersProvider>
      <div className="customer-header" id="customers">
        <h1>{t("costomers.costomers")}</h1>
      </div>
      <div className="partners-logo-group">
        <div className="partners-logo-header">
          <span>
            <img src={Att} alt="att" />
          </span>
          <span>
            <img src={Forbes} alt="att" />
          </span>
          <span>
            <img src={Amd} alt="att" />
          </span>
          <span>
            <img src={Facebook} alt="att" />
          </span>
        </div>
        <div className="parners-logo-footer">
          <span>
            <img src={Attlasian} alt="attlasian" />
          </span>
          <span>
            <img src={Disney} alt="disney" />
          </span>
          <span>
            <img src={Ebay} alt="ebay" />
          </span>
        </div>
      </div>
    </CustomersProvider>
  );
}
