import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../Hooks/useForm';
import { cursosGetAll } from '../../Services/restCallCursos';
import { docentesGetAll } from '../../Services/restCallDocentes';
import { materiasGetAll } from '../../Services/restCallMaterias';
import { periodosGetAll } from '../../Services/restCallPeriodos';
import {
    cleanActiveClase,
    startNewClase,
    startUpdateClase
} from '../../Store/Clase/Actions/Clase';
import { AgregarPeriodos } from '../../Template/AgregarPeriodos';
import { claseModel } from '../../Utils/Model/claseModel';

export const ClasesSave = () => {
    const dispatch = useDispatch();

    const { active } = useSelector( state => state.clase );

    const [
        formValues,
        handleInputChange, ,
        handleObjectChange
    ] = useForm( active );

    const [ cursosList, setCursosList ] = useState([]);
    const [ docentesList, setDocentesList ] = useState([]);
    const [ materiasList, setMateriasList ] = useState([]);
    const [ periodosList, setPeriodosList ] = useState([]);

    const handleListGetAll = async () => {
        setCursosList( await cursosGetAll() );
        setDocentesList( await docentesGetAll() );
        setMateriasList( await materiasGetAll() );
        setPeriodosList( await periodosGetAll('CicloLectivo') );
    }

    useEffect(() => {
        handleListGetAll();
    }, [])
    

    const {
        docente,
        materia,
        periodo,
        curso,
        dias,
        horarioInicio,
        horarioFin
    } = formValues;

    const handleAddclase = ( e ) => {
        e.preventDefault();
        dispatch( startNewClase( formValues ) );
        dispatch( cleanActiveClase() );
    }

    const handleEditclase = ( e ) => {
        e.preventDefault();
        dispatch( startUpdateClase( formValues ) );
        dispatch( cleanActiveClase() );
    }

    const back = ( e ) => {
        e.preventDefault();
        dispatch( cleanActiveClase() );
    }
    
    return (
        <div>
            <div>
                <label htmlFor="dias">Dias</label>
                <select
                    id="dias"
                    name="dias"
                    value={ dias }
                    onChange={ handleInputChange }
                >
                    <option value="">Selecione un Dia</option>
                    <option value="Domingo">Domingo</option>
                    <option value="Lunes">Lunes</option>
                    <option value="Martes">Martes</option>
                    <option value="Miercoles">Miercoles</option>
                    <option value="Jueves">Jueves</option>
                    <option value="Viernes">Viernes</option>
                    <option value="Sabado">Sabado</option>
                </select>
            </div>
            <div>
                <label htmlFor="horarioInicio">Horario Inicio</label>
                <input
                    id="horarioInicio"
                    type="time"
                    name="horarioInicio"
                    value={ horarioInicio }
                    onChange={ handleInputChange }
                />
            </div>
            <div>
                <label htmlFor="horarioInicio">Horario Fin</label>
                <input
                    id="horarioFin"
                    type="time"
                    name="horarioFin"
                    value={ horarioFin }
                    onChange={ handleInputChange }
                />
            </div>
            <div>
                <label htmlFor="periodo">Periodo</label>
                <AgregarPeriodos />
                <select
                    id="periodo"
                    name="periodo"
                    value={ periodo }
                    onChange={ handleObjectChange }
                >
                    <option value="">Selecione un periodo</option>
                    { periodosList.map(( p ) => (
                        <option key={ p.id } value={ p.id }>
                            { `${ p.descripcion }` }
                        </option>
                    )) }
                </select>
            </div>
            <div>
                <label htmlFor="curso">Curso</label>
                <select
                    id="curso"
                    name="curso"
                    value={ curso }
                    onChange={ handleObjectChange }
                >
                    <option value="">Selecione un curso</option>
                    { cursosList.map((c) => (
                        <option key={ c.id } value={ c.id }>
                            { `${ c.aula_descripcion }` }
                        </option>
                    )) }
                </select>
            </div>
            <div>
                <label htmlFor="docentes">Docente</label>
                <select
                    id="docentes"
                    name="docente"
                    value={ docente }
                    onChange={ handleObjectChange }
                >
                    <option value="" disabled>selecione un docente</option>
                    { docentesList.map((d) => (
                        <option key={ d.documento } value={ d.documento }>
                            { `${ d.nombre } ${ d.apellido }` }
                        </option>
                    )) }
                </select>
            </div>
            <div>
                <label htmlFor="materias">Materias</label>
                <select
                    id="materias"
                    name="materia"
                    value={ materia }
                    onChange={ handleObjectChange }
                >
                    <option value="" disabled>selecione una materia</option>
                    { materiasList.map((m) => (
                        <option key={ m.id } value={ m.id }>
                            { `${ m.descripcion }` }
                        </option>
                    )) }
                </select>
            </div>
            <div>
                {
                    active === claseModel
                    ? (
                        <button onClick={ handleAddclase }>
                            Guardar
                        </button>
                    )
                    :  (
                        <button onClick={ handleEditclase }>
                            Editar
                        </button>
                    )
                }
            </div>
            <div>
                <button onClick={ back }>Volver</button>
            </div>
        </div>
    )
}
