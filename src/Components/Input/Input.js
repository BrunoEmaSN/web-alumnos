import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';

const formValidation = (errors, errorKey) => {
    return errors ? errors[errorKey] : ''
}

export const Input = ({
    id,
    name,
    value,
    trigger,
    type = 'text',
    label,
    error,
    ...InputProps
}) => {
    return (
        <Box>
            <TextField
                id={id}
                name={name}
                value={value}
                onChange={trigger}
                type={type}
                label={label}
                error={Boolean(formValidation(error, name))}
                helperText={formValidation(error, name)}
                {...(InputProps && {...InputProps})}
            />
        </Box>
    )
}

Input.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any,
    trigger: PropTypes.func,
    type: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.object,
    InputProps: PropTypes.any
}