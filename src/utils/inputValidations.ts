
export const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};

export const validatePhone = (phone: string) => {
    const re = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
    return re.test(phone);
};

export const validateName = (name: string) => {
    const re = /^[a-z ,.'-]+$/i;
    return re.test(name);
};

export const validateNotEmpty = (value: string) => value.trim() !== '';

export const validatePinCode = (pinCode: string) => /^\d{5,6}$/.test(pinCode);

