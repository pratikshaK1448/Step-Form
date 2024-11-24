import React from 'react';
import { PdfFilesProps } from './additionalInfo.types';
import FileUpload from '../../../ui/FileUpload';
import { TrashIcon } from '@heroicons/react/24/outline';

const UploadResume = ({ pdfFiles, setPdfFiles }: PdfFilesProps) => {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        handleFiles(files);
    };

    const handleFiles = (files: File[]) => {
        const pdfFile = files.find((file) => file.type === 'application/pdf');
        if (pdfFile) {
            setPdfFiles([...pdfFiles, pdfFile]);
        } else {
            alert('Please upload a PDF file.');
        }
    };

    const deleteFile = (index: number) => {
        setPdfFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    return (
        <>
            {pdfFiles.length ? (
                <div className='mt-4'>
                    <span className="block text-sm font-medium leading-6 text-gray-900">
                        Resume
                    </span>
                    <ul className='flex whitespace-nowrap gap-2'>
                        {pdfFiles.map((file, index) => (
                            <li key={index} className="flex items-center gap-2">
                                {file.name}
                                <button onClick={(e) => {
                                    e.stopPropagation();
                                    deleteFile(index);
                                }}>
                                    <span className='w-6 inline-block'>
                                        <TrashIcon className="stroke-indigo-600 opacity-50 hover:opacity-100 hover:stroke-indigo-900 cursor-pointer" />
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <FileUpload
                    label='Upload Resume'
                    onFileChange={handleFileChange}
                />
            )}
        </>
    );
};

export default UploadResume;
