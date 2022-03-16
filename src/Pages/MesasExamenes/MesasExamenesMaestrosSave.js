import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../Hooks/useForm';
import {
    cleanActiveMesaExamen,
    startNewMesaExamen,
    startUpdateMesaExamen
} from '../../Store/MesaExamen/Actions/MesaExamen';
import { MesasExamenesNovedadesSave } from './MesasExamenesNovedadesSave';
import { periodosGetAll } from '../../Services/restCallPeriodos';
import { mesaExamenModel } from '../../Utils/Model/mesaExamenModel';
import { AgregarPeriodos } from '../../Template/AgregarPeriodos';

export const MesasExamenesMaestrosSave = () => {
    const dispatch = useDispatch();

    const { active } = useSelector( state => state.mesaExamen );
    const [ formValues, handleInputChange ] = useForm( active.maestro );
    const [ novedad, setNovedad ] = useState( active.novedad );
    const [ periodoList, setPeriodoList ] = useState([]);
    
    const handleListGetAll = async () => {
        setPeriodoList( await periodosGetAll() );
    }

    useEffect(() => {
        handleListGetAll()
    }, [])
    
    
    const {
        descripcion,
        periodo_id
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
                <input
                    type="text"
                    id="descripcion"
                    name="descripcion"
                    value={descripcion}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="periodo_id">Perido</label>
                <AgregarPeriodos />
                <select
                    id="periodo_id"
                    name="periodo_id"
                    value={ periodo_id }
                    onChange={ handleInputChange }
                >
                    <option value="" disabled>Selecione un Periodo</option>
                    {periodoList.map((p) => (
                        <option value={p.id} key={p.id}>
                            {p.descripcion}
                        </option>
                    ))}
                </select>
            </div>
            <MesasExamenesNovedadesSave
                novedad={ novedad }
                setNovedad={ setNovedad }
            />
            <div>
                {
                    active === mesaExamenModel
                    ? (
                        <button onClick={ handleAddMesaExamen } >
                            Guardar
                        </button>
                    )
                    : (
                        <button onClick={ handleEditMesaExamen } >
                            Editar
                        </button>
                    )
                }
            </div>
            <div>
                <button onClick={ back }>
                    Volver
                </button>
            </div>
        </div>
    )
}
