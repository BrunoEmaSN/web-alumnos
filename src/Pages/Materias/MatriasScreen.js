import React, { useContext } from "react";
import { MateriasContext } from "../../Context/BuildContext";
import { MateriasState } from "../../Context/MateriasState";
import { MateriasList } from "./MateriasList";
import { MateriasSave } from "./MateriasSave";

const Materias = () => {
    const { active } = useContext(MateriasContext);

    return (
        <div>
            {
                Object.entries(active).length
                ? <MateriasSave />
                : <MateriasList />
            }
        </div>
    );
};

export const MateriasScreen = () => {
    return (
        <MateriasState>
            <Materias />
        </MateriasState>
    );
}