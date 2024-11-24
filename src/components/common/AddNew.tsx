import { PlusCircleIcon } from '@heroicons/react/24/outline';
import React from 'react'

function AddNew({ addNewCb, label }: { addNewCb: () => void, label: string }) {
    return (
        <div className='flex items-center flex-col'>
            <span className='w-16 inline-block' onClick={(e) => {
                e.stopPropagation();
                addNewCb();
            }}>
                <PlusCircleIcon className="stroke-indigo-600 opacity-50 hover:opacity-100 hover:stroke-indigo-900 cursor-pointer" />
            </span>
            <span>{label}</span>
        </div>
    )
}

export default AddNew