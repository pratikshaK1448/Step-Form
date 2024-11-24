import React from 'react'
import SectionHeading from '../../ui/SectionHeadings'
import Panels from '../../ui/Panels';
import { Iheader } from './header.types';
import { useDispatch, useSelector } from 'react-redux';
import { updateActiveStepId, updateStep } from '../../redux/actions/updateStep.action';
import { Step } from '../../redux/types';

function Header() {
    const dispatch = useDispatch();
    const { steps } = useSelector((state: any) => state?.configData)
    const handleUpdateStep = (id: number, steps: Step[]) => {
        dispatch(updateStep({ id, steps }));
    }
    return (
        <header className='px-4 sticky top-0 left-0 bg-white'>
            <Panels steps={steps}
                handleUpdateStep={handleUpdateStep}
            />
        </header>
    )
}

export default Header;