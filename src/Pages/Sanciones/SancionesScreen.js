import React, { useContext } from 'react';

import moment from 'moment';
import { SancionModal } from './SancionesModal';
import { SancionesContext } from '../../Context/BuildContext';
import { SancionesState } from '../../Context/SancionesState';

const Sanciones = () => {
    const {sanciones, handleUpdate, isOpenModal, closeModal} = useContext(SancionesContext);
    
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

export const SancionesScreen = () => {
    return (
        <SancionesState>
            <Sanciones />
        </SancionesState>
    );
}