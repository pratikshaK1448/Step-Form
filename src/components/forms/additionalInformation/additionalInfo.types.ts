export interface IAddInfo {
    coverLetter: string,
    setCoverLetter: React.Dispatch<React.SetStateAction<string>>
}

export interface PdfFilesProps {
    pdfFiles: File[];
    setPdfFiles: React.Dispatch<React.SetStateAction<File[]>>;
}