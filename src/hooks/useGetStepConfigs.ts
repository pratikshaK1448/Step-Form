import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserInfo } from '../redux/actions/updateUserInfo.action';
import { updateStep } from '../redux/actions/updateStep.action';

function useGetStepConfigs() {
    const { activeStepId = 0, steps } = useSelector(state => state?.configData);
    const dispatch = useDispatch();
    const handleNext = (objToSave: Record<string, string>) => {
        dispatch(updateUserInfo(activeStepId, objToSave));
        dispatch(updateStep({ steps, id: activeStepId + 1 }));
    }
    const handlePrev = (objToSave: Record<string, string>) => {
        dispatch(updateUserInfo(activeStepId, objToSave));
        dispatch(updateStep({ steps, id: activeStepId - 1 }));
    }

    return { activeStepId, steps, handleNext, handlePrev };
}

export default useGetStepConfigs