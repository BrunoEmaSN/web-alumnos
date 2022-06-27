import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { List, ListItem, ListItemText } from '@mui/material';

export const ContratosList = ({
    subencionado,
    contratado,
    monotributista
}) => {
    return (
        <Box>
            <List>
                {
                    subencionado !== 0 && (
                        <ListItem>
                            <ListItemText primary="Subencionado"/>
                        </ListItem>
                    )
                }
                {
                    contratado !== 0 && (
                        <ListItem>
                            <ListItemText primary="Contratado"/>
                        </ListItem>
                    )
                }
                {
                    monotributista !== 0 && (
                        <ListItem>
                            <ListItemText primary="Monotributista"/>
                        </ListItem>
                    )
                }
            </List>
        </Box>
    )
}

ContratosList.propTypes = {
    subencionado: PropTypes.bool,
    contratado: PropTypes.bool,
    monotributista: PropTypes.bool
}