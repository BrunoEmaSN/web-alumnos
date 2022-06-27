import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel } from '@mui/material';

export const Checkbox = ({
    id,
    name,
    checked,
    trigger,
    label,
    ...CheckboxProps
}) => {
    return (
        <FormControlLabel
            id={id}
            name={name}
            checked={checked}
            onChange={trigger}
            control={<Checkbox checked={checked} />}
            label={label}
            {...(CheckboxProps && {...CheckboxProps})}
        />
    )
}

Checkbox.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    trigger: PropTypes.func,
    CheckboxProps: PropTypes.any
}