import React, { useContext } from "react";
import { MesasExamenesContext } from "../../Context/BuildContext";
import { MesasExamenesState } from "../../Context/MesasExamenesState";
import { MesasExamenesList } from "./MesasExamenesList";
import { MesasExamenesMaestrosSave } from "./MesasExamenesMaestrosSave";

const MesasExamenes = () => {
    const {active} = useContext(MesasExamenesContext);

    return (
        <div>
            {
                Object.entries(active).length
                ? <MesasExamenesMaestrosSave />
                : <MesasExamenesList />
            }
        </div>
    );
};

export const MesasExamenesScreen = () => {
    return (
        <MesasExamenesState>
            <MesasExamenes />
        </MesasExamenesState>
    );
}