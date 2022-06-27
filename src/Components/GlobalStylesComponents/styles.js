import { makeStyles } from '@material-ui/core';

export const styles = makeStyles(() => ({
    appBar: {
        width: '100%',
    },
    menuPaper: {
        "& .MuiPaper-root": {
            backgroundColor: '#EDEBEC',
            boxShadow: 'none',
            color: '#009FE3'
        }
    },
    Link:{
        textDecoration: 'none',
        color: '#252F80',
        fontWeight: 550,
    },
    LinkActive:{
        borderBottom: '2px solid #221FBC'
    },
    disabled: {
        color: '#A6A6A6'
    },
    mainTitle: {
        color: '#fff',
        fontWeight: 600,
        lineHeight: '3%',
        position: 'absolute',
        
        fontSize: '3.75rem',
        padding: '0 3% 0 ',
        zIndex: 1,
    },
    mainBody1: {
        color: '#fff',
        lineHeight: '3%',
        position: 'absolute',
        padding: '0 4% 0 ',
        zIndex: 1,
    },
    loginCard: {
        bottom: 'auto',
        left: '50%',
        maxHeight:500,
        maxWidth: 260,
        marginRight: '-50%',
        minHeight: 320,
        padding: '2% 3%',
        position: 'absolute',
        right: 'auto',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
    },
    loginBackground: {
        backgroundColor: '#00C6B7',
        backgroundImage: 'linear-gradient(#222F3E, rgba(34, 47, 62, 0.8))',
        display: 'flex',
        fontSize: '1.125em',
        height: '100vh',
        justifyContent: 'space-between',
        left: 0,
        position: 'sticky',
        top: 0,
        width: '100vw',
        visibility: 'visible',
        zIndex: -1,
    },
    loginBox: {
        alignItems: 'flex-end',
        display: 'flex',
        padding: '20px 0 0'
    },
    loginIconField: {
        color: 'action.active',
        mr: 1,
        my: 0.5
    },
    loginButton: {
        background: '#222F3E',
        color: 'white',
        height: 40,
        width: 240,
        '&:hover': {
            backgroundColor: '#00C6B7',
            color: '#222F3E',
        }
    },
    userButton: {
        fontSize: '75%',
        fontWeight: 550,
        letterSpacing: '0.02em',
    },
    radialGradientBackground: {
        backgroundImage: 'radial-gradient(rgba(0, 198, 183, 0.4) 1px, rgba(34, 47, 62, 0) 0px)',
        backgroundSize: '32px 32px',
        minHeight: '100vh',
        position: 'absolute',
        top: 0,
        width: '100vw',
        zIndex: -1,
    }
}));