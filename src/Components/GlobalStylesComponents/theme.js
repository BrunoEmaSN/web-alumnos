import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#009FE3',
            dark: '#252F80',
        },
        secondary: {
            main: '#EDEBEC',
            light: '#A6A6A6',
            dark: '#575757',

        },
        common: {
            black: '#fff',
            white: '#000',
        },
    },
    typography: {
        fontFamily: 'Segoe UI',
        fontWeightRegular: 'normal',
        fontWeightMedium: 600,
        fontWeightBold: 800
    }
});