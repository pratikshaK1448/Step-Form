import { UPDATE_ACTIVE_STEP_ID } from "../constants/constants";
import { updateStep } from "../helper";
// import store from "../store";

const initialState = 0;

const activeStepIdReducer = (state = initialState, action: any) => {
    // const data = store && store.getState();
    // let numberOfSteps = 0;
    // if (data?.steps) {
    //     numberOfSteps = data?.steps?.length;
    // }
    switch (action?.type) {
        // case UPDATE_ACTIVE_STEP_ID + "1": {
        //     const sanitizedId = Math.max(0, Math.min(action.id, numberOfSteps - 1))
        //     updateStep(action.steps, sanitizedId);
        //     return sanitizedId;
        // }
        default:
            return state;
    }
}

export default activeStepIdReducer;