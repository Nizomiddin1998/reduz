import {
  MobileViewProvider,
  MobileContent,
  BackContent,
  FrontContent,
} from "./style";
// import "./style.css";
// import "../script"
import BackgroundContent from "../../assets/images/mobile/iphoneX.png";
import Front from "../../assets/images/mobile/inner_slider.png";


export default function MobileView() {
  return (
    <MobileViewProvider>
      <MobileContent className="container my-5">
        {/* <BackContent>
          <img src={BackgroundContent} alt="back-content" />
          <FrontContent>
            <img src={Front} alt="front" classNameName="front" />
          </FrontContent>
        </BackContent> */}
      </MobileContent>
    </MobileViewProvider>
  );
}
