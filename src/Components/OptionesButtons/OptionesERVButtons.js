import React from "react";
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from "@mui/material";

export const OpcionesERVButtons = ({
	CallBackEdit,
	CallBackView,
	CallBackDelete
}) => {
	return (
        <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
        >
			<Button
				onClick={ CallBackEdit }
			>
				Editar
			</Button>
			<Button
				onClick={ CallBackView }
			>
				Ver
			</Button>
			<Button
				onClick={ CallBackDelete }
			>
				Eliminar
			</Button>
        </ButtonGroup>
	);
}

OpcionesERVButtons.propTypes = {
    CallBackEdit: PropTypes.func.isRequired,
	CallBackView: PropTypes.func.isRequired,
	CallBackDelete: PropTypes.func.isRequired
}