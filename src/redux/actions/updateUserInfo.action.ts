import { RESET_FORM, SET_EMAIL, SET_NAME, SET_PHONE_NUMBER, UPDATE_USER_INFO } from "../constants/constants";
import { ResetFormAction, SetEmailAction, SetNameAction, SetPhoneNumberAction, UpdateUserInfoAction } from "./actions.types";

export const setName = (name: string): SetNameAction => ({
    type: SET_NAME,
    payload: name,
});

export const setEmail = (email: string): SetEmailAction => ({
    type: SET_EMAIL,
    payload: email,
});

export const setPhoneNumber = (phoneNumber: string): SetPhoneNumberAction => ({
    type: SET_PHONE_NUMBER,
    payload: phoneNumber,
});

export const resetForm = (): ResetFormAction => ({
    type: RESET_FORM,
});

export const updateUserInfo = (activeStepId: number, updatedObject: Record<string, string>) => ({
    type: UPDATE_USER_INFO,
    activeStepId,
    updatedObject
})