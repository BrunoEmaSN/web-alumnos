import {
    docentesAdd,
    docentesDelete,
    docentesGetAll,
    docentesGetOne,
    docentesMateriaAdd,
    docentesMateriaGetByDocente,
    docentesMateriaUpdate,
    docentesUpdate
} from "../../../Services/restCallDocentes";
import { types } from "../../../Types";
import { docenteFormatter } from "../../../Utils/Model/docenteModel";

export const startLoadingDocentes = () => {
    return async ( dispatch ) => {
        const docentes = await docentesGetAll();
        dispatch( loadingDocentes( docentes ) );
    };
};

const loadingDocentes = ( docentes ) => ({
    type: types.docentes + types.getAll,
    payload: docentes
});

export const startSetActive = ( documento ) => {
    return async (dispatch) => {
        const datosDocente = await docentesGetOne( documento );
        const docente = docenteFormatter( datosDocente );
        const materias = await docentesMateriaGetByDocente( documento );
        dispatch( activeDocente({ ...docente, materias }) );
    }
}

export const activeDocente = ( docente ) => ({
    type: types.docentes + types.active,
    payload: docente
});

export const cleanActiveDocente = () => ({
    type: types.docentes + types.cleanActive
});

export const startNewDocente = ( docente ) => {
    return async ( dispatch ) => {
        const { materias, ...datosDocente } = docente;
        const { documento } = datosDocente;

        await docentesAdd( datosDocente );
        await docentesMateriaAdd({ documento, materias} );
        dispatch( addNewDocente( docente ) );
    };
};

export const addNewDocente = ( docente ) => ({
    type: types.docentes + types.add,
    payload: docente
});

export const startUpdateDocente = ( docente ) => {
    return async ( dispatch ) => {
        const { materias, ...datosDocente } = docente;
        const { documento } = datosDocente;
        
        await docentesUpdate( documento, datosDocente );
        await docentesMateriaUpdate( documento, { documento, materias } );
        dispatch( refreshDocente( docente ) );
    };
};

export const refreshDocente = ( docente ) => ({
    type: types.docentes + types.update,
    payload: docente
});

export const startDeletingDocente = ( documento ) => {
    return async ( dispatch ) => {
        await docentesDelete( documento );
        dispatch( deleteDocente( documento ) );
    };
};

export const deleteDocente = ( documento ) => ({
    type: types.docentes + types.remove,
    payload: documento
});
