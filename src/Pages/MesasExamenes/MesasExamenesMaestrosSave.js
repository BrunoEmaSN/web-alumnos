import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../Hooks/useForm';
import { cleanActiveMesaExamen, startNewMesaExamen, startUpdateMesaExamen } from '../../Store/MesaExamen/Actions/MesaExamen';
import { MesasExamenesNovedadesSave } from './MesasExamenesNovedadesSave';
import { mesaExamenModel } from '../../Utils/mesaExamenModel';

export const MesasExamenesMaestrosSave = () => {
    const dispatch = useDispatch();

    const { active } = useSelector( state => state.mesaExamen );

    const [ formValues, handleInputChange ] = useForm( active.maestro );
    const [ novedad, setNovedad ] = useState( active.novedad );

    const {
        descripcion,
    } = formValues;

    const handleAddMesaExamen = ( e ) => {
        e.preventDefault();
        dispatch( startNewMesaExamen( { maestro: formValues, novedad } ) );
        dispatch( cleanActiveMesaExamen() );
    }

    const handleEditMesaExamen = ( e ) => {
        e.preventDefault();
        dispatch( startUpdateMesaExamen( { maestro: formValues, novedad } ) );
        dispatch( cleanActiveMesaExamen() );
    }

    const back = ( e ) => {
        e.preventDefault();
        dispatch( cleanActiveMesaExamen() );
    }

    return (
        <div>
            <div>
                <label htmlFor="descripcion">Descripcion</label>
                <input type="text" id="descripcion" name="descripcion" value={descripcion} onChange={handleInputChange}/>
            </div>
            <MesasExamenesNovedadesSave
                novedad={ novedad }
                setNovedad={ setNovedad }
            />
            <div>
                <button onClick={ active === mesaExamenModel ? handleAddMesaExamen : handleEditMesaExamen } >
                    Save
                </button>
            </div>
            <div>
                <button onClick={ back }>
                    Volver
                </button>
            </div>
        </div>
    )
}
