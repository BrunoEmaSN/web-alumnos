import {
    cursosAdd,
    cursosDelete,
    cursosGetAll,
    cursosUpdate
} from "../../../Services/restCallCursos";
import { types } from "../../../Types";
import { cursoFormatter } from "../../../Utils/Model/cursoModel";


export const startLoadingCursos = () => {
    return async ( dispatch ) => {
        const cursos = await cursosGetAll();
        dispatch( loadingCursos( cursos ) )
    };
};

const loadingCursos = ( cursos ) => ({
    type: types.cursos + types.getAll,
    payload: cursos
});

export const startSetActive = ( datosCurso ) => {
    return ( dispatch ) => {
        const curso = cursoFormatter( datosCurso );
        dispatch( activeCurso( curso ) );
    }
}

export const activeCurso = ( curso ) => ({
    type: types.cursos + types.active,
    payload: curso
});

export const cleanActiveCurso = () => ({
    type: types.cursos + types.cleanActive
});

export const startNewCurso = ( curso ) => {
    return async ( dispatch ) => {
        const result = await cursosAdd({
            aulaId: curso.aula.id,
            nivel: curso.nivel,
            turno: curso.turno,
            gradoAno: curso.gradoAno,
            division: curso.division
        });
        
        dispatch( addNewCurso({
            ...curso,
            id: result.last_id,
            grado_ano: curso.gradoAno,
            aula_id: curso.aula.id,
            aula_descripcion: curso.aula.descripcion,
            aula_capacidad: curso.aula.capacidad
        }) );
    };
};

export const addNewCurso = ( curso ) => ({
    type: types.cursos + types.add,
    payload: curso
});

export const startUpdateCurso = ( curso ) => {
    return async ( dispatch ) => {
        const { id } = curso;
        await cursosUpdate( id, curso );
        dispatch( refreshCurso( curso ) );
    };
};

export const refreshCurso = ( curso ) => ({
    type: types.cursos + types.update,
    payload: {
        ...curso,
        grado_ano: curso.gradoAno,
        aula_id: curso.aula.id,
        aula_descripcion: curso.aula.descripcion,
        aula_capacidad: curso.aula.capacidad
    }
});

export const startDeletingCurso = ( id ) => {
    return async ( dispatch ) => {
        await cursosDelete( id );
        dispatch( deleteCurso( id ) );
    };
};

export const deleteCurso = ( id ) => ({
    type: types.cursos + types.remove,
    payload: id
});
