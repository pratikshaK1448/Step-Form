import { ITable } from "./ui.types"

const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
]

export default function Table({ label, description, headers, children, createNew }: ITable) {
    const cols = headers.length;
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">{label}</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        {description}
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            createNew();
                        }}
                        type="button"
                        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        {label}
                    </button>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    {
                                        headers?.map(header => <th key={header.id} scope="col" className="py-3.5 w-[200px] px-3 text-left text-sm font-semibold text-gray-900">
                                            {header.name}
                                        </th>)
                                    }
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {
                                    children
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
