import { PhotoIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { IUploadFile } from './ui.types'

function FileUpload({ label, onFileChange }: IUploadFile) {
    return (
        <div className="col-span-full">
            <label className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                    <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={onFileChange} />
                        </label>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">PDF up to 5MB</p>
                </div>
            </div>
        </div>

    )
}

export default FileUpload