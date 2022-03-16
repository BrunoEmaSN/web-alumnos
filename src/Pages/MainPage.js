import React from 'react';
import { ThemeProvider } from '@mui/material/styles'
import { AppRoute } from '../Routers/AppRoute';
import { theme } from '../Components/GlobalStylesComponents/theme';

export const MainPage = () => {
    return (
        <ThemeProvider theme={ theme }>
            <AppRoute />
        </ThemeProvider>
    )
}
