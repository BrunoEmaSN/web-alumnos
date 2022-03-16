import React from 'react';
import PropTypes from 'prop-types';

export const DatosTutor = ({
    nivelAcademico,
    situacionAcademica,
    profesion,
    ocupacion,
    telefonoLaboral,
    handleInputChange
}) => {
    return (
        <fieldset>
            <legend>Datos Tutor</legend>
            <div>
                <label htmlFor="nivelAcademico">Nivel Academico</label>
                <select
                    id="nivelAcademico"
                    name="nivelAcademico"
                    value={ nivelAcademico }
                    onChange={ handleInputChange }
                >
                    <option value="" disabled>Selecione un Nivel</option>
                    <option value="Primaria">Primaria</option>
                    <option value="Secundaria">Secundaria</option>
                    <option value="Terciario">Terciario</option>
                    <option value="Universitario">Universitario</option>
                </select>
            </div>
            <div>
                <label htmlFor="situacionAcademica">Situacion Academica</label>
                <select
                    id="situacionAcademica"
                    name="situacionAcademica"
                    value={ situacionAcademica }
                    onChange={ handleInputChange }
                >
                    <option value="" disabled>Selecione una opcion</option>
                    <option value="Incompleto">Incompleto</option>
                    <option value="Completo">Completo</option>
                    <option value="Cursando">Cursando</option>
                </select>
            </div>
            <div>
                <label htmlFor="profesion">Profesion</label>
                <input
                    id="profesion"
                    name="profesion"
                    type="text"
                    value={ profesion }
                    onChange={ handleInputChange }
                />
            </div>
            <div>
                <label htmlFor="ocupacion">Ocupacion</label>
                <input
                    id="ocupacion"
                    name="ocupacion"
                    type="text"
                    value={ ocupacion }
                    onChange={ handleInputChange }
                />
            </div>
            <div>
                <label htmlFor="telefonoLaboral">Telefono Laboral</label>
                <input
                    id="telefonoLaboral"
                    name="telefonoLaboral"
                    type="number"
                    value={ telefonoLaboral }
                    onChange={ handleInputChange }
                />
            </div>
        </fieldset>
    )
}

DatosTutor.propTypes = {
    nivelAcademico: PropTypes.any.isRequired,
    situacionAcademica: PropTypes.any.isRequired,
    profesion: PropTypes.any.isRequired,
    ocupacion: PropTypes.any.isRequired,
    telefonoLaboral: PropTypes.any.isRequired,
    handleInputChange: PropTypes.func.isRequired
}