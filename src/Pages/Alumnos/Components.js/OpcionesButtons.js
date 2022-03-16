import React from "react";
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from "@mui/material";

export const OpcionesButtons = ({
	CallBackEdit,
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
				Edit
			</Button>
			<Button
				onClick={ CallBackDelete }
			>
				Delete
			</Button>
        </ButtonGroup>
	);
}

OpcionesButtons.propTypes = {
    CallBackEdit: PropTypes.func.isRequired,
	CallBackDelete: PropTypes.func.isRequired
}