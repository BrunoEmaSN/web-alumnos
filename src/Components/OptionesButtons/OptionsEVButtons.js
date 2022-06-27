import React from "react";
import PropTypes from 'prop-types';
import { ButtonGroup } from "@mui/material";
import { ButtonGeneric } from "../GlobalStylesComponents/stylesComponents";

export const OptionsEVButtons = ({
	CallBackEdit,
	CallBackView
}) => {
	return (
        <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
        >
			<ButtonGeneric label="Editar" CallBack={CallBackEdit}/>
			<ButtonGeneric label="Ver" CallBack={CallBackView}/>
        </ButtonGroup>
	);
}

OptionsEVButtons.propTypes = {
    CallBackEdit: PropTypes.func.isRequired,
	CallBackView: PropTypes.func.isRequired
}