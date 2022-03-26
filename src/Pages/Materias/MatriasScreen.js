import React, { useContext } from "react";
import { Box } from "@material-ui/core";
import { MateriasContext } from "../../Context/BuildContext";
import { MateriasState } from "../../Context/MateriasState";
import { MateriasList } from "./MateriasList";
import { MateriasSave } from "./MateriasSave";

const Materias = () => {
    const { active } = useContext(MateriasContext);

    return (
        <Box sx={{ p:3 }}>
            {
                Object.entries(active).length
                ? <MateriasSave />
                : <MateriasList />
            }
        </Box>
    );
};

export const MateriasScreen = () => {
    return (
        <MateriasState>
            <Materias />
        </MateriasState>
    );
}