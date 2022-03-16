import {
    tutoresAdd,
    tutoresDelete,
    tutoresGetAll,
    tutoresGetOneWithPareja,
    tutoresUpdate
} from "../../../Services/restCallTutores";
import { types } from "../../../Types";
import { tutorFormatter } from "../../../Utils/Model/tutorModel";

export const startLoadingTutores = () => {
    return async ( dispatch ) => {
        const tutores = await tutoresGetAll();
        dispatch( loadingTutores( tutores ) );
    };
};

export const loadingTutores = ( tutores ) => ({
    type: types.tutores + types.getAll,
    payload: tutores
});

export const startSetActive = ( documento ) => {
    return async ( dispatch ) => {
        const datosTutor = await tutoresGetOneWithPareja( documento );
        const tutor = tutorFormatter( datosTutor );
        dispatch( activeTutor( tutor ) );
    }
}

export const activeTutor = ( tutor ) => ({
    type: types.tutores + types.active,
    payload: tutor
});

export const cleanActiveTutor = () => ({
    type: types.tutores + types.cleanActive
});

export const startNewTutor = ( tutor ) => {
    return async ( dispatch ) => {
        await tutoresAdd( tutor );
        dispatch( addNewTutor( tutor ) );
    };
};

export const addNewTutor = ( tutor ) => ({
    type: types.tutores + types.add,
    payload: tutor
});

export const startUpdateTutor = ( tutor ) => {
    return async ( dispatch ) => {
        const { documento } = tutor;
        await tutoresUpdate( documento, tutor );
        if( !tutor.tienePareja ){
            tutor.pareja = {
                nombrePareja: '',
                apellidoPareja: '',
                dniPareja: '',
                telefonoFijoPareja: '',
                telefonoMovilPareja: ''
            };
        }
        dispatch( refreshTutor( tutor ) );
    };
};

export const refreshTutor = ( tutor ) => ({
    type: types.tutores + types.update,
    payload: tutor
});

export const startDeletingTutor = ( documento ) => {
    return async ( dispatch ) => {
        await tutoresDelete( documento );
        dispatch( deleteTutor( documento ) );
    };
};

export const deleteTutor = ( documento ) => ({
    type: types.tutores + types.remove,
    payload: documento
});