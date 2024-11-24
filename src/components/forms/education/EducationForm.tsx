import { useState, useEffect } from 'react';
import Table from '../../../ui/Table';
import { ITableHeader } from '../../../ui/ui.types';
import useGetStepConfigs from '../../../hooks/useGetStepConfigs';
import { useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { CheckCircleIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/outline';
import AddNew from '../../common/AddNew';
import SingleCell from '../../../ui/SingleCell';
import RowSetBtns from '../../common/RowSetBtns';



function EducationForm() {
    const { handleNext, handlePrev, activeStepId } = useGetStepConfigs();
    const data = useSelector((state: any) => state?.userInfo);
    const [educationData, setEducationData] = useState(data[activeStepId]?.education || []);
    const [editId, setEditId] = useState('');
    const [errors, setErrors] = useState<Record<string, Record<string, string>>>({});
    const [canAddNew, setCanAddNew] = useState(true);

    useEffect(() => {
        const hasInvalidRow = educationData.some((edu: any) => !validateEducationEntry(edu, educationData.indexOf(edu), educationData));
        setCanAddNew(!hasInvalidRow);
    }, [educationData]);

    const headers: ITableHeader[] = [
        { id: 'schoolName', name: 'School/ Institute Name' },
        { id: 'univeristyName', name: 'Board/ University Name' },
        { id: 'CGPA', name: 'CGPA' },
        { id: 'passingYear', name: 'Passing Year' }
    ];

    const educationFactory = () => ({
        id: uniqid(),
        schoolName: '',
        univeristyName: '',
        CGPA: '',
        passingYear: ''
    });

    const handleOnChange = (editId: string, prop: string, value: string) => {
        const rowIndex = educationData.findIndex((edu: any) => edu.id === editId);
        const updatedData = [...educationData];
        updatedData[rowIndex][prop] = value;
        setEducationData(updatedData);
        validateField(editId, prop, value);
    };

    const createNewEducation = () => {
        if (canAddNew) {
            const newEducation = educationFactory();
            setEducationData([...educationData, newEducation]);
            setEditId(newEducation.id);
        }
    };

    const handleDelete = (id: string) => {
        const updatedEducation = educationData.filter(edu => edu.id !== id);
        setEducationData(updatedEducation);
        setEditId('');
    };

    const validateField = (editId: string, prop: string, value: string) => {
        let errorMessage = '';
        const currentYear = new Date().getFullYear();
        const rowIndex = educationData.findIndex(edu => edu.id === editId);
        const updatedData = [...educationData];
        updatedData[rowIndex][prop] = value;

        switch (prop) {
            case 'schoolName':
                if (value.trim() === '') {
                    errorMessage = 'School name cannot be empty.';
                }
                break;
            case 'univeristyName':
                if (value.trim() === '') {
                    errorMessage = 'University name cannot be empty.';
                }
                break;
            case 'CGPA':
                if (isNaN(Number(value)) || Number(value) > 10) {
                    errorMessage = 'CGPA between 0 and 10.';
                }
                break;
            case 'passingYear':
                if (!/^\d{4}$/.test(value) || Number(value) > currentYear) {
                    errorMessage = 'Invalid passing year.';
                } else if (rowIndex > 0 && Number(value) >= Number(updatedData[rowIndex - 1].passingYear)) {
                    errorMessage = 'Enter education latest to oldest';
                }
                break;
        }

        setErrors(prev => ({
            ...prev,
            [editId]: {
                ...prev[editId],
                [prop]: errorMessage
            }
        }));
    };

    const validateEducationEntry = (entry: any, index: number, array: any[]) => {
        const currentYear = new Date().getFullYear();
        const { schoolName, univeristyName, CGPA, passingYear } = entry;
        const isValidYear = /^\d{4}$/.test(passingYear) && passingYear <= currentYear;
        const isDescendingOrder = index === 0 || array[index - 1].passingYear > passingYear;

        return (
            schoolName.trim() !== '' &&
            univeristyName.trim() !== '' &&
            !isNaN(Number(CGPA)) && Number(CGPA) <= 10 &&
            isValidYear &&
            isDescendingOrder
        );
    };

    const validateEducationData = (data: any) => data.every(validateEducationEntry);

    const isValid = validateEducationData(educationData);

    return (
        <>
            {!educationData.length ? (
                <div className='h-[50vh] flex items-center justify-center'>
                    <AddNew label='Add education details' addNewCb={createNewEducation} />
                </div>
            ) : (
                <Table label='Add Education' description='Add education from latest to oldest.' headers={headers} createNew={createNewEducation}>
                    {educationData.map((edu: any) => (
                        <tr key={edu.id} id={edu.id}>
                            <SingleCell editId={editId} errors={errors} handleOnChange={handleOnChange} obj={edu} prop='schoolName' />
                            <SingleCell editId={editId} errors={errors} handleOnChange={handleOnChange} obj={edu} prop='univeristyName' />
                            <SingleCell editId={editId} errors={errors} handleOnChange={handleOnChange} obj={edu} prop='CGPA' />
                            <SingleCell editId={editId} errors={errors} handleOnChange={handleOnChange} obj={edu} prop='passingYear' />
                            <RowSetBtns editId={editId} handleDelete={handleDelete} isValid={isValid} obj={edu} setEditId={setEditId} />
                        </tr>
                    ))}
                </Table>
            )}
            <div className="mt-6 flex items-center justify-end gap-x-6 w-full">
                <button disabled={!isValid}
                    className={`rounded-md px-3 py-2 text-sm font-semibold text-indigo-600 border-1 border border-indigo-600 shadow-sm 
                        ${isValid ? 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' : 'bg-gray-300 cursor-not-allowed'}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        handlePrev({ education: educationData });
                    }}>
                    Back
                </button>
                <button
                    disabled={!isValid}
                    className={`rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm 
                        ${isValid ? 'bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' : 'bg-gray-300 cursor-not-allowed'}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleNext({ education: educationData });
                    }}
                >
                    Next
                </button>
            </div>
        </>
    );
}

export default EducationForm;
