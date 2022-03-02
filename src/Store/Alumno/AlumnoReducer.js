import { types } from "../../Types";

const initialState = {
    alumnos: [],
    active: {}
};

export const AlumnoReducer = ( state = initialState, actions ) => {
    switch ( actions.type ) {
        case types.alumnos + types.getAll:
            return {
                ...state,
                alumnos: [ { ...actions.payload } ]
            };
        
        case types.alumnos + types.getOne:
            return {
                ...state,
                active: actions.payload
            };
        
        case types.alumnos + types.cleanActive:
            return {
                ...state,
                active: initialState.active
            };

        case types.alumnos + types.add:
            return {
                ...state,
                alumnos: [ ...state.alumnos, actions.payload ]
            };
        
        case types.alumnos + types.update:
            return {
                ...state,
                alumnos: state.alumnos.map(
                    a => a.documento === actions.payload.alumno.documento
                    ? actions.payload.alumno
                    : a
                )
            };
        
        case types.alumnos + types.remove:
            return {
                ...state,
                alumnos: state.alumnos.filter( a => a.documento !== actions.payload )
            };
        default:
            return state;
    }
}
