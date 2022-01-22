import { Fragment } from 'react'
import AnswerComponent from './answers'
import FooterComponent from './footer'
import MainComponent from './main'
import Navigation from './navigator'
import { PanelComponent } from './panel'

export default function AllComponents() {
    return (
        <Fragment>
            <Navigation />
            <MainComponent />
            <PanelComponent />
            <AnswerComponent />
            <FooterComponent />
        </Fragment>
    )
}
