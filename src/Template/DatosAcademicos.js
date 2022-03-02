import React, { useState } from 'react';
import PropTypes from 'prop-types';

const cursos = [
    {
        id: 1,
        descripcion: '1° "A"',
        aula: {
            id: 1,
            descripcion: 'Aula 1'
        },
        nivel: 'primaria'
    },
    {
        id: 2,
        descripcion: '1° "B"',
        aula: {
            id: 1,
            descripcion: 'Aula 1'
        },
        nivel: 'primaria'
    },
    {
        id: 3,
        descripcion: '1° "A"',
        aula: {
            id: 1,
            descripcion: 'Aula 2'
        },
        nivel: 'secundaria'
    }
];

export const DatosAcademicos = ({
    partidaNacimiento = false,
    fotocopiaDNI = false,
    fotocopiaCUIL = false,
    foto4x4 = false,
    contrato = false,
    observaciones = '',
    cursoId = '',
    handleInputChange,
    handleCheckboxChange
}) => {

    const [ nivel, setNivel ] = useState('primaria');

    const handleNivel = ({ target }) => {
        setNivel( target.value );
    }

    return (
        <fieldset>
            <legend>Datos Academicos</legend>
            <div>
                <label htmlFor="requisitos">Requisitos</label>
                <div id="requisitos">
                    <div>
                        <input
                            type="checkbox"
                            id="partidaNacimiento"
                            name="partidaNacimiento"
                            checked={ partidaNacimiento }
                            onChange={ handleCheckboxChange }
                        />
                        <label htmlFor="partidaNacimiento">tiene Partida Nacimiento?</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="fotocopiaDNI"
                            name="fotocopiaDNI"
                            checked={ fotocopiaDNI }
                            onChange={ handleCheckboxChange }
                        />
                        <label htmlFor="fotocopiaDNI">tiene Fotocopia DNI?</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="fotocopiaCUIL"
                            name="fotocopiaCUIL"
                            checked={ fotocopiaCUIL }
                            onChange={ handleCheckboxChange }
                        />
                        <label htmlFor="fotocopiaCUIL">tiene Fotocopia CUIL?</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="foto4x4"
                            name="foto4x4"
                            checked={ foto4x4 }
                            onChange={ handleCheckboxChange }
                        />
                        <label htmlFor="foto4x4">tiene Fotocopia 4x4?</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="contrato"
                            name="contrato"
                            checked={ contrato }
                            onChange={ handleCheckboxChange }
                        />
                        <label htmlFor="contrato">firmaron el Contrato?</label>
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="observaciones">Observaciones</label>
                <input
                    type="text"
                    id="observaciones"
                    name="observaciones"
                    value={ observaciones }
                    onChange={ handleInputChange }
                />
            </div>
            <div>
                <label htmlFor="nivel">Nivel</label>
                <select id="nivel" onChange={ handleNivel } value={ nivel }>
                    <option value="primaria">Primaria</option>
                    <option value="secundaria">Secundaria</option>
                    <option value="terciaria">Terciaria</option>
                    <option value="universidad">Universidad</option>
                </select>
            </div>
            <div>
                <label htmlFor="cursoId">Cursos</label>
                <select id="cursoId" name="cursoId" value={ cursoId } onChange={ handleInputChange }>
                    { cursos.map( c => {
                        return (
                            c.nivel === nivel ?
                            <option key={ c.id } value={c.id}>
                                {`${ c.aula.descripcion }: ${ c.descripcion }`}
                            </option>:
                            ''
                        );
                    } ) }
                </select>
            </div>
        </fieldset>
    );
};

DatosAcademicos.propTypes = {
    partidaNacimiento: PropTypes.bool.isRequired,
    fotocopiaDNI: PropTypes.bool.isRequired,
    fotocopiaCUIL: PropTypes.bool.isRequired,
    foto4x4: PropTypes.bool.isRequired,
    contrato: PropTypes.bool.isRequired,
    observaciones: PropTypes.string.isRequired,
    cursoId: PropTypes.number.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
}