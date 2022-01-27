import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';
import { AlumnosSave } from '../Pages/Alumnos/AlumnosSave';
import { AlumnosScreen } from '../Pages/Alumnos/AlumnosScreen';
import { HomeScreen } from '../Pages/Home/HomeScreen';

export const AppRoute = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/Alumnos/Save" element={
                        <AlumnosSave />
                    } />
                    <Route exact path="/Alumnos" element={
                        <AlumnosScreen />
                    }/>
                    <Route exact path="/" element={
                        <HomeScreen />
                    }/>
                    <Route path="*" element={<Navigate to ="/" />}/>
                </Routes>
            </div>
        </Router>
    )
}
