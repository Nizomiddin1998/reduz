import {
  MainProvider,
  MainHeader,
  MainTitle,
  MainPicture,
  MainBtn,
  MainContainer,
} from "./index.style";
import MainImage from "../../assets/images/main/main.png";

export default function MainComponent() {
  return (
    <MainProvider>
      <MainHeader>
        <MainTitle>
          <h1>A very convenient platform for your own training centers</h1>
        </MainTitle>
        <MainBtn>
          <button>Request a demo</button>
        </MainBtn>
      </MainHeader>
      <MainPicture>
        <img src={MainImage} alt="main" />
      </MainPicture>
      <MainContainer className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="main-content-info">
              <p>
                Startup Framework works on devices supporting Retina Display.
                Feel the clarity in each pixel.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="main-content-info">
              <p>
                There are a lot of different components that will help you
                create the perfect look and feel for your startup.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="main-content-info">
              <p>
                You can easily combine components in a variety ways for
                different design projects. It’s easy!
              </p>
            </div>
          </div>
        </div>
      </MainContainer>
    </MainProvider>
  );
}
