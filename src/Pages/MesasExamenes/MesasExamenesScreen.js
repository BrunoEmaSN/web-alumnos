import React, { useContext } from "react";
import { Box } from "@material-ui/core";
import { MesasExamenesContext } from "../../Context/BuildContext";
import { MesasExamenesState } from "../../Context/MesasExamenesState";
import { MesasExamenesList } from "./MesasExamenesList";
import { MesasExamenesMaestrosSave } from "./MesasExamenesMaestrosSave";

const MesasExamenes = () => {
    const {active} = useContext(MesasExamenesContext);

    return (
        <Box sx={{ p:3 }}>
            {
                Object.entries(active).length
                ? <MesasExamenesMaestrosSave />
                : <MesasExamenesList />
            }
        </Box>
    );
};

export const MesasExamenesScreen = () => {
    return (
        <MesasExamenesState>
            <MesasExamenes />
        </MesasExamenesState>
    );
}