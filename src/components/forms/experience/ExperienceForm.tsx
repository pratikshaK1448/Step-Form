import React, { useState, useEffect } from 'react';
import { ITableHeader } from '../../../ui/ui.types';
import Table from '../../../ui/Table';
import uniqid from 'uniqid';
import useGetStepConfigs from '../../../hooks/useGetStepConfigs';
import { useSelector } from 'react-redux';
import { CheckCircleIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import AddNew from '../../common/AddNew';
import SingleCell from '../../../ui/SingleCell';
import FooterBtns from '../../common/FooterBtns';
import RowSetBtns from '../../common/RowSetBtns';

const validateExperienceEntry = (entry: any) => {
    const { company, jobTitle, duration } = entry;
    return (
        company.trim() !== '' &&
        jobTitle.trim() !== '' &&
        duration.trim() !== ''
    );
};

const validateExperienceData = (data: any) => data.every(validateExperienceEntry);

function ExperienceForm() {
    const { handleNext, handlePrev, activeStepId, steps } = useGetStepConfigs();
    const data = useSelector((state: any) => state?.userInfo);
    const [experienceData, setExperienceData] = useState(data[activeStepId]?.experience || []);
    const [editId, setEditId] = useState('');
    const [errors, setErrors] = useState<Record<string, Record<string, string>>>({});
    const [canAddNew, setCanAddNew] = useState(true);

    useEffect(() => {
        const isValid = validateExperienceData(experienceData);
        setCanAddNew(isValid);
    }, [experienceData]);

    const headers: ITableHeader[] = [
        { id: 'companyName', name: 'Company Name' },
        { id: 'jobTitle', name: 'Job Title' },
        { id: 'duration', name: 'Duration' }
    ];

    const experienceFactory = () => ({
        id: uniqid(),
        company: '',
        jobTitle: '',
        duration: ''
    });

    const handleOnChange = (editId: string, prop: string, value: string) => {
        const rowIndex = experienceData.findIndex((exp: any) => exp.id === editId);
        const updatedData = [...experienceData];
        updatedData[rowIndex][prop] = value;
        setExperienceData(updatedData);
        validateField(editId, prop, value);
    };

    const createNewExperience = () => {
        if (canAddNew) {
            const newExperience = experienceFactory();
            setExperienceData([...experienceData, newExperience]);
            setEditId(newExperience.id);
        }
    };

    const handleDelete = (id: string) => {
        const updatedExperience = experienceData.filter((exp: any) => exp.id !== id);
        setExperienceData(updatedExperience);
        setEditId('');
    };

    const validateField = (editId: string, prop: string, value: string) => {
        let errorMessage = '';

        if (value.trim() === '') {
            errorMessage = `${prop.replace(/([A-Z])/g, ' $1')} is required.`;
        }

        setErrors(prev => ({
            ...prev,
            [editId]: {
                ...prev[editId],
                [prop]: errorMessage
            }
        }));

        const hasErrors = Object.values(errors).some(fieldErrors =>
            Object.values(fieldErrors).some(errorMsg => errorMsg !== '')
        );

        setCanAddNew(!hasErrors);
    };

    const isRowValid = (id: string) => {
        return !Object.values(errors[id] || {}).some(error => error !== '');
    };

    const isValid = validateExperienceData(experienceData);

    return (
        <div>
            {
                !experienceData.length ? (
                    <div className='h-[50vh] flex items-center justify-center'>
                        <AddNew label='Add relevant experience' addNewCb={createNewExperience} />
                    </div>
                ) : (
                    <Table label='Relevant Experience' description='Enter work experience from latest to oldest.' headers={headers} createNew={createNewExperience}>
                        {
                            experienceData.map((exp: any) => (
                                <tr key={exp.id} id={exp.id}>
                                    <SingleCell errors={errors} editId={editId} handleOnChange={handleOnChange} obj={exp} prop="company" />
                                    <SingleCell errors={errors} editId={editId} handleOnChange={handleOnChange} obj={exp} prop="jobTitle" />
                                    <SingleCell errors={errors} editId={editId} handleOnChange={handleOnChange} obj={exp} prop="duration" />
                                    <RowSetBtns editId={editId} handleDelete={handleDelete} isRowValid={isRowValid} isValid={isValid} obj={exp} setEditId={setEditId} />
                                </tr>
                            ))
                            }
                        </Table>
                )
            }
            <div className="mt-6 flex items-center justify-end gap-x-6 w-full">
                <FooterBtns handleNext={handleNext} handlePrev={handlePrev} obj={{ experience: experienceData }} isValid={isValid} showNext={activeStepId !== steps?.length - 1} showPrev={activeStepId !== 0} />
            </div>
        </div>
    );
}

export default ExperienceForm;
