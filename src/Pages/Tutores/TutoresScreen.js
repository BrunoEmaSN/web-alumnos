import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTutores } from '../../Store/Tutor/Actions/Tutor';
import { Tutor1 } from '../../Utils/tutorModel';
import { TutoresList } from './TutoresList';
import { TutoresSave } from './TutoresSave';

export const TutoresScreen = () => {
    const dispatch = useDispatch();

    const { active } = useSelector( state => state.tutor );

    useEffect(() => {
        dispatch( getTutores( Tutor1 ) );
    }, []);

    return (
        <div>
            { Object.entries(active).length ? <TutoresSave /> : <TutoresList /> }
        </div>
    );
};
