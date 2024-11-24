import React from 'react'
import TextArea from '../../../ui/TextArea'
import { IAddInfo } from './additionalInfo.types'

function CoverLetter({ coverLetter, setCoverLetter }: IAddInfo) {
    return (
        <>
            <TextArea title='Cover letter'
                saveBtnText='Save cover lettter'
                placeholder="Type cover letter"
                value={coverLetter}
                onChange={(e) => {
                    e.stopPropagation();
                    setCoverLetter(e.target.value)
                }} />
        </>
    )
}

export default CoverLetter