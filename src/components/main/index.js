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
          <Typing speed={50}>
            <h1>O’quv markazlar uchun boshqaruv tizimi</h1>
          </Typing>
        </MainTitle>
        <MainBtn>
          <button className="blob-btn">
            Demo shaklini so’rash
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
                O’quv markazingizda tizim qurishda yordam beradi. Endi bemalol
                mijozlaringiz va hodimlaringizni kuzatib tura olasiz. Ular
                haqida barcha ma’lumotga ega bo’lasiz.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="main-content-info">
              <p>
                Endi hodimlaringiz uchun oylik hisoblash va ularga KPI belgilash
                shart emas. EDUTIZIM sizga yordam beradi. Moliyaviy
                hisobotlaringizni EDUTIZIM orqali oling
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="main-content-info">
              <p>
                Mijzolaringiz va hodimlaringiz uchun android ilovalar bor. Ular
                orqali barcha ma’lumotlarga ega bo’lishadi
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
