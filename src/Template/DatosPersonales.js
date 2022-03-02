import React from 'react';
import PropTypes from 'prop-types';

export const DatosPersonales = ({
    nombre = '',
    apellido = '',
    tipoDocumento = '',
    documento = '',
    fechaNacimiento = '',
    sexo = '',
    lugarNacimiento = '',
    telefonoFijo = '',
    telefonoMovil = '',
    domicilio = '',
    numero = '',
    departamento = '',
    piso = '',
    handleInputChange
}) => {

    return (
        <fieldset>
            <legend>Datos Personales</legend>
            <div>
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={ nombre }
                    onChange={ handleInputChange }
                />
            </div>
            <div>
                <label htmlFor="apellido">Apellido</label>
                <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={ apellido }
                    onChange={ handleInputChange }
                />
            </div>
            <div>
                <label htmlFor="tipoDocumento">Tipo Documento</label>
                <select 
                    id="tipoDocumento"
                    name="tipoDocumento"
                    value={ tipoDocumento }
                    onChange={ handleInputChange }
                >
                    <option value="DNI">DNI</option>
                    <option value="CUIL">CUIL</option>
                    <option value="LE">Libreta Enrolamiento</option>
                    <option value="LC">Libreta Civica</option>
                </select>
            </div>
            <div>
                <label htmlFor="documento">Documento</label>
                <input
                    type="number"
                    id="documento"
                    name="documento"
                    value={ documento }
                    onChange={ handleInputChange }
                />
            </div>
            <div>
                <label htmlFor="fechaNacimiento">Fecha Nacimiento</label>
                <input
                    type="date"
                    id="fechaNacimiento"
                    name="fechaNacimiento"
                    value={ fechaNacimiento }
                    onChange={ handleInputChange }
                />
            </div>
            <div>
                <label htmlFor="sexo">Sexo</label>
                <select
                    id="sexo"
                    name="sexo"
                    value={ sexo }
                    onChange={ handleInputChange }
                >
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Femenino</option>
                    <option value="Otros">Otros</option>
                </select>
            </div>
            <div>
                <label htmlFor="lugarNacimiento">Lugar Nacimiento</label>
                <input
                    type="text"
                    id="lugarNacimiento"
                    name="lugarNacimiento"
                    value={ lugarNacimiento }
                    onChange={ handleInputChange }
                />
            </div>
            <div>
                <label htmlFor="telefonoFijo">Telefono Fijo</label>
                <input 
                    type="number"
                    id="telefonoFijo"
                    name="telefonoFijo"
                    value={ telefonoFijo }
                    onChange={ handleInputChange }
                />
            </div>
            <div>
                <label htmlFor="telefonoMovil">Telofono Movil</label>
                <input
                    type="number"
                    id="telefonoMovil"
                    name="telefonoMovil"
                    value={ telefonoMovil }
                    onChange={ handleInputChange }
                />
            </div>
            <div>
                <label htmlFor="domicilio">Domicilio</label>
                <input
                    type="text"
                    id="domicilio"
                    name="domicilio"
                    value={ domicilio }
                    onChange={ handleInputChange }
                />
            </div>
            <div>
                <label htmlFor="numero">Numero</label>
                <input
                    type="number"
                    id="numero"
                    name="numero"
                    value={ numero }
                    onChange={ handleInputChange }
                />
            </div>
            <div>
                <label htmlFor="departamento">Departamento</label>
                <input
                    type="text"
                    id="departamento"
                    name="departamento"
                    value={ departamento }
                    onChange={ handleInputChange }
                />
            </div>
            <div>
                <label htmlFor="piso">Piso</label>
                <input
                    type="number"
                    id="piso"
                    name="piso"
                    value={ piso }
                    onChange={ handleInputChange }
                />
            </div>
        </fieldset>
    );
};

DatosPersonales.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    tipoDocumento: PropTypes.string.isRequired,
    documento: PropTypes.number.isRequired,
    fechaNacimiento: PropTypes.any.isRequired,
    sexo: PropTypes.string.isRequired,
    lugarNacimiento: PropTypes.string.isRequired,
    telefonoFijo: PropTypes.number.isRequired,
    telefonoMovil: PropTypes.number.isRequired,
    domicilio: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired,
    departamento: PropTypes.string.isRequired,
    piso: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
}