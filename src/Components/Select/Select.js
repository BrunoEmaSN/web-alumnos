import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, TextField } from '@mui/material';

const formValidation = (errors, errorKey) => {
    return errors ? errors[errorKey] : ''
}

export const Select = ({
    id,
    name,
    value,
    trigger,
    label,
    error,
    data,
    ...SelectProps
}) => {
    return (
        <TextField
            select
            id={id}
            name={name}
            value={value}
            onChange={trigger}
            label={label}
            error={Boolean(formValidation(error, name))}
            helperText={formValidation(error, name)}
            {...(SelectProps && {...SelectProps})}
        >
            <MenuItem value="" disabled>Seleccione una opcion</MenuItem>
            {
                data.map(({label, value}) => (
                    <MenuItem key={value} value={value}>{label}</MenuItem>
                ))
            }
        </TextField>
    )
}

Select.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any,
    trigger: PropTypes.func,
    type: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.object,
    data: PropTypes.array,
    SelectProps: PropTypes.any
}