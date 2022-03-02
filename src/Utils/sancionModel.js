import { Alumno1 } from "./alumnoModel";
import { Docente1 } from "./docenteModel";

export const sancionModel = {
    id: 0,
    alumno: '',
    docente: '',
    tipoSancion: '',
    descripcion: '',
    fecha: ''
};

export const Sancion1 = {
    id: 1,
    alumno: Alumno1,
    docente: Docente1,
    tipoSancion: 'Leve',
    descripcion: 'Duerme en clases',
    fecha: '2022-03-24'
};

export const tiposSanciones = [ 'Leve', 'Moderada', 'Grave' ];