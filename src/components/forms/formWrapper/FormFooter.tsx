import React from 'react'

function FormFooter(handlePrev: any, handleNext: any) {
    console.log(handleNext, handlePrev)
    return (
        <>
            <div className="mt-6 flex items-center justify-end gap-x-6 w-full">
                <button className="text-sm font-semibold leading-6 text-gray-900" onClick={(e: any) => {
                    e.stopPropagation();
                    // handlePrev()
                }}>
                    Back
                </button>
                <button
                    // type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={(e: any) => {
                        e.stopPropagation();
                        // handleNext()
                    }}
                >
                    Next
                </button>
            </div>
        </>
    )
}

export default FormFooter