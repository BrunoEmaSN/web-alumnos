import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const DatosAcademicos = ({
    partidaNacimiento = false,
    fotocopiaDNI = false,
    fotocopiaCUIL = false,
    foto4x4 = false,
    contrato = false,
    observaciones = '',
    cursoId = '',
    cursoNivel = '',
    condicion = '',
    cursosList = [],
    handleInputChange,
    handleCheckboxChange,
    handleObjectChange
}) => {
    
    
    const [ nivel, setNivel ] = useState( cursoNivel );
    const handleNivel = ({ target }) => {
        setNivel( target.value );
        handleInputChange({
            target: {
                name: 'cursoId',
                value: '' 
            }
        });
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
                    <option value="" disabled>Selecione un nivel</option>
                    <option value="P">Primaria</option>
                    <option value="S">Secundaria</option>
                    <option value="T">Terciaria</option>
                    <option value="U">Universidad</option>
                </select>
            </div>
            <div>
                <label htmlFor="condicion">Condicion</label>
                <select
                    id="condicion"
                    name="condicion"
                    value={ condicion }
                    onChange={ handleInputChange }
                >
                    <option value="" disabled>seleccione una condicion</option>
                    <option value="Regular">Regular</option>
                    <option value="Promocional">Promocional</option>
                    <option value="Libre">Libre</option>
                </select>
            </div>
            <div>
                <label htmlFor="cursoId">Cursos</label>
                <select
                    id="cursoId"
                    name="cursoId"
                    value={ cursoId }
                    onChange={ handleObjectChange }
                >
                    <option value="" disabled>Selecione un curso</option>
                    { cursosList.map( c => {
                        return (
                            c.nivel === nivel && (
                                <option key={ c.id } value={c.id}>
                                    {`${ c.turno } ${ c.grado_ano } ${ c.division }: ${ c.aula_descripcion }`}
                                </option>
                            )
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
    observaciones: PropTypes.string,
    cursoId: PropTypes.any.isRequired,
    cursoNivel: PropTypes.any.isRequired,
    condicion: PropTypes.any.isRequired,
    cursosList: PropTypes.array.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
    handleObjectChange: PropTypes.func.isRequired
}