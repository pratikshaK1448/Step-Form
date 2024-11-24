import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../ui/Input";
import FormLayout from "../formWrapper/FormLayout";
import useGetStepConfigs from "../../../hooks/useGetStepConfigs";
import FormFooter from "../formWrapper/FormFooter";
import { validateEmail, validateName, validateNotEmpty, validatePhone, validatePinCode } from "../../../utils/inputValidations";
import FooterBtns from "../../common/FooterBtns";


export default function InfoForm() {
    const { activeStepId = 0, steps, handleNext, handlePrev } = useGetStepConfigs();
    const data = useSelector((state: any) => state?.userInfo);
    const [personalInfo, setPersonalInfo] = useState<Record<string, string>>(data[activeStepId]);
    const [isFormValid, setIsFormValid] = useState<boolean>(false || Object.values(data[activeStepId]).every(val => Boolean(val)));
    const [errors, setErrors] = useState<Record<string, string>>({});

    const getValue = (prop: string) => personalInfo?.[prop] || '';

    const handleChange = (prop: string, value: string) => {
        const updatedPersonalInfo = {
            ...personalInfo,
            [prop]: value
        };
        setPersonalInfo(updatedPersonalInfo);
        setIsFormValid(validateForm(updatedPersonalInfo));
        validateField(prop, value);
    };

    const validateForm = (personalInfo: any) => {
        return validateNotEmpty(personalInfo.firstName) &&
            validateNotEmpty(personalInfo.lastName) &&
            validateEmail(personalInfo.email) &&
            validatePhone(personalInfo.phone) &&
            validateNotEmpty(personalInfo.streetAddress) &&
            validateNotEmpty(personalInfo.city) &&
            validateNotEmpty(personalInfo.state) &&
            validatePinCode(personalInfo.pinCode);
    };

    const validateField = (prop: string, value: string) => {
        let errorMessage = '';
        switch (prop) {
            case 'firstName':
            case 'lastName':
                if (!validateNotEmpty(value)) {
                    errorMessage = `${prop === 'firstName' ? 'First' : 'Last'} name cannot be empty.`;
                } else if (!validateName(value)) {
                    errorMessage = `Invalid ${prop === 'firstName' ? 'first' : 'last'} name.`;
                }
                break;
            case 'email':
                if (!validateNotEmpty(value)) {
                    errorMessage = 'Email address cannot be empty.';
                } else if (!validateEmail(value)) {
                    errorMessage = 'Invalid email address.';
                }
                break;
            case 'phone':
                if (!validatePhone(value)) {
                    errorMessage = 'Invalid phone number.';
                }
                break;
            case 'streetAddress':
            case 'city':
            case 'state':
                if (!validateNotEmpty(value)) {
                    errorMessage = `${prop.charAt(0).toUpperCase() + prop.slice(1)} cannot be empty.`;
                }
                break;
            case 'pinCode':
                if (!validatePinCode(value)) {
                    errorMessage = 'Invalid zip code.';
                }
                break;
        }
        setErrors(prev => ({
            ...prev,
            [prop]: errorMessage
        }));
    };

    return (
        <FormLayout label="Personal Information" description="Enter your personal information">
            <div className="sm:col-span-3">
                <Input
                    label="First name"
                    name="first-name"
                    type="text"
                    value={getValue('firstName')}
                    isValid={!errors.firstName}
                    errorMessage={errors.firstName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        e.stopPropagation();
                        handleChange('firstName', e.target.value)
                    }}
                />
            </div>

            <div className="sm:col-span-3">
                <Input
                    label="Last name"
                    name="last-name"
                    type="text"
                    value={getValue('lastName')}
                    isValid={!errors.lastName}
                    errorMessage={errors.lastName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        e.stopPropagation();
                        handleChange('lastName', e.target.value)
                    }}
                />
            </div>

            <div className="sm:col-span-3">
                <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={getValue('email')}
                    isValid={!errors.email}
                    errorMessage={errors.email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        e.stopPropagation();
                        handleChange('email', e.target.value)
                    }}
                />
            </div>

            <div className="sm:col-span-3">
                <Input
                    label="Phone"
                    name="phone"
                    type="text"
                    value={getValue('phone')}
                    isValid={!errors.phone}
                    errorMessage={errors.phone}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        e.stopPropagation();
                        handleChange('phone', e.target.value)
                    }}
                />
            </div>

            <div className="col-span-full">
                <Input
                    label="Street Address"
                    name="street-address"
                    type="text"
                    value={getValue('streetAddress')}
                    isValid={!errors.streetAddress}
                    errorMessage={errors.streetAddress}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        e.stopPropagation();
                        handleChange('streetAddress', e.target.value)
                    }}
                />
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
                <Input
                    label="City"
                    name="city"
                    type="text"
                    value={getValue('city')}
                    isValid={!errors.city}
                    errorMessage={errors.city}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        e.stopPropagation();
                        handleChange('city', e.target.value)
                    }}
                />
            </div>

            <div className="sm:col-span-2">
                <Input
                    label="State / Province"
                    name="state"
                    type="text"
                    value={getValue('state')}
                    isValid={!errors.state}
                    errorMessage={errors.state}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        e.stopPropagation();
                        handleChange('state', e.target.value)
                    }}
                />
            </div>

            <div className="sm:col-span-2">
                <Input
                    label="Zip / Postal code"
                    name="zip"
                    type="text"
                    value={getValue('pinCode')}
                    isValid={!errors.pinCode}
                    errorMessage={errors.pinCode}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        e.stopPropagation();
                        handleChange('pinCode', e.target.value)
                    }}
                />
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6 w-full col-span-full">
                <FooterBtns handleNext={handleNext} handlePrev={handlePrev} isValid={isFormValid} obj={personalInfo} showNext={true} showPrev={false} />
            </div>
        </FormLayout>
    )
}
