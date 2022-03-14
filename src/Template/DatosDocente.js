import React from 'react';
import PropTypes from 'prop-types';

export const DatosDocente = ({
    cuit,
    titulo,
    sede,
    subencionado,
    contratado,
    monotributista,
    observaciones,
    handleInputChange,
    handleCheckboxChange
}) => {
    return (
        <fieldset>
            <legend>Datos Docente</legend>
            <div>
                <label htmlFor="cuit">C.U.I.T.</label>
                <input
                    type="number"
                    name="cuit"
                    id="cuit"
                    value={ cuit }
                    onChange={ handleInputChange }
                />
            </div>
            <div>
                <label htmlFor="titulo">Titulo</label>
                <input
                    type="text"
                    name="titulo"
                    id="titulo"
                    value={ titulo }
                    onChange={ handleInputChange }
                />
            </div>
            <div>
                <label htmlFor="sede">Sede</label>
                <input
                    type="text"
                    name="sede"
                    id="sede"
                    value={ sede }
                    onChange={ handleInputChange }
                />
            </div>
            <div>
                <label htmlFor="contratos">Contratos</label>
                <div id="contratos">
                    <div>    
                        <input
                            type="checkbox"
                            name="subencionado"
                            id="subencionado"
                            checked={ subencionado }
                            onChange={ handleCheckboxChange }
                        />
                        <label htmlFor="subencionado">Subencionado</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="contratado"
                            id="contratado"
                            checked={ contratado }
                            onChange={ handleCheckboxChange }
                        />
                        <label htmlFor="contratado">Contratado</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="monotributista"
                            id="monotributista"
                            checked={ monotributista }
                            onChange={ handleCheckboxChange }
                        />
                        <label htmlFor="monotributista">Monotributista</label>
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="observaciones">Observaciones</label>
                <input
                    type="text"
                    name="observaciones"
                    id="observaciones"
                    value={ observaciones }
                    onChange={ handleInputChange }
                />
            </div>
        </fieldset>
    );
};

DatosDocente.propTypes = {
    cuit: PropTypes.any.isRequired,
    titulo: PropTypes.string.isRequired,
    sede: PropTypes.string.isRequired,
    subencionado: PropTypes.bool.isRequired,
    contratado: PropTypes.bool.isRequired,
    monotributista: PropTypes.bool.isRequired,
    observaciones: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
}