import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitApplication } from '../../../redux/actions/updateStep.action';
import Modal from '../../../ui/Modals';

const Review = () => {
    const data = useSelector((state: any) => state?.userInfo);
    const [submit, setSubmit] = useState(false);
    const [personalInfo, education, experience, additionalInfo, documents] = data;
    const dispatch = useDispatch();
    const organizations = additionalInfo?.certification?.map((item: any) => item.organization);
    console.log(submit)
    return (
        <>
            <Modal status={submit} />
            <div className='max-w-[60%] mx-auto py-2 mt-4'>
        <div className="p-6 bg-white rounded-lg shadow-md">
                    <section className='flex justify-between'>
                        <h2 className="text-2xl font-bold mb-4" >Application Preview</h2>
                        <div>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSubmit(true);
                                }}
                                className='bg-indigo-600 text-white rounded-md px-6 py-3'>Submit application</button>
                        </div>
                    </section>


            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
                <div className='ml-6'>
                    <p><strong>First Name:</strong> {personalInfo.firstName}</p>
                    <p><strong>Last Name:</strong> {personalInfo.lastName}</p>
                    <p><strong>Email:</strong> {personalInfo.email}</p>
                    <p><strong>Phone:</strong> {personalInfo.phone}</p>
                    <p><strong>Address:</strong> {personalInfo.streetAddress}, {personalInfo.city}, {personalInfo.state}, {personalInfo.pinCode}</p>
                </div>
            </section>

            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <div className='ml-6'>
                            {education.education.map((edu: any) => (
                        <div key={edu.id} className="mb-4">
                            <p><strong>School Name:</strong> {edu.schoolName}</p>
                            <p><strong>University Name:</strong> {edu.univeristyName}</p>
                            <p><strong>CGPA:</strong> {edu.CGPA}</p>
                            <p><strong>Passing Year:</strong> {edu.passingYear}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <div className='ml-6'>
                            {experience.experience.map((exp: any) => (
                        <div key={exp.id} className="mb-4">
                            <p><strong>Company:</strong> {exp.company}</p>
                            <p><strong>Job Title:</strong> {exp.jobTitle}</p>
                            <p><strong>Duration:</strong> {exp.duration}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Skills and Certifications</h3>
                <div className='ml-6'>
                    <p><strong>Skills:</strong> {additionalInfo.skills.length > 0 ? additionalInfo.skills.join(', ') : 'N/A'}</p>
                    <p><strong>Certifications:</strong> {organizations.length > 0 ? organizations.join(', ') : 'N/A'}</p>
                </div>

            </section>

            <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Documents</h3>
                <div className='ml-6'>
                            <p><strong>Resume:</strong> {documents.resume.map((doc: any) => doc.name).join(', ')}</p>
                    <p><strong>Cover Letter:</strong> {documents.coverLetter}</p>
                </div>
            </section>
        </div>
            </div>
        </>
    );
};

export default Review;
