import React from "react";
import PropTypes from 'prop-types';
import { ButtonGroup } from "@mui/material";
import { ButtonTable } from "../GlobalStylesComponents/stylesComponents";

export const OptionsEVButtons = ({
	CallBackEdit,
	CallBackView
}) => {
	return (
        <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
        >
			<ButtonTable label="Editar" CallBack={CallBackEdit}/>
			<ButtonTable label="Ver" CallBack={CallBackView}/>
        </ButtonGroup>
	);
}

OptionsEVButtons.propTypes = {
    CallBackEdit: PropTypes.func.isRequired,
	CallBackView: PropTypes.func.isRequired
}