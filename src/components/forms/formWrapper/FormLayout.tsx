import React from 'react'
import { IFormLayout } from './formWrapper.types'
import { useDispatch, useSelector } from 'react-redux'
import { updateActiveStepId, updateStep } from '../../../redux/actions/updateStep.action';

function FormLayout({ children, label, description = '' }: IFormLayout) {

    return (
        <form>
            <div className="space-y-12">

                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">{label}</h2>
                    {description && <p className="mt-2 text-sm text-gray-700">
                        {description}
                    </p>}
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        {children}
                    </div>
                </div>
            </div>

        </form>
    )
}

export default FormLayout