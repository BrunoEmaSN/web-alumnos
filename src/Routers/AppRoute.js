import React, { useContext } from 'react';
import { usePromiseTracker } from "react-promise-tracker";

import { Backdrop } from '@mui/material';
import { CircularProgress } from '@mui/material';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';

import jwtDecode from 'jwt-decode';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

import { AppContext } from '../Context/BuildContext';
import { AlumnosScreen } from '../Pages/Alumnos/AlumnosScreen';
import { AulasScreen } from '../Pages/Aulas/AulasScreen';
import {
    CalificacionesScreen
} from '../Pages/Calificaciones/CalificacionesScreen';
import { ClasesScreen } from '../Pages/Clases/ClasesScreen';
import { CursosScreen } from '../Pages/Cursos/CursosScreen';
import { DocentesScreen } from '../Pages/Docentes/DocentesScreen';
import { HomeScreen } from '../Pages/Home/HomeScreen';
import { MateriasScreen } from '../Pages/Materias/MatriasScreen';
import {
    MesasExamenesScreen
} from '../Pages/MesasExamenes/MesasExamenesScreen';
import { SancionesScreen } from '../Pages/Sanciones/SancionesScreen';
import { TutoresScreen } from '../Pages/Tutores/TutoresScreen';
import { LoginPage } from '../Pages/LoginPage';
import { Box } from '@mui/material';

export const AppRoute = () => {
    const { promiseInProgress } = usePromiseTracker();
    const { token } = useContext( AppContext );
    let auth = false;
    if( token ){
        const { exp } = jwtDecode( token );
        auth = (Date.now() < exp * 1000);
    }

    return (
        <Router>
            <Box>
                <Routes>
                    <Route path="/login" element={ <PublicRoute auth={ auth } /> }>
                        <Route index element={
                            <LoginPage />
                        } />
                    </Route>
                    <Route path="/" element={ <PrivateRoute auth={ auth } /> }>
                        <Route index element={<HomeScreen />}/>
                        
                        <Route exact path="/Alumnos" element={
                            <AlumnosScreen />
                        }/>
                        <Route exact path="/Docentes" element={
                            <DocentesScreen />
                        }/>
                        <Route exact path="/Tutores" element={
                            <TutoresScreen />
                        }/>

                        <Route exact path="/Aulas" element={
                            <AulasScreen />
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
                        <Route exact path="/Materias" element={
                            <MateriasScreen />
                        }/>
                        <Route exact path="/MesasExamenes" element={
                            <MesasExamenesScreen /> 
                        }/>
                        <Route exact path="/Sanciones" element={
                            <SancionesScreen />
                        }/>
                    </Route>
                    
                    <Route path="*" element={ <Navigate to ="/" /> }/>
                </Routes>
                <Backdrop
                    sx={{
                        color: '#fff',
                        zIndex: (theme) => theme.zIndex.drawer + 1
                    }}
                    open={promiseInProgress}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </Box>
        </Router>
    )
}
