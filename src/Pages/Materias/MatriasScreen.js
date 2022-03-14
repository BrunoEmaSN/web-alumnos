import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingMaterias } from "../../Store/Materia/Actions/Materia";
import { MateriasList } from "./MateriasList";
import { MateriasSave } from "./MateriasSave";

export const MateriasScreen = () => {
    const dispatch = useDispatch();

    const { active } = useSelector( state => state.materia );
    useEffect(() => {
        dispatch( startLoadingMaterias() );
    }, []);
    return (
        <div>
            { Object.entries(active).length ? <MateriasSave /> : <MateriasList /> }
        </div>
    );
};