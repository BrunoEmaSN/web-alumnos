import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import moment from 'moment';
import { useModal } from '../../Hooks/useModal';
import { SancionModal } from './SancionesModal';
import { startLoadingSanciones, startSetActive } from '../../Store/Sancion/Actions/Sancion';

export const SancionesScreen = () => {
    const dispatch = useDispatch();

    const { sanciones } = useSelector( state => state.sancion );
    const [ isOpenModal, openModal, closeModal ] = useModal( false );

    const handleUpdate = ( sancion ) => {
        dispatch( startSetActive( sancion ) );
        openModal();
    }

    useEffect(() => {
        dispatch( startLoadingSanciones() );
    }, [dispatch]);
    
    return (
        <div>
            <h1>sancionesList</h1>
            {
                sanciones.map( s => <div key={ s.id }>
                    { `${ s.id } ${ s.descripcion } : ${ moment(s.fecha).format('yyyy-MM-DD') }` }
                    <button onClick={  () => { handleUpdate( s ) }  }>Edit</button>
                </div>)
            }
            {
                isOpenModal && <SancionModal
                    isOpenModal={ isOpenModal }
                    closeModal={ closeModal }
                />
            }
        </div>
    )
};