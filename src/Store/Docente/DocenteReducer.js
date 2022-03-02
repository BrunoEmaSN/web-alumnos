import { types } from "../../Types";

const initialState = {
    docentes: [],
    active: {}
};

export const DocenteReducer = ( state = initialState, actions ) => {
    switch ( actions.type ) {
        case types.docentes + types.getAll:
            return {
                ...state,
                docentes: [ { ...actions.payload } ]
            };
        
        case types.docentes + types.getOne:
            return {
                ...state,
                active: actions.payload
            };
        
        case types.docentes + types.cleanActive:
            return {
                ...state,
                active: initialState.active
            };

        case types.docentes + types.add:
            return {
                ...state,
                docentes: [ ...state.docentes, actions.payload ]
            };
        
        case types.docentes + types.update:
            return {
                ...state,
                docentes: state.docentes.map(
                    d => d.documento === actions.payload.docente.documento
                    ? actions.payload.docente
                    : d
                )
            };
        
        case types.docentes + types.remove:
            return {
                ...state,
                docentes: state.docentes.filter( d => d.documento !== actions.payload )
            };

        default:
            return state;
    }
}