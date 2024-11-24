import { ChangeEvent, ReactNode } from "react";

interface Tab {
    name: string;
    href: string;
    current: boolean;
}
export interface ISectionHeading {
    tabs: Tab[];
}

export interface Step {
    id: string;
    name: string;
    description: string;
    href: string;
    status: 'complete' | 'current' | 'upcoming';
}

export interface ISteps {
    steps: Step[],
    handleUpdateStep: any
}

export interface Iinput extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    isValid?: boolean;
    errorMessage?: string;

}

export interface IUploadFile {
    label: string;
    onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ITableHeader {
    id: string;
    name: string
}
export interface ITable {
    label: string;
    description: string;
    headers: ITableHeader[];
    children: ReactNode;
    createNew: () => void;
}

export interface ITextArea extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    saveBtnText: string;
    title: string;
}