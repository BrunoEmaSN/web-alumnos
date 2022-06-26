import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export const NivelesList = ({ nivel }) => {
    return (
        <Box>
            {
                nivel === 'P' && (
                    <Typography variant="subtitle1" gutterBottom component="div">
                        Primaria
                    </Typography>
                )
            }
            {
                nivel === 'S' && (
                    <Typography variant="subtitle1" gutterBottom component="div">
                        Secundaria
                    </Typography>
                )
            }
            {
                nivel === 'T' && (
                    <Typography variant="subtitle1" gutterBottom component="div">
                        Terciaria
                    </Typography>
                )
            }
            {
                nivel === 'U' && (
                    <Typography variant="subtitle1" gutterBottom component="div">
                        Universidad
                    </Typography>
                )
            }
        </Box>
    )
}

NivelesList.propTypes = {
    nivel: PropTypes.string.isRequired
}