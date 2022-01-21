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

export function PanelComponent() {
  return (
    <PanelProvider>
      <PanelTop>
        <LeftSide>
          <div className="left-side-info">
            <h3>Create your reader easily.</h3>
            <h3>Get rid of excess</h3>
            <h3>paperwork</h3>
            <p>
              This I have produced as a scantling of Jack’s great eloquence and
              the force of his reasoning upon such abstruse matters.
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
          <h1>Very easy visits for teachers</h1>
          <p>
            This little wandering journey, without settled place of abode, had
            been so unpleasant to me, that my own house, as I called.
          </p>
        </BottomRight>
      </PanelBottom>
    </PanelProvider>
  );
}
