import { types } from "../../../Types";
import { alumnoFormater } from "../../../Utils/alumnoModel";
import {
    alumnosGetAll,
    alumnosGetOne,
    alumnosTutorGetByAlumno,
    alumnosMateriaGetByAlumno,
    alumnosAdd,
    alumnosMateriaAdd,
    alumnosTutorAdd,
    alumnosUpdate,
    alumnosTutorUpdate,
    alumnosMateriaUpdate,
    alumnosDelete
} from "../../../Services/restCallAlumnos";

export const startLoadingAlumnos = () => {
    return async ( dispatch ) => {
        const alumnos = await alumnosGetAll();
        dispatch( loadingAlumnos( alumnos ) );
    };
};

const loadingAlumnos = ( alumnos ) => ({
    type: types.alumnos + types.getAll,
    payload: alumnos
});

export const startSetActive = ( documento ) => {
    return async (dispatch) => {
        const datosAlumno = await alumnosGetOne( documento );
        const datosTutores = await alumnosTutorGetByAlumno( documento );
        const datosMaterias = await alumnosMateriaGetByAlumno( documento );
        const alumno = alumnoFormater(
            datosAlumno,
            datosTutores,
            datosMaterias
        );

        dispatch( activeAlumno( alumno ) );
    }
}

export const activeAlumno = ( alumno ) => ({
    type: types.alumnos + types.active,
    payload: alumno
});

export const cleanActiveAlumno = () => ({
    type: types.alumnos + types.cleanActive
});

export const startNewAlumno = ( alumno ) => {
    return async ( dispatch ) => {
        const { tutores, materias, ...datosAlumno } = alumno;
        const id = datosAlumno.documento;

        await alumnosAdd( datosAlumno );
        await alumnosTutorAdd( tutores );
        await alumnosMateriaAdd({ documento: id, materias });

        dispatch( addNewAlumno( alumno ) );
    };
};

export const addNewAlumno = ( alumno ) => ({
    type: types.alumnos + types.add,
    payload: alumno
});

export const startUpdateAlumno = ( alumno ) => {
    return async ( dispatch ) => {
        const { tutores, materias, ...datosAlumno } = alumno;
        const id = datosAlumno.documento;

        await alumnosUpdate( id, datosAlumno );
        await alumnosTutorUpdate( id, tutores );
        await alumnosMateriaUpdate( id, { documento: id, materias } );

        dispatch( refreshAlumno( alumno ) );
    };
};

export const refreshAlumno = ( alumno ) => ({
    type: types.alumnos + types.update,
    payload: alumno
});

export const startDeletingAlumno = ( documento ) => {
    return async ( dispatch ) => {
        await alumnosDelete( documento );
        dispatch( deleteAlumno( documento ) );
    };
};

export const deleteAlumno = ( documento ) => ({
    type: types.alumnos + types.remove,
    payload: documento
});
