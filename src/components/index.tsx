import { Fragment } from 'react'
import MainComponent from './main'
import Navigation from './navigator'
import { PanelComponent } from './panel'

export default function AllComponents() {
    return (
        <Fragment>
            <Navigation />
            <MainComponent />
            <PanelComponent />
        </Fragment>
    )
}
