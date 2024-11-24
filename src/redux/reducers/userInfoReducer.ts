import { UpdateUserInfoAction } from "../actions/actions.types";
import { FILL_ANOTHER_RESPONSE, UPDATE_FORM, UPDATE_USER_INFO } from "../constants/constants"
import { updateUserInfo } from "../helper"

const initialState = [
    {
        firstName: '',
        lastName: '',
        email: '',
        streetAddress: '',
        phone: '',
        city: '',
        state: '',
        pinCode: '',
    },
    {
        education: []
    },
    {
        experience: []
    },
    {
        skills: [],
        certification: []
    },
    {
        resume: '',
        coverLetter: ''
    }
]

const userInfoReducer = (state = initialState, action: UpdateUserInfoAction) => {
    switch (action?.type) {
        case UPDATE_USER_INFO: {
            return updateUserInfo(state, action.activeStepId, action.updatedObject);
        }
        default:
            return state
    }
}

export default userInfoReducer;