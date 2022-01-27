import { types } from "../../Types";
import { alumnoModel } from "../../Utils/alumnoModel";

const inicialState = {
    alumnos: [],
    active: alumnoModel
};

export const AlumnoReducer = ( state = inicialState, actions ) => {
    switch ( actions.type ) {
        case types.alumnosGetAll:
            return {
                ...state,
                alumnos: [ ...actions.payload ]
            };
        
        case types.alumnosGetOne:
            return {
                ...state,
                active: state.alumnos.find( a => a.documento === actions.payload )
            };

        case types.alumnosAdd:
            return {
                ...state,
                alumnos: [ ...state.alumnos, actions.payload ]
            };
        
        case types.alumnosUpdate:
            return {
                ...state,
                alumnos: state.alumnos.map(
                    a => a.documento === actions.payload.documento
                    ? actions.payload.alumno
                    : a
                )
            };
        
        case types.alumnosRemove:
            return {
                ...state,
                active: null,
                alumnos: state.alumnos.filter( a => a.documento !== actions.payload )
            };
        default:
            return state;
    }
}
