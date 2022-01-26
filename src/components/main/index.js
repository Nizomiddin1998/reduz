import {
  MainProvider,
  MainHeader,
  MainTitle,
  MainPicture,
  MainBtn,
  MainContainer,
  MainSliderProvider,
} from "./index.style";
import MainImage from "../../assets/images/main/main.png";
import { MainCarousel } from "../carousel/main_carousel";
import "./main.css";
import { useSpring } from "react-spring";
import Typing from "react-typing-animation";

export default function MainComponent() {
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 200, friction: 50 },
  }));
  return (
    <MainProvider>
      <MainHeader>
        <MainTitle>
          <Typing speed={30}>
            <h1>A very convenient platform for your own training centers</h1>
          </Typing>
        </MainTitle>
        <MainBtn>
          <button className="blob-btn">
            Request a demo
            <span className="blob-btn__inner">
              <span className="blob-btn__blobs">
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
              </span>
            </span>
          </button>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  result="blur"
                  stdDeviation="10"
                ></feGaussianBlur>
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                  result="goo"
                ></feColorMatrix>
                <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
              </filter>
            </defs>
          </svg>
        </MainBtn>
      </MainHeader>
      <MainPicture
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          transform: props.xys.interpolate(trans),
        }}
      >
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
        <MainSliderProvider>
          <MainCarousel />
        </MainSliderProvider>
      </MainContainer>
    </MainProvider>
  );
}
