import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../Hooks/useForm';
import { cleanActiveClase, startNewClase, startUpdateClase } from '../../Store/Clase/Actions/Clase';
import { claseModel } from '../../Utils/claseModel';
import { Curso2 } from '../../Utils/cursoModel';
import { Docente2 } from '../../Utils/docenteModel';
import { Materia2 } from '../../Utils/materiaModel';
import { Periodo1 } from '../../Utils/periodoModel';

export const ClasesSave = () => {
    const dispatch = useDispatch();

    const { active } = useSelector( state => state.clase );

    const [ formValues, handleInputChange ] = useForm( active );

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
                <select id="dias" name="dias" value={ dias } onChange={ handleInputChange }>
                    <option value="">Selecione un Dia</option>
                    <option value="domingo">Domingo</option>
                    <option value="lunes">Lunes</option>
                    <option value="martes">Martes</option>
                    <option value="miercoles">Miercoles</option>
                    <option value="jueves">Jueves</option>
                    <option value="viernes">Viernes</option>
                    <option value="sabado">Sabado</option>
                </select>
            </div>
            <div>
                <label htmlFor="horarioInicio">Horario Inicio</label>
                <input id="horarioInicio" type="time" name="horarioInicio" value={ horarioInicio } onChange={ handleInputChange }/>
            </div>
            <div>
                <label htmlFor="horarioInicio">Horario Fin</label>
                <input id="horarioFin" type="time" name="horarioFin" value={ horarioFin } onChange={ handleInputChange }/>
            </div>
            <div>
                <label htmlFor="periodo">Periodo</label>
                <select id="periodo" name="periodo" onChange={ handleInputChange } value={ periodo }>
                    <option value="">Selecione un periodo</option>
                    { Periodo1.map(( p ) => (
                        <option key={ p.id } value={ p.descripcion }>{ `${ p.descripcion }` }</option>
                    )) }
                </select>
            </div>
            <div>
                <label htmlFor="curso">Curso</label>
                <select id="curso" name="curso" onChange={ handleInputChange } value={ curso }>
                    <option value="">Selecione un curso</option>
                    { Curso2.map((c) => (
                        <option key={ c.id } value={ c.descripcion }>{ `${ c.descripcion }` }</option>
                    )) }
                </select>
            </div>
            <div>
                <label htmlFor="docentes">Docente</label>
                <select id="docentes" name="docente" value={ docente } onChange={handleInputChange}>
                    <option value="" disabled>selecione un docente</option>
                    {Docente2.map((d) => (
                        <option key={d.documento} value={ d.nombre }>{ `${ d.nombre } ${ d.apellido }` }</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="materias">Materias</label>
                <select id="materias" name="materia" value={ materia } onChange={handleInputChange}>
                    <option value="" disabled>selecione una materia</option>
                    {Materia2.map((m) => (
                        <option key={m.id} value={ m.descripcion }>{ `${ m.descripcion }` }</option>
                    ))}
                </select>
            </div>
            <div>
                <button onClick={ active === claseModel ? handleAddclase :  handleEditclase }>
                    Guardar
                </button>
            </div>
            <div>
                <button onClick={ back }>Volver</button>
            </div>
        </div>
    )
}
