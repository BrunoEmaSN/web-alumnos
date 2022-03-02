import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';
import { AlumnosScreen } from '../Pages/Alumnos/AlumnosScreen';
import { AulasScreen } from '../Pages/Aulas/AulasScreen';
import { CalificacionesScreen } from '../Pages/Calificaciones/CalificacionesScreen';
import { ClasesScreen } from '../Pages/Clases/ClasesScreen';
import { CursosScreen } from '../Pages/Cursos/CursosScreen';
import { DocentesScreen } from '../Pages/Docentes/DocentesScreen';
import { HomeScreen } from '../Pages/Home/HomeScreen';
import { MateriasScreen } from '../Pages/Materias/MatriasScreen';
import { MesasExamenesScreen } from '../Pages/MesasExamenes/MesasExamenesScreen';
import { SancionesScreen } from '../Pages/Sanciones/SancionesScreen';
import { TutoresScreen } from '../Pages/Tutores/TutoresScreen';

export const AppRoute = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/Aulas" element={
                        <AulasScreen />
                    }/>
                    
                    <Route exact path="/Alumnos" element={
                        <AlumnosScreen />
                    }/>

                    <Route exact path="/Calificaciones" element={
                        <CalificacionesScreen />
                    }/>

                    <Route exact path="/Clases" element={
                        <ClasesScreen />
                    }/>

                    <Route exact path="/Cursos" element={
                        <CursosScreen />
                    }/>

                    <Route exact path="/Docentes" element={
                        <DocentesScreen />
                    }/>

                    <Route exact path="/Materias" element={
                        <MateriasScreen />
                    }/>

                    <Route exact path="/MesasExamenes" element={
                        <MesasExamenesScreen />
                    }/>

                    <Route exact path="/Sanciones" element={
                        <SancionesScreen />
                    }/>

                    <Route exact path="/Tutores" element={
                        <TutoresScreen />
                    }/>

                    <Route exact path="/" element={
                        <HomeScreen />
                    }/>
                    
                    <Route path="*" element={ <Navigate to ="/" /> }/>
                </Routes>
            </div>
        </Router>
    )
}
