import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { AlumnoReducer } from "./Alumno/AlumnoReducer";
import { AulaReducer } from "./Aula/AulaReducer";
import { CalificacionReducer } from "./Calificacion/CalificacionReducer";
import { ClaseReducer } from './Clase/ClaseReducer';
import { CursoReducer } from "./Curso/CursoReducer";
import { DocenteReducer } from "./Docente/DocenteReducer";
import { MateriaReducer } from "./Materia/MateriaReducer";
import { MesaExamenReducer } from "./MesaExamen/MesaExamenReducer";
import { SancionReducer } from "./Sancion/SancionReducer";
import { TutorReducer } from "./Tutor/TutorReducer";

const composeEnhancers = ( typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || compose;

const reducers = combineReducers({
    alumno: AlumnoReducer,
    aula: AulaReducer,
    calificacion: CalificacionReducer,
    clase: ClaseReducer,
    curso: CursoReducer,
    docente: DocenteReducer,
    materia: MateriaReducer,
    mesaExamen: MesaExamenReducer,
    sancion: SancionReducer,
    tutor: TutorReducer,
});
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);