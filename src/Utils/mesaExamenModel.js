import { Docente1 } from "./docenteModel";
import { Materia1 } from "./materiaModel";

export const mesaExamenModel = {
    maestro:{
        id: 0,
        descripcion: ''
    },
    novedad: []
};

export const MesaExamen1 = {
    maestro: {
        id: 1,
        descripcion: 'Mesa 2022'
    },
    novedad: [
        {
            id: 1,
            materias: Materia1,
            fechas: '2022-03-17',
            llamados: 'Segundo',
            examinador1: Docente1,
            examinador2: Docente1,
            examinador3: Docente1
        }
    ]
};

export const MesaExamen2 = [];

export const Llamado1 = ['Primer', 'Segundo'];