import { RESET_FORM, SET_EMAIL, SET_NAME, SET_PHONE_NUMBER, UPDATE_USER_INFO } from "../constants/constants";

export interface SetNameAction {
    type: typeof SET_NAME;
    payload: string;
}

export interface SetEmailAction {
    type: typeof SET_EMAIL;
    payload: string;
}

export interface SetPhoneNumberAction {
    type: typeof SET_PHONE_NUMBER;
    payload: string;
}

export interface ResetFormAction {
    type: typeof RESET_FORM;
}


export interface UpdateUserInfoAction {
    type: typeof UPDATE_USER_INFO;
    activeStepId: number;
    updatedObject: Record<string, string>
}



export type FormActionTypes = SetNameAction | SetEmailAction | SetPhoneNumberAction | ResetFormAction;