import React, { useContext, useEffect, useState } from 'react';
import { CalificacionesContext } from '../../Context/BuildContext';
import { useForm } from '../../Hooks/useForm';
import { alumnosGetAll } from '../../Services/restCallAlumnos';
import { docentesGetAll } from '../../Services/restCallDocentes';
import { materiasGetAll } from '../../Services/restCallMaterias';
import { regimenes } from '../../Utils/Model/materiaModel';

export const CalificacionesSave = () => {
    const {
        active,
        handleEditCalificacion,
        handleBack
    } = useContext(CalificacionesContext);

    const [ alumnosList, setAlumnosList ] = useState([]);
    const [ materiasList, setMateriasList ] = useState([]);
    const [ docentesList, setDocentesList ] = useState([]);

    const handleListGetAll = async () => {
        setAlumnosList(await alumnosGetAll());
        setMateriasList(await materiasGetAll());
        setDocentesList(await docentesGetAll());
    }

    useEffect(() => {
        handleListGetAll();
    }, [])
    

    const [ formValues, handleInputChange ] = useForm( active );

    const {
        regimen,
        etapa,
        nota,
        descripcion,
        alumno_id,
        docente_id,
        materia_id,
    } = formValues;
    
    return (
        <div>
            <div>
                <label htmlFor="regimen">Regimen</label>
                <select
                    id="regimen"
                    name="regimen"
                    value={regimen}
                    onChange={handleInputChange}
                >
                    <option value="" disabled>selecione un aula</option>
                    { regimenes.map((r) => (
                        <option key={r} value={r}>{r}</option>
                    )) }
                </select>
            </div>
            <div>
                <label htmlFor="etapa">Etapa</label>
                <select
                    id="etapa"
                    name="etapa"
                    value={etapa}
                    onChange={handleInputChange}
                >
                    <option value="" disabled>
                        Selecione una etapa
                    </option>
                    <option value="1er">Primer Etapa</option>
                    <option value="2da">Segunda Etapa</option>
                    <option value="3ra">Tercera Etapa</option>
                    <option value="4ta">Cuarta Etapa</option>
                </select>
            </div>
            <div>
                <label htmlFor="nota">Nota</label>
                <input
                    type="number"
                    min="1"
                    max="10"
                    step="1"
                    id="nota"
                    name="nota"
                    value={nota}
                    onChange={handleInputChange}
                />
            </div>
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
                <label htmlFor="alumnos">Alumnos</label>
                <select
                    id="alumnos"
                    name="alumno_id"
                    value={ alumno_id }
                    onChange={handleInputChange}
                >
                    <option value="" disabled>selecione un alumno</option>
                    { alumnosList.map((a) => (
                        <option key={a.documento} value={ a.documento }>
                            { `${ a.nombre } ${ a.apellido }` }
                        </option>
                    )) }
                </select>
            </div>
            <div>
                <label htmlFor="docentes">Docente</label>
                <select
                    id="docentes"
                    name="docente_id"
                    value={ docente_id }
                    onChange={handleInputChange}
                >
                    <option value="" disabled>Selecione un docente</option>
                    { docentesList.map((d) => (
                        <option key={d.documento} value={ d.documento }>
                            { `${ d.nombre } ${ d.apellido }` }
                        </option>
                    )) }
                </select>
            </div>
            <div>
                <label htmlFor="materias">Materias</label>
                <select
                    id="materias"
                    name="materia_id"
                    value={ materia_id }
                    onChange={handleInputChange}
                >
                    <option value="" disabled>selecione una materia</option>
                    { materiasList.map((m) => (
                        <option key={m.id} value={ m.id }>
                            { `${ m.descripcion }` }
                        </option>
                    )) }
                </select>
            </div>
            <div>
                <button onClick={ () => handleEditCalificacion(formValues) }>
                    Editar
                </button>
            </div>
            <div>
                <button onClick={ handleBack }>Volver</button>
            </div>
        </div>
    )
}
