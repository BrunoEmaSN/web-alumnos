/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Switch from '@mui/material/Switch';

export const DatosPareja = ({
    tienePareja,
    pareja,
    handleInputChange
}) => {

    const [ checked, setchecked ] = useState( tienePareja );

    const {
        nombrePareja = '',
        apellidoPareja = '',
        dniPareja = '',
        telefonoFijoPareja = '',
        telefonoMovilPareja = '',
    } = pareja;

    const handleChange = () => {
        handleInputChange({
            target: {
                name: 'tienePareja',
                value: !checked
            } 
        });
        setchecked( !checked );
    }

    return (
        <div>
            <fieldset>
                <legend>Datos Pareja</legend>
                <div>
                    <Switch checked={ checked } onChange={ handleChange } />
                    <label htmlFor="tienePareja">tiene pareja?</label>
                </div>
                <div style={ checked ? { display: 'block' } : { display: 'none' }}>
                    <div>
                        <label htmlFor="nombrePareja">Nombre Pareja</label>
                        <input
                            type="text"
                            id="nombrePareja"
                            name="nombrePareja"
                            value={ nombrePareja }
                            onChange={ handleInputChange }
                        />
                    </div>
                    <div>
                        <label htmlFor="apellidoPareja">Apellido Pareja</label>
                        <input
                            type="text"
                            id="apellidoPareja"
                            name="apellidoPareja"
                            value={ apellidoPareja }
                            onChange={ handleInputChange }
                        />
                    </div>
                    <div>
                        <label htmlFor="dniPareja">DNI Pareja</label>
                        <input
                            type="number"
                            id="dniPareja"
                            name="dniPareja"
                            value={ dniPareja }
                            onChange={ handleInputChange }
                        />
                    </div>
                    <div>
                        <label htmlFor="telefonoFijoPareja">Telefono Fijo Pareja</label>
                        <input
                            type="number"
                            name="telefonoFijoPareja"
                            value={ telefonoFijoPareja }
                            onChange={ handleInputChange }
                        />
                    </div>
                    <div>
                        <label htmlFor="telefonoMovilPareja">Telefono Movil Pareja</label>
                        <input
                            type="number"
                            id="telefonoMovilPareja"
                            name="telefonoMovilPareja"
                            value={ telefonoMovilPareja }
                            onChange={ handleInputChange }
                        />
                    </div>
                </div>
            </fieldset>
        </div>
    );
};

DatosPareja.propType = {
    tienePareja: PropTypes.bool.isRequired,
    pareja: PropTypes.object.isRequired,
    handleInputChange: PropTypes.func.isRequired,
}