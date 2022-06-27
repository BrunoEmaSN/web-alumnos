import React from "react";
import PropTypes from 'prop-types';
import { ButtonGroup } from "@mui/material";
import { ButtonGeneric } from "../GlobalStylesComponents/stylesComponents";

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
			<ButtonGeneric label="Editar" CallBack={CallBackEdit}/>
			<ButtonGeneric label="Ver" CallBack={CallBackView}/>
			<ButtonGeneric label="Eliminar" CallBack={CallBackDelete}/>
        </ButtonGroup>
	);
}

OptionsERVButtons.propTypes = {
    CallBackEdit: PropTypes.func.isRequired,
	CallBackView: PropTypes.func.isRequired,
	CallBackDelete: PropTypes.func.isRequired
}