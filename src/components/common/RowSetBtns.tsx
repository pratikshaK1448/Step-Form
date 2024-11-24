import { CheckCircleIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import React from 'react'

function RowSetBtns({
    editId,
    obj,
    setEditId,
    isRowValid,
    isValid,
    handleDelete
}: {
    editId: string,
    obj: any,
    setEditId: any,
    isRowValid?: any,
    isValid: boolean,
    handleDelete: any
}) {
    return (
        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0 flex gap-2 items-center">
            {editId !== obj.id ? (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setEditId(obj.id);
                    }}
                    className={`text-indigo-600 hover:text-indigo-900 ${isValid ? '' : 'cursor-not-allowed'}`}
                    disabled={!isValid}
                >
                    <span className='inline-block w-6'>
                        <PencilIcon />
                    </span>
                </button>
            ) : (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setEditId('');
                    }}
                    className={isValid ? "text-indigo-600 hover:text-indigo-900" : 'text-gray-600 cursor-not-allowed'}
                    disabled={!isValid}
                >
                        <span className='inline-block w-6'>
                        <CheckCircleIcon />
                    </span>
                </button>
            )}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(obj.id);
                }}
                className="text-indigo-600 hover:text-indigo-900"
            >
                <span className='inline-block w-4'>
                    <TrashIcon />
                </span>
            </button>
        </td>
    )
}

export default RowSetBtns