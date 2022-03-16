import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingMesasExamenes } from "../../Store/MesaExamen/Actions/MesaExamen";
import { MesasExamenesList } from "./MesasExamenesList";
import { MesasExamenesMaestrosSave } from "./MesasExamenesMaestrosSave";

export const MesasExamenesScreen = () => {
    const dispatch = useDispatch();

    const { active } = useSelector( state => state.mesaExamen );
    useEffect(() => {
        dispatch( startLoadingMesasExamenes() );
    }, []);
    return (
        <div>
            { Object.entries(active).length ?
            <MesasExamenesMaestrosSave /> :
            <MesasExamenesList /> }
        </div>
    );
};