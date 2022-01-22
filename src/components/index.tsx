import { Fragment } from 'react'
import AnswerComponent from './answers'
import Customers from './customers'
import FooterComponent from './footer'
import MainComponent from './main'
import MobileView from './mobile'
import Navigation from './navigator'
import { PanelComponent } from './panel'

export default function AllComponents() {
    return (
        <Fragment>
            <Navigation />
            <MainComponent />
            <PanelComponent />
            <AnswerComponent />
            <MobileView/>
            <Customers/>
            <FooterComponent />
        </Fragment>
    )
}
