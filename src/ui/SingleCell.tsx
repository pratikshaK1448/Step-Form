import React from 'react'

function SingleCell({ editId, obj, prop, handleOnChange, errors }: {
    editId: string,
    obj: any,
    handleOnChange: any,
    errors: any,
    prop: string
}) {
    return (
        <td className="w-[200px] px-3 py-4 text-sm text-gray-500">
            <div className="relative">
                {editId === obj.id ? (
                    <input
                        className="w-full p-2 border border-gray-300 rounded text-sm font-medium text-gray-900"
                        value={obj[prop]}
                        onChange={(e) => handleOnChange(obj?.id, prop, e.target.value)}
                        aria-invalid={errors?.[obj?.id]?.[prop] ? true : false}
                        aria-describedby={`${obj?.id}-${prop}-error`}
                    />
                ) : (
                    <span className="w-full p-2 inline-block text-sm font-medium text-gray-900">{obj?.[prop]}</span>
                )}
                <div className="absolute inset-x-0 text-red-600 text-sm">
                    {errors?.[obj?.id]?.[prop] && (
                        <p id={`${obj?.id}-${prop}-error`}>{errors?.[obj?.id]?.[prop]}</p>
                    )}
                </div>
            </div>
        </td>
    )
}

export default SingleCell