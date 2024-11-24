import React from 'react'
import { IFormWrapper } from './formWrapper.types'
import PersonalInfo from '../personalnfo/PersonalInfo'
import Education from '../education/Education'
import { useSelector } from 'react-redux'
import AdditionalInfo from '../additionalInformation/AdditionalInfo'
import Experience from '../experience/Experience'
import Skills from '../skills/Skills'
import Review from '../reviewAndSubmit/Review'

const selectFormSection = (activeStepId: number) => {
    switch (activeStepId) {
        case 0:
            return <PersonalInfo />
        case 1:
            return <Education />
        case 2:
            return <Experience />
        case 3:
            return <Skills />
        case 4:
            return <AdditionalInfo />
        case 5:
            return <Review />
        default:
            return <></>
    }
}

function FormWrapper(props: IFormWrapper) {
    const { activeStepId = 0 } = useSelector(state => state?.configData)
    return (
        <div>
            {selectFormSection(activeStepId)}
        </div>
    )
}

export default FormWrapper