import React, { ReactNode } from "react";

export interface IFormWrapper {

}
export interface IFormLayout {
    children: ReactNode;
    label: string;
    description?: string;
}