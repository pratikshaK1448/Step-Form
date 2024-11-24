import { SUBMIT_APPLICATION, UPDATE_STEP } from "../constants/constants"
import { updateStep } from "../helper"
import { Step } from "../types"


const initialState = {
    activeStepId: 0,
    steps: [
        { id: 0, name: 'Personal Info', href: '#', status: 'current' },
        { id: 1, name: 'Education', href: '#', status: 'upcoming' },
        { id: 2, name: 'Work Experience', href: '#', status: 'upcoming' },
        { id: 3, name: 'Skills and Qualifications', href: '#', status: 'upcoming' },
        { id: 4, name: 'Additional Information', href: '#', status: 'upcoming' },
        { id: 5, name: 'Review and Submit', href: '#', status: 'upcoming' },
    ]
}


const updateStepReducer = (state = initialState, action: any) => {
    switch (action?.type) {
        case UPDATE_STEP: {
            return updateStep(action.steps, action.id);
        }
        default:
            return state;
    }
}



export default updateStepReducer;