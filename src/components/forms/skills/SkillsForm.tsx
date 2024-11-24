import React, { useState } from 'react';
import Input from '../../../ui/Input';
import { XMarkIcon } from '@heroicons/react/24/solid';
import useGetStepConfigs from '../../../hooks/useGetStepConfigs';
import { useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';
import AddNew from '../../common/AddNew';
import FooterBtns from '../../common/FooterBtns';

function SkillsForm() {
    const { handleNext, handlePrev, activeStepId, steps } = useGetStepConfigs();
    const data = useSelector((state: any) => state?.userInfo);
    const [skills, setSkills] = useState(data[activeStepId]?.skills);
    const [certification, setCertification] = useState(data[activeStepId]?.certification || []);
    const [newSkill, setNewSkill] = useState('');
    const [errors, setErrors] = useState<Record<string, Record<string, string>>>({});

    const createCertification = () => ({
        organization: '',
        url: '',
        id: uniqid()
    });

    const deleteSkill = (skill: string) => {
        const updatedSkills = skills.filter((s: string) => s !== skill);
        setSkills(updatedSkills);
    };

    const addSkill = (skill: string) => {
        if (skill) {
            const updatedSkills = [...new Set([...skills, skill])];
            setSkills(updatedSkills);
            setNewSkill('');
        }
    };

    const addCertifications = () => {
        const newCertificate = createCertification();
        setCertification([...certification, newCertificate]);
    };

    const handleChange = (id: string, prop: 'url' | 'organization', value: string) => {
        const updatedCertification = certification.map((cert: any) =>
            cert.id === id ? { ...cert, [prop]: value } : cert
        );
        setCertification(updatedCertification);
        validateCertification(id, prop, value);
    };

    const deleteCertification = (id: string) => {
        const updatedCertification = certification.filter((cert: any) => cert.id !== id);
        setCertification(updatedCertification);
        const newErrors: any = { ...errors };
        delete newErrors[id];
        setErrors(newErrors);
    };

    const validateCertification = (id: string, prop: 'url' | 'organization', value: string) => {
        let errorMessage = '';
        if (prop === 'organization' && !value.trim()) {
            errorMessage = 'Organization is required.';
        } else if (prop === 'url' && value.trim() && !/^https?:\/\/[^\s$.?#].[^\s]*$/i.test(value)) {
            errorMessage = 'Invalid URL format.';
        }
        setErrors((prev: any) => ({
            ...prev,
            [id]: {
                ...prev[id],
                [prop]: errorMessage
            }
        }));
    };

    const isCertificationsValid = () => {
        return certification.every((cert: any) => cert.organization.trim() !== '' && /^https?:\/\/[^\s$.?#].[^\s]*$/i.test(cert.url));
    };
    const isValid = isCertificationsValid();



    return (
        <>
            <div>
                <div className='w-1/4'>
                    <Input
                        type='text'
                        label='Skills'
                        onChange={(e) => setNewSkill(e.target.value)}
                        value={newSkill}
                        placeholder='Enter skills and press enter'
                        onKeyDown={e => {
                            if (e.key === 'Enter') {
                                addSkill(newSkill);
                            }
                        }}
                    />
                </div>
                <div className='mt-4'>
                    <ul className='flex flex-wrap gap-2'>
                        {skills?.map((skill: string) => (
                            <li key={skill} className='py-2 px-6 rounded-[25px] ring-1 ring-inset ring-gray-300 flex items-center'>
                                <span className='inline-block mr-2'>{skill}</span>
                                <span className='w-4 inline-block cursor-pointer' onClick={(e) => {
                                    e.stopPropagation();
                                    deleteSkill(skill);
                                }}>
                                    <XMarkIcon />
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <div className="flex justify-between items-center text-sm font-medium leading-6 text-gray-900">
                        <span>Certifications</span>
                        {certification.length ? <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (isCertificationsValid()) {
                                        addCertifications();
                                    }
                                }}
                                type="button"
                                className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Add certification
                            </button>
                        </div> : null}
                    </div>
                    {certification.length ? (
                        <>
                            {certification.map((details: any) => (
                                <div key={details.id}>

                                    <div className='mt-4 flex gap-4'>

                                        <div className="relative w-full">
                                            <input
                                                placeholder='Enter orgnanization'
                                                className="w-full p-2 border border-gray-300 rounded text-sm font-medium text-gray-900"
                                                value={details.organization}
                                                onChange={(e) => handleChange(details.id, 'organization', e.target.value)}
                                                aria-invalid={errors[details.id]?.organization ? true : false}
                                                aria-describedby={`${errors[details.id]?.organization}-[prop]-error`}
                                            />

                                            <div className="absolute inset-x-0 text-red-600 text-sm">
                                                {errors[details.id]?.organization && (
                                                    <p id={`${errors[details.id]?.organization}-error`}>{errors[details.id]?.organization}</p>
                                                )}
                                            </div>
                                        </div>
                                        <div className='w-full flex justify-between items-center'>
                                            <div className="relative w-full">
                                                <input
                                                    placeholder='Enter certification url'
                                                    className="w-full p-2 border border-gray-300 rounded text-sm font-medium text-gray-900"
                                                    value={details.url}
                                                    onChange={(e) => handleChange(details.id, 'url', e.target.value)}
                                                    aria-invalid={errors[details.id]?.url ? true : false}
                                                    aria-describedby={`${errors[details.id]?.url}-[prop]-error`}
                                                />

                                                <div className="absolute inset-x-0 text-red-600 text-sm">
                                                    {errors[details.id]?.url && (
                                                        <p id={`${errors[details.id]?.url}-error`}>{errors[details.id]?.url}</p>
                                                    )}
                                                </div>
                                            </div>

                                            <button className='ml-4' onClick={(e) => {
                                                        e.stopPropagation();
                                                        deleteCertification(details.id);
                                                    }}>
                                                        <span className='w-6 inline-block'>
                                                    <TrashIcon className="stroke-indigo-600 hover:opacity-100 hover:stroke-indigo-900 cursor-pointer" />
                                                        </span>
                                                    </button>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                            <div className='h-[38vh] flex items-center justify-center'>
                            <AddNew label='Add certificates' addNewCb={addCertifications} />
                            </div>
                    )}
                </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6 w-full">
                <FooterBtns handleNext={handleNext} handlePrev={handlePrev} isValid={isValid} obj={{ skills, certification }} showNext={true} showPrev={true} />
            </div>
        </>
    );
}

export default SkillsForm;
