import {
    sancionesGetAll,
    sancionesUpdate
} from "../../../Services/restCallSanciones";
import { types } from "../../../Types";
import { sancionFormatter } from "../../../Utils/Model/sancionModel";

export const startLoadingSanciones = () => {
    return async ( dispatch ) => {
        const sanciones = await sancionesGetAll();
        dispatch( loadingSaciones( sanciones ) );
    };
};

export const loadingSaciones = ( sanciones ) => ({
    type: types.sanciones + types.getAll,
    payload: sanciones
});

export const startSetActive = (datosSancion) => {
    return async (dispatch) => {
        const sancion = sancionFormatter( datosSancion );
        dispatch( activeSancion( sancion ) );
    }
}

export const activeSancion = ( sancion ) => ({
    type: types.sanciones + types.active,
    payload: sancion
});

export const cleanActiveSancion = () => ({
    type: types.sanciones + types.cleanActive
});

export const startUpdateSancion = ( sancion ) => {
    return async ( dispatch ) => {
        const { id } = sancion;
        await sancionesUpdate( id, sancion );
        dispatch( refreshSancion({
            id: sancion.id,
            alumno_id: sancion.alumno,
            docente_id: sancion.docente,
            tipo_sancion: sancion.tipoSancion,
            descripcion: sancion.descripcion,
            fecha: sancion.fecha
        }) );
    };
};

export const refreshSancion = ( sancion ) => ({
    type: types.sanciones + types.update,
    payload: sancion
});