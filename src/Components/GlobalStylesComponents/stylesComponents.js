import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography } from "@mui/material";

export const ButtonGeneric = ({ label, CallBack }) => {
    return (
        <Button
            onClick={ CallBack }
            sx={{
                bgcolor: '#00C6B7',
                color: '#222F3E',
                border: '1px solid #fff',
                '&:hover': {
                    backgroundColor: '#fff',
                    border: '1px solid #00C6B7',
                    color: '#00C6B7',
                }
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

export const ButtonCreate = ({ label, CallBack }) => {
    return (
        <Button
            onClick={ CallBack }
            variant="outlined"
            sx={{
                bgcolor: '#00C6B7',
                color: '#222F3E',
                border: '1px solid #fff',
                height: 50,
                padding: '0 2%',
                '&:hover': {
                    backgroundColor: '#fff',
                    border: '1px solid #00C6B7',
                    color: '#00C6B7',
                }
                
            }}
        >
            { label }
        </Button>
    );
}

ButtonCreate.propTypes = {
    label: PropTypes.string.isRequired,
    CallBack: PropTypes.func.isRequired
}

export const ButtonContained = ({ label, CallBack }) => {
    return (
        <Button
            fullWidth
            onClick={ CallBack }
            sx={{
                border: '1px solid #222F3E',
                bgcolor: '#222F3E',
                color: '#fff',
                height: 40,
                padding: '0 1%',
                '&:hover': {
                    bgcolor: '#00C6B7',
                    color: '#222F3E',
                    border: '1px solid #00C6B7',
                }
            }}
        >
            { label }
        </Button>
    );
}

ButtonContained.propTypes = {
    label: PropTypes.string.isRequired,
    CallBack: PropTypes.func.isRequired
}

export const ButtonOutlined = ({ label, CallBack }) => {
    return (
        <Button
            fullWidth
            onClick={ CallBack }
            sx={{
                border: '1px solid #00C6B7',
                color: '#00C6B7',
                height: 40,
                padding: '0 2%',
                '&:hover': {
                    backgroundColor: '#00C6B7',
                    color: '#222F3E',
                    border: '1px solid #00C6B7',
                }
            }}
        >
            { label }
        </Button>
    );
}

ButtonOutlined.propTypes = {
    label: PropTypes.string.isRequired,
    CallBack: PropTypes.func.isRequired
}

export const TypographyH3 = ({ label }) => {
    return (
        <Typography
            variant="h3"
            gutterBottom
            component="div"
            sx={{
                color: '#222F3E'
            }}
        >
            {label}
        </Typography>
    );
}

TypographyH3.propTypes = {
    label: PropTypes.string.isRequired
}

export const TypographyH4 = ({ label }) => {
    return (
        <Typography
            variant="h4"
            gutterBottom
            component="div"
            sx={{
                color: '#222F3E'
            }}
        >
            {label}
        </Typography>
    );
}

TypographyH4.propTypes = {
    label: PropTypes.string.isRequired
}

export const TypographyH6 = ({ label }) => {
    return (
        <Typography
            variant="h6"
            gutterBottom
            component="div"
            sx={{
                color: '#222F3E'
            }}
        >
            {label}
        </Typography>
    );
}

TypographyH6.propTypes = {
    label: PropTypes.string.isRequired
}