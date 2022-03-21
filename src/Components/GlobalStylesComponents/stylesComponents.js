import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "@mui/material";

export const ButtonGeneric = ({ label, CallBack }) => {
    return (
        <Button
            onClick={ CallBack }
            sx={{
                bgcolor: '#00C6B7',
                color: '#222F3E',
                border: '1px solid #fff'
            }}
        >
            { label }
        </Button>
    );
}

ButtonGeneric.propTypes = {
    label: PropTypes.string.isRequired,
    CallBack: PropTypes.func.isRequired
}