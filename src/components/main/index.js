import { MainProvider, MainHeader, MainTitle, MainPicture, MainBtn } from "./index.style"
import MainImage  from "../../assets/images/main/main.png"

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
        </MainProvider>
    )
}
