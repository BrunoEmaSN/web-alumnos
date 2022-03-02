import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMaterias } from "../../Store/Materia/Actions/Materia";
import { Materia1 } from "../../Utils/materiaModel";
import { MateriasList } from "./MateriasList";
import { MateriasSave } from "./MateriasSave";

export const MateriasScreen = () => {
    const dispatch = useDispatch();

    const { active } = useSelector( state => state.materia );
    useEffect(() => {
        dispatch( getMaterias( Materia1 ) );
    }, []);
    return (
        <div>
            { Object.entries(active).length ? <MateriasSave /> : <MateriasList /> }
        </div>
    );
};