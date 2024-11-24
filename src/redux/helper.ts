import { Istepsreducer } from "./reducers/reducer.types";
import { Step } from "./types";

export const updateStep = (state: Step[], id: number): Istepsreducer => {
    const numberOfSteps = state?.length;
    const sanitizedId = Math.max(0, Math.min(id, numberOfSteps - 1));
    const updatedSteps = state?.map((step) => {
        if (step.id < sanitizedId) {
            step.status = 'complete'
        } else if (step.id === sanitizedId) {
            step.status = 'current'
        } else {
            step.status = 'upcoming'
        }
        return step
    })
    return ({
        steps: updatedSteps,
        activeStepId: sanitizedId
    })
}

export const updateUserInfo = (state: any, activeStepId: number, updatedObject: Record<string, string>) => {
    const clonedState = [...state];
    clonedState[activeStepId] = updatedObject;
    return clonedState
}