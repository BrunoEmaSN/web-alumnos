import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAulas } from '../../Store/Aula/Actions/Aula';
import { Aula1 } from '../../Utils/aulaModel';

import { activeAula, startDeletingAula } from '../../Store/Aula/Actions/Aula';
import { aulaModel } from '../../Utils/aulaModel';
import { useModal } from '../../Hooks/useModal';
import { AulasModal } from './AulasModal';

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
        const lastIndex = aulas.length - 1;
        const lastId = aulas[lastIndex].id;
        aulaModel.id = lastId + 1;
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
        dispatch( getAulas( Aula1 ) );
    }, [dispatch]);
    
    return (
        <div>
            <h1>AulasList</h1>
            <button onClick={ handleCreate }>Save</button>
            {
                aulas.map( a => <div key={ a.id }>
                    { `${ a.id } ${ a.descripcion }` }
                    <button onClick={  () => { handleUpdate( a ) }  }>Edit</button>
                    <button onClick={  () => { handleDelete( a.id ) }  }>Delete</button>
                </div>)
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