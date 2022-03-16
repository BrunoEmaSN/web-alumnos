import React, { useContext, useEffect, useState } from 'react'
import { useForm } from '../../Hooks/useForm';
import { MesasExamenesNovedadesSave } from './MesasExamenesNovedadesSave';
import { periodosGetAll } from '../../Services/restCallPeriodos';
import { mesaExamenModel } from '../../Utils/Model/mesaExamenModel';
import { AgregarPeriodos } from '../../Template/AgregarPeriodos';
import { MesasExamenesContext } from '../../Context/BuildContext';

export const MesasExamenesMaestrosSave = () => {
    const {
        active,
        handleAddMesaExamen,
        handleEditMesaExamen,
        handleBack
    } = useContext(MesasExamenesContext);

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
                        <button onClick={ () => handleAddMesaExamen(formValues) } >
                            Guardar
                        </button>
                    )
                    : (
                        <button onClick={ () => handleEditMesaExamen(formValues) } >
                            Editar
                        </button>
                    )
                }
            </div>
            <div>
                <button onClick={ handleBack }>
                    Volver
                </button>
            </div>
        </div>
    )
}
