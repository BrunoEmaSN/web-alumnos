import React from "react";
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from "@mui/material";

export const OpcionesEVButtons = ({
	CallBackEdit
}) => {
	return (
        <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
        >
			<Button
				onClick={ CallBackEdit }
			>
				Edit
			</Button>
        </ButtonGroup>
	);
}

OpcionesEVButtons.propTypes = {
    CallBackEdit: PropTypes.func.isRequired
}