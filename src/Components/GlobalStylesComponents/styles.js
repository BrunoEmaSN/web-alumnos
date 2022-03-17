import { makeStyles } from '@material-ui/core';

export const styles = makeStyles((theme) => ({
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
        color: '#FFF',
        alignItems: 'center',
        display: 'flex',
        fontWeight: 600,
        lineHeight: '3%',
        position: 'absolute',
        
        [theme.breakpoints.up('md')]:{
            fontSize: '3.75rem',
            padding: '5% 12%',
        },

        [theme.breakpoints.down('md')]:{
            "& .MuiTypography-root": {
                fontSize: '3rem',
            },
            padding: '5% 12%',
        },
        
        [theme.breakpoints.down('sm')]:{
            fontSize: '2.8rem',
            padding: '5% 10%',
        },

        [theme.breakpoints.down('xs')]:{
            fontSize: '2.6rem',
            padding: '5% 0',
        }
    },
    mainImg: {
        alignItems: 'center',
        height: 'auto',
        objectFit: 'contain',
        width: '100%',
        [theme.breakpoints.down('sm')]:{
            objectFit: 'cover',
            height: '40%',
        },
    },
    loginCard: {
        position: 'absolute',
        marginLeft: '12%',
        marginTop: '3%',
        minHeight: 320,
        maxHeight:500,
        maxWidth: 260,
        padding: '2% 3%',
        [theme.breakpoints.down('xs')]:{
            marginLeft: '7%',
        }
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
        height: 40,
        width: 240
    },
    userButton: {
        fontSize: '75%',
        fontWeight: 550,
        letterSpacing: '0.02em',
    },
}));