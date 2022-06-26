import React from "react";
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from "@mui/material";

export const OpcionesEVButtons = ({
	CallBackEdit,
	CallBackView
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
        </ButtonGroup>
	);
}

OpcionesEVButtons.propTypes = {
    CallBackEdit: PropTypes.func.isRequired,
	CallBackView: PropTypes.func.isRequired
}