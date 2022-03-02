import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMesasExamenes } from "../../Store/MesaExamen/Actions/MesaExamen";
import { MesaExamen1 } from "../../Utils/mesaExamenModel";
import { MesasExamenesList } from "./MesasExamenesList";
import { MesasExamenesMaestrosSave } from "./MesasExamenesMaestrosSave";

export const MesasExamenesScreen = () => {
    const dispatch = useDispatch();

    const { active } = useSelector( state => state.mesaExamen );
    useEffect(() => {
        dispatch( getMesasExamenes( MesaExamen1 ) );
    }, []);
    return (
        <div>
            { Object.entries(active).length ?
            <MesasExamenesMaestrosSave /> :
            <MesasExamenesList /> }
        </div>
    );
};