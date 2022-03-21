import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Header } from '../Components/Header/Header';

export const LayoutPage = ({ children }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                bgcolor: '#fff',
                width: '100vw',
                height: '100vh'
            }}
        >
            <Header />
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${240}px)` } }}
            >
                { children }
            </Box>
        </Box>
    )
}

LayoutPage.propTypes = {
    children: PropTypes.node.isRequired
}