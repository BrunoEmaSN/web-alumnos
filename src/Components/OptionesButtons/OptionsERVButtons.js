import React from "react";
import PropTypes from 'prop-types';
import { ButtonGroup } from "@mui/material";
import { ButtonTable } from "../GlobalStylesComponents/stylesComponents";

export const OptionsERVButtons = ({
	CallBackEdit,
	CallBackView,
	CallBackDelete
}) => {
	return (
        <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
        >
			<ButtonTable label="Editar" CallBack={CallBackEdit}/>
			<ButtonTable label="Ver" CallBack={CallBackView}/>
			<ButtonTable label="Eliminar" CallBack={CallBackDelete}/>
        </ButtonGroup>
	);
}

OptionsERVButtons.propTypes = {
    CallBackEdit: PropTypes.func.isRequired,
	CallBackView: PropTypes.func.isRequired,
	CallBackDelete: PropTypes.func.isRequired
}