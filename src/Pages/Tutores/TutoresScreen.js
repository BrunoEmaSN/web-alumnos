import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingTutores } from '../../Store/Tutor/Actions/Tutor';
import { TutoresList } from './TutoresList';
import { TutoresSave } from './TutoresSave';

export const TutoresScreen = () => {
    const dispatch = useDispatch();

    const { active } = useSelector( state => state.tutor );

    useEffect(() => {
        dispatch( startLoadingTutores() );
    }, []);

    return (
        <div>
            { Object.entries(active).length ? <TutoresSave /> : <TutoresList /> }
        </div>
    );
};
