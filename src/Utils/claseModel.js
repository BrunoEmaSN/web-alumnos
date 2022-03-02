import { Docente1 } from './docenteModel';
import { Materia1 } from './materiaModel';
import { Curso1 } from './cursoModel';

export const claseModel = {
    id: 0,
    docente: '',
    materia: '',
    periodo: '',
    curso: '',
    dias: '',
    horarioInicio: '',
    horarioFin: '',
    estado: true
};

export const Clase1 = {
    id: 1,
    docente: Docente1,
    materia: Materia1,
    periodo: {
        id: 1,
        fechaInicio: '2022/03/03',
        fechaFin: '2022/12/12',
        descripcion: 'Periodo 2022',
        tipo: 'Ciclo Lectivo'
    },
    curso: Curso1,
    dias: 'Lunes',
    horarioInicio: '07:30:00',
    horarioFin: '09:45:00',
    estado: true
}