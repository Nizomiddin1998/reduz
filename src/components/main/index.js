import { useEffect } from "react";
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
import { useTranslation } from "react-i18next";

export default function MainComponent() {
  const { t } = useTranslation();
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
  
  // async function TypingFunction() {
  //  if(localStorage.getItem("i18nextLng") === "uz") {
  //    return <h1>O’quv markazlar uchun boshqaruv tizimi</h1>
  //  } else {
  //    return <h1>Our mobile apps have made your job easier. Now you can work without too much effort</h1>
  //  }
  // }
  // useEffect(() => {
  //   if (localStorage.getItem("i18nextLng")) {
  //     TypingFunction()
  //   }
  // }, [localStorage.getItem("i18nextLng")]);
  return (
    <MainProvider>
      <MainHeader>
        <MainTitle>
          <Typing speed={30}>
            <h1>{t("main.learning_center_system")}</h1>
          </Typing>
        </MainTitle>
        <MainBtn>
          <button className="blob-btn">
            {t("main.button_name")}
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
              <p>{t("main.learning_center_info")}</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="main-content-info">
              <p>{t("main.about_staff_salaries")}</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="main-content-info">
              <p>{t("main.android_app_for_customers")}</p>
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
