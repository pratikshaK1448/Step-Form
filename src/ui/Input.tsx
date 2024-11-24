import React from 'react'
import { Iinput } from './ui.types'
import { classNames } from '../utils/common-utils'

function Input(props: Iinput) {
    const { label, type, name, className, onChange, value, isValid, errorMessage, ...rest } = props    
    return (
        <>
            <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2">
                {
                    type === 'link' ? (
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">https://</span>
                            <input
                                id={name}
                                name={name}
                                type="text"
                                placeholder="www.example.com"
                                onChange={onChange}
                                value={value}
                                aria-invalid={!isValid}
                                aria-describedby={`${name}-error`}
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                {...rest}
                            />
                        </div>
                    ) : (
                        <input
                                value={value}
                                id={name}
                                name={name}
                                type={type}
                                onChange={onChange}
                                aria-invalid={!isValid}
                                aria-describedby={`${name}-error`}
                                className={classNames(
                                    "pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                    className ? className : ''
                                )}
                                {...rest}
                            />
                        )
                }
                {!isValid && errorMessage && (
                    <p id={`${name}-error`} className="mt-2 text-sm text-red-600">{errorMessage}</p>
                )}
            </div>
        </>
    )
}

export default Input
