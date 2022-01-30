import { AnswerProvider, AnswerContainer, SliderProvider } from "./style";
import { useTranslation } from "react-i18next";

import SlickCarousel from "../carousel"


export default function AnswerComponent() {
    const {t} = useTranslation()

    const questions = [
        {
            id: 1,
            name: `${t("answers.answer_questions")}`,
            description: `${t("answers.learning_center_description")}`
        },
        {
            id: 2,
            name: `${t("answers.learning_center_analytics")}`,
            description: `${t("answers.learning_center_analytics_description")}`
        },
        {
            id: 3,
            name: `${t("answers.customers_automates")}`,
            description: `${t("answers.customers_automates_description")}`
        },
        {
            id: 4,
            name: `${t("answers.platform_demo")}`,
            description: `${t("answers.platform_demo_description")}`
        }
    ]    
  
    return (
        <AnswerProvider>
            <AnswerContainer className="container">
                <h1>{t("answers.answer_questions")}</h1>
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
