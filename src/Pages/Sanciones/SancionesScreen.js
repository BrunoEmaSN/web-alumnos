import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useModal } from '../../Hooks/useModal';
import { SancionModal } from './SancionesModal';
import { activeSancion, getSanciones, startDeletingSancion } from '../../Store/Sancion/Actions/Sancion';
import { Sancion1 } from '../../Utils/sancionModel';

const actions = {
    create: 'Create',
    edit: 'Edit'
};

export const SancionesScreen = () => {
    const dispatch = useDispatch();

    const { sanciones } = useSelector( state => state.sancion );
    const [ isOpenModal, openModal, closeModal ] = useModal( false );
    const [ action, setAction ] = useState('');

    const handleUpdate = ( a ) => {
        setAction( actions.edit );
        dispatch( activeSancion( a ) );
        openModal();
    }

    const handleDelete = ( id ) => {
        dispatch( startDeletingSancion( id ) );
    }

    useEffect(() => {
        dispatch( getSanciones( Sancion1 ) );
    }, [dispatch]);
    
    return (
        <div>
            <h1>sancionesList</h1>
            {
                sanciones.map( s => <div key={ s.id }>
                    { `${ s.id } ${ s.descripcion } : ${ s.fecha }` }
                    <button onClick={  () => { handleUpdate( s ) }  }>Edit</button>
                    <button onClick={  () => { handleDelete( s.id ) }  }>Delete</button>
                </div>)
            }
            {
                isOpenModal && <SancionModal
                    isOpenModal={ isOpenModal }
                    closeModal={ closeModal }
                    action={ action }
                />
            }
        </div>
    )
};