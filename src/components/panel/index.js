import {
  PanelProvider,
  PanelTop,
  PanelBottom,
  LeftSide,
  RightSide,
  BottomLeft,
  BottomRight,
} from "./index.style";
import IphoneX from "../../assets/images/panel/iphoneX.png";
import VerticalIPhoneX from "../../assets/images/panel/vertical_iphoneX.png";
import { useTranslation } from "react-i18next";

export function PanelComponent() {
  const {t} = useTranslation() 
  return (
    <PanelProvider id="functions">
      <PanelTop>
        <LeftSide>
          <div className="left-side-info">
            <h3>{t('panel.each_student')} </h3>
            <h3>{t('panel.easy_work')} </h3>
            <h3>{t('panel.paper')}</h3>
            <p>
                {t("panel.reader_complete_info")}
            </p>
          </div>
        </LeftSide>
        <RightSide>
          <img src={IphoneX} alt="iphoneX" />
        </RightSide>
      </PanelTop>
      <PanelBottom>
        <BottomLeft>
          <img src={VerticalIPhoneX} alt="vertical-iphoneX" />
        </BottomLeft>
        <BottomRight>
          <h1>{t("panel.convenience_for_teachers")}</h1>
          <p>
            {t("panel.convenience_for_teachers_info")}
          </p>
        </BottomRight>
      </PanelBottom>
    </PanelProvider>
  );
}
