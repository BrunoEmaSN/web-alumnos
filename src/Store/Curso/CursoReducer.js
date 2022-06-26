import { types } from "../../Types";

const initialState = {
    cursos: [],
    active: {}
};

export const CursoReducer = ( state = initialState, actions ) => {
    switch (actions.type) {
        case types.cursos + types.getAll:
            return {
                ...state,
                cursos: [ ...actions.payload ]
            };
        
        case types.cursos + types.active:
            return {
                ...state,
                active: actions.payload
            };
        
        case types.cursos + types.cleanActive:
            return {
                ...state,
                active: initialState.active
            };

        case types.cursos + types.add:
            return {
                ...state,
                cursos: [ ...state.cursos, actions.payload ]
            };
        
        case types.cursos + types.update:
            return {
                ...state,
                cursos: state.cursos.map(
                    c => c.id === actions.payload.id
                    ? actions.payload
                    : c
                )
            };
        
        case types.cursos + types.remove:
            return {
                ...state,
                cursos: state.cursos.filter( c => c.id !== actions.payload )
            };
        default:
            return state;
    }
}