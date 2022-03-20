import React from 'react';
import { ThemeProvider } from '@mui/material/styles'
import { AppRoute } from '../Routers/AppRoute';
import { theme } from '../Components/GlobalStylesComponents/theme';
import AppState from '../Context/AppState';

export const MainPage = () => {
    return (
        <AppState>
            <ThemeProvider theme={ theme }>
                <AppRoute />
            </ThemeProvider>
        </AppState>
    )
}
