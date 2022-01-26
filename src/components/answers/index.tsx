import { AnswerProvider, AnswerContainer, SliderProvider } from "./style"

import SlickCarousel from "../carousel"

const questions = [
    {
        id: 1,
        name: 'EduTizim platformasi vazifasi nima?',
        description: 'O’quv markazingizda tizim qurishga yordam berish. Qog’oz va excel fayllardagi ma’lumotlarini bir joyda jamlab ish samaradorligini oshirishdan iborat'
    },
    {
        id: 2,
        name: 'O’quv markazingiz holatini analitika qilib beradi',
        description: 'O’quv markaz rivojlanishi uchun hisobotlar juda muhim. EDUTIZIM orqali barcha hisobotlarni olib borasiz. O”quvchilaringiz, moliayviy va marketing hisobotlari orqali ishlaringizni rejalashtirishingiz mumkin'
    },
    {
        id: 3,
        name: 'Mijozlar bilan ishlashni avtomatlashtiradi',
        description: 'EDUTIZIM barcha manbalardan kelgan lidlarni hisoblasydi va ular bilan ishlashni avtomatlashtiradi'
    },
    {
        id: 4,
        name: 'Platformani Demo versiyasidan foydalanish mumkin.',
        description: 'Platforma imkoniyatlaridan Demo versiyamiz orqali 14 kun davomida bepul foydalanishingiz mumkin'
    }
]
export default function AnswerComponent() {
  
    return (
        <AnswerProvider>
            <AnswerContainer className="container">
                <h1>Ko’p so’raladigan savollarga javoblar</h1>
                <div className="row">
                    {
                        questions.map((question) => (
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={question.id}>
                                <div className="question-info">
                                    <article>{question.name}</article>
                                    <p>{question.description}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <SliderProvider>
                   <SlickCarousel/>
                </SliderProvider>
            </AnswerContainer>

        </AnswerProvider>
    )
}
