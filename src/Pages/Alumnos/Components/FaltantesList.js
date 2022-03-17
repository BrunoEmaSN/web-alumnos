import React from "react";
import PropTypes from 'prop-types';
import { Box, List, ListItem, ListItemText } from "@mui/material";

export const FaltantesList = ({
	partidaNacimiento,
	fotocopiaDNI,
	fotocopiaCUIL,
	foto4x4,
	contrato
}) => {
	return (
		<Box>
            <List>
                {
                    partidaNacimiento === 1 && (
                        <ListItem>
                            <ListItemText primary="- Partida de Nacimiento"/>
                        </ListItem>
                    )
                }
                {
                    fotocopiaDNI === 1 && (
                        <ListItem>
                            <ListItemText primary="- Fotocopia DNI"/>
                        </ListItem>
                    )
                }
                {
                    fotocopiaCUIL === 1 && (
                        <ListItem>
                            <ListItemText primary="- Fotocopia CUIL"/>
                        </ListItem>
                    )
                }
                {
                    foto4x4 === 1 && (
                        <ListItem>
                            <ListItemText primary="- Foto 4x4"/>
                        </ListItem>
                    )
                }
                {
                    contrato === 1 && (
                        <ListItem>
                            <ListItemText primary="- Contrato"/>
                        </ListItem>
                    )
                }
            </List>
		</Box>
	);
}

FaltantesList.propTypes = {
    partidaNacimiento: PropTypes.any,
	fotocopiaDNI: PropTypes.any,
	fotocopiaCUIL: PropTypes.any,
	foto4x4: PropTypes.any,
	contrato: PropTypes.any
}