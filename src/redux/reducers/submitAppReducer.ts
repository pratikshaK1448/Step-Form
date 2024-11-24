import { SUBMIT_APPLICATION } from "../constants/constants"

const submitApplication = (state = false, action: any) => {
    switch (action.type) {
        case SUBMIT_APPLICATION: {
            return true
        }
        default: {
            return false
        }
    }
}

export default submitApplication;