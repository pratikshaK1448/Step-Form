import { useState } from 'react';
import { ITextArea } from './ui.types';

export default function TextArea({ saveBtnText, title, ...rest }: ITextArea) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className='relative'>
            <label className="block text-sm font-medium leading-6 text-gray-900 mb-2">
                {title}
            </label>
            <div className="overflow-hidden rounded-lg pl-2 pt-2 border border-gray-300 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                <textarea
                    id="description"
                    name="description"
                    rows={4}
                    className="block w-full focus:outline-none resize-none border-0 py-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    {...rest}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />

                <div aria-hidden="true">
                    <div className="py-2">
                        <div className="h-9" />
                    </div>
                    <div className="h-px" />
                    <div className="py-2">
                        <div className="py-px">
                            <div className="h-9" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute inset-x-px bottom-0">
                <div className="flex items-center justify-end space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3">
                    <div className="flex-shrink-0">
                        <button
                            type='button'
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                            className={`inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${isFocused ? 'bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600' : 'bg-gray-300 cursor-not-allowed'}`}
                            disabled={!isFocused}
                        >
                            {saveBtnText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
