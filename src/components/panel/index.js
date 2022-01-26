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
            <h3>Har bir o'quvchingiz bilan</h3>
            <h3>oson ishlaysiz, ortiqcha</h3>
            <h3>qog'ozlarsiz</h3>
            <p>
              O’quvchingiz haqida to’liqroq ma’lumot yig’ish sizga foyda
              keltiradi. Buning uchun esa exel va shu kabi fayllardan
              foydalanish xavli, yo’qotib qo’yish ehtimoli bor. Shu sababdan bu
              kabi malumotlarni saqlashda dasturlar qulaydir
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
          <h1>O’qituvchilar uchun qulaylik</h1>
          <p>
            O’qituvchilarimiz o’quvchilarni bilim darajasini, darslarga
            qatnashishini, davomatlarini va o’quv markaz bilan shartnomaga ko’ra
            moliyaviy holatini real vaqt rejimida telefon orqali ko’rib tura
            oladi. Bu esa sizga vaqt tejashga va mijozlar bilan samarali
            ishlashingizda yordam beradi
          </p>
        </BottomRight>
      </PanelBottom>
    </PanelProvider>
  );
}
