import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../Hooks/useForm';
import { cleanActiveCalificacion, startNewCalificacion, startUpdateCalificacion } from '../../Store/Calificacion/Actions/Calificacion';
import { Alumno2 } from '../../Utils/alumnoModel';
import { calificacionModel } from '../../Utils/calificacionModel';
import { Docente2 } from '../../Utils/docenteModel';
import { Materia2, regimenes } from '../../Utils/materiaModel';

export const CalificacionesSave = () => {
    const dispatch = useDispatch();

    const { active } = useSelector( state => state.calificacion );

    const [ formValues, handleInputChange ] = useForm( active );

    const {
        regimen,
        etapa,
        nota,
        descripcion,
        alumno,
        docente,
        materia,
    } = formValues;

    const handleAddCalificacion = ( e ) => {
        e.preventDefault();
        dispatch( startNewCalificacion( formValues ) );
        dispatch( cleanActiveCalificacion() );
    }

    const handleEditCalificacion = ( e ) => {
        e.preventDefault();
        dispatch( startUpdateCalificacion( formValues ) );
        dispatch( cleanActiveCalificacion() );
    }

    const back = ( e ) => {
        e.preventDefault();
        dispatch( cleanActiveCalificacion() );
    }
    
    return (
        <div>
            <div>
                <label htmlFor="regimen">Regimen</label>
                <select id="regimen" name="regimen" value={regimen} onChange={handleInputChange}>
                    <option value="" disabled>selecione un aula</option>
                    {regimenes.map((r) => (
                        <option key={r} value={r}>{r}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="etapa">Etapa</label>
                <select id="etapa" name="etapa" value={etapa} onChange={handleInputChange}>
                    <option value="" disabled>selecione una etapa</option>
                    <option value="1er">Primer Etapa</option>
                    <option value="2da">Segunda Etapa</option>
                    <option value="3ra">Tercera Etapa</option>
                    <option value="4ta">Cuarta Etapa</option>
                </select>
            </div>
            <div>
                <label htmlFor="nota">Nota</label>
                <input type="number" min="1" max="10" step="1" id="nota" name="nota" value={nota} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="descripcion">Descripcion</label>
                <input type="text" id="descripcion" name="descripcion" value={descripcion} onChange={handleInputChange}/>
            </div>
            <div>
                <label htmlFor="alumnos">Alumnos</label>
                <select id="alumnos" name="alumno" value={ alumno } onChange={handleInputChange}>
                    <option value="" disabled>selecione un alumno</option>
                    {Alumno2.map((a) => (
                        <option key={a.documento} value={ a }>{ `${ a.nombre } ${ a.apellido }` }</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="docentes">Docente</label>
                <select id="docentes" name="docente" value={ docente } onChange={handleInputChange}>
                    <option value="" disabled>selecione un docente</option>
                    {Docente2.map((d) => (
                        <option key={d.documento} value={ d }>{ `${ d.nombre } ${ d.apellido }` }</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="materias">Materias</label>
                <select id="materias" name="materia" value={ materia } onChange={handleInputChange}>
                    <option value="" disabled>selecione una materia</option>
                    {Materia2.map((m) => (
                        <option key={m.id} value={ m }>{ `${ m.descripcion }` }</option>
                    ))}
                </select>
            </div>
            <div>
                <button onClick={ active === calificacionModel ? handleAddCalificacion :  handleEditCalificacion }>
                    Guardar
                </button>
            </div>
            <div>
                <button onClick={ back }>Volver</button>
            </div>
        </div>
    )
}
