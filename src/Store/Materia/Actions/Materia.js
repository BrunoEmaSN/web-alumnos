import {
    materiasAdd,
    materiasDelete,
    materiasGetAll,
    materiasGetOne,
    materiasUpdate
} from "../../../Services/restCallMaterias";
import { types } from "../../../Types";
import { materiaFormatter } from "../../../Utils/Model/materiaModel";

export const startLoadingMaterias = () => {
    return async ( dispatch ) => {
        const materias = await materiasGetAll();
        dispatch( loadingMaterias( materias ) );
    };
};

const loadingMaterias = ( materias ) => ({
    type: types.materias + types.getAll,
    payload: materias
});

export const startSetActive = ( id ) => {
    return async ( dispatch ) => {
        const datosMateria = await materiasGetOne( id );
        const materia = materiaFormatter(datosMateria);
        dispatch( activeMateria( materia ) );
    }
}

export const activeMateria = ( materia ) => ({
    type: types.materias + types.active,
    payload: materia
});

export const cleanActiveMateria = () => ({
    type: types.materias + types.cleanActive
});

export const startNewMateria = ( materia ) => {
    return async ( dispatch ) => {
        const result = await materiasAdd({
            decripcion: materia.descripcion,
            regimen: materia.regimen,
            planEstudio: materia.planEstudio
        });

        dispatch( addNewMateria({
            ...materia,
            id: result.last_id,
            plan_estudio: materia.planEstudio
        }) );
    };
};

export const addNewMateria = ( materia ) => ({
    type: types.materias + types.add,
    payload: materia
});

export const startUpdateMateria = ( materia ) => {
    return async ( dispatch ) => {
        const { id } = materia;
        await materiasUpdate( id, materia );
        dispatch( refreshMateria({
            ...materia,
            id,
            descripcion: materia.descripcion,
            regimen: materia.regimen,
            plan_estudio: materia.planEstudio
        }) );
    };
};

export const refreshMateria = ( materia ) => ({
    type: types.materias + types.update,
    payload: materia
});

export const startDeletingMateria = ( id ) => {
    return async ( dispatch ) => {
        await materiasDelete( id );
        dispatch( deleteMateria( id ) );
    };
};

export const deleteMateria = ( id ) => ({
    type: types.materias + types.remove,
    payload: id
});
