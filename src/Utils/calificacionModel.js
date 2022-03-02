import { Alumno1 } from "./alumnoModel";
import { Docente1 } from "./docenteModel";
import { Materia1 } from "./materiaModel";

export const calificacionModel = {
    id: 0,
    regimen: '',
    etapa: '',
    nota: '',
    descripcion: '',
    alumno: '',
    materia: '',
    docente: '',
};

export const Calificacion1 = {
    id: 1,
    regimen: 'Anual',
    etapa: '1er',
    nota: 10,
    descripcion: 'Examen 1',
    alumno: Alumno1,
    materia: Materia1,
    docente: Docente1,
}