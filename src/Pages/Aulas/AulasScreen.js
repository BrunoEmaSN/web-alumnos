import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingAulas } from '../../Store/Aula/Actions/Aula';

import {
    activeAula,
    startDeletingAula
} from '../../Store/Aula/Actions/Aula';
import { useModal } from '../../Hooks/useModal';
import { AulasModal } from './AulasModal';
import { aulaModel } from '../../Utils/Model/aulaModel';

const actions = {
    create: 'Create',
    edit: 'Edit'
};

export const AulasScreen = () => {
    const dispatch = useDispatch();

    const { aulas } = useSelector( state => state.aula );
    const [ isOpenModal, openModal, closeModal ] = useModal( false );
    const [ action, setAction ] = useState('');

    const handleCreate = () => {
        setAction( actions.create );
        dispatch( activeAula( aulaModel ) );
        openModal();
    }

    const handleUpdate = ( a ) => {
        setAction( actions.edit );
        dispatch( activeAula( a ) );
        openModal();
    }

    const handleDelete = ( id ) => {
        dispatch( startDeletingAula( id ) );
    }

    useEffect(() => {
        dispatch( startLoadingAulas() );
    }, [dispatch]);
    
    return (
        <div>
            <h1>AulasList</h1>
            <button onClick={ handleCreate }>Save</button>
            {
                aulas.map( a => (
                    a.estado !== 0 && (
                        <div key={ a.id }>
                            { `${ a.id } ${ a.descripcion }` }
                            <button onClick={ 
                                () => { handleUpdate( a ) } 
                            }>
                                Edit
                            </button>
                            <button onClick={ 
                                () => { handleDelete( a.id ) } 
                            }>
                                Delete
                            </button>
                        </div>
                    )
                ))
            }
            {
                isOpenModal && <AulasModal
                    isOpenModal={ isOpenModal }
                    closeModal={ closeModal }
                    action={ action }
                />
            }
        </div>
    )
};