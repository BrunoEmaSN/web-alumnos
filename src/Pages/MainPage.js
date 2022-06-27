import React from 'react';
import { ThemeProvider } from '@mui/material/styles'
import { AppRoute } from '../Routers/AppRoute';
import { AppState } from '../Context/AppState';
import { theme } from '../Components/GlobalStylesComponents/theme';

export const MainPage = () => {
    return (
        <AppState>
            <ThemeProvider theme={ theme }>
                <AppRoute />
            </ThemeProvider>
        </AppState>
    )
}
