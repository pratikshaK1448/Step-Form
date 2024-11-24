import React from 'react'

function FooterBtns({ isValid, obj, handlePrev, handleNext, showNext, showPrev }: {
    isValid: boolean,
    obj: any,
    handlePrev: any,
    handleNext: any,
    showPrev: boolean,
    showNext: boolean
}) {
    return (
        <>
            {showPrev && <button
                disabled={!isValid}
                className={`rounded-md px-3 py-2 text-sm font-semibold text-indigo-600 border-1 border border-indigo-600 shadow-sm 
                    ${isValid ? 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' : 'bg-gray-300 cursor-not-allowed'}`}
                onClick={(e) => {
                    e.stopPropagation();
                    handlePrev(obj);
                }}
            >
                Back
            </button>}
            {
                showNext && <button
                    disabled={!isValid}
                    className={`rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm ${isValid ? 'bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' : 'bg-gray-300 cursor-not-allowed'}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleNext(obj);
                    }}
                >
                    Next
                </button>
            }

        </>
    )
}

export default FooterBtns