import React, { useContext, useState } from 'react';
import { trackPromise, usePromiseTracker } from "react-promise-tracker";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Lock } from '@mui/icons-material';

import { AppContext } from '../Context/BuildContext';
import { styles } from '../Components/GlobalStylesComponents/styles';

export const LoginPage = () => {
    const { handleToken, login } = useContext(AppContext);
    
    const { promiseInProgress } = usePromiseTracker();

    const classes = styles();

    const [ showPassword, setshowPassword ] = useState( false );

    const [ messageError, setMessageError ] = useState( {} );

    const [ formValues, setFormValues] = useState({
        username: '',
        password: ''
    });

    const { username, password } = formValues;

    const isFormValid = () => {
        if( !username.length ){
            setMessageError({
                name: 'username',
                value: 'el usuario está incompleto'
            });
            return false;
        }

        if( !password.length ){
            setMessageError({
                name: 'password',
                value: 'la contraseña no es la correcta'
            });
            return false;
        }

        setMessageError({});

        return true;
    }

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [ target.name ]: target.value
        });
    }

    const handleClickShowPassword = () => {
        setshowPassword( !showPassword );
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if( isFormValid() ){
            const data = await trackPromise(login({ ...formValues }));
            if(data){
                const { token } = data;
                handleToken( token );
            }
        }
    }

    return (
        <Card className={ classes.loginCard }>
            <CardContent>
                <Typography variant="h6">
                    ¡Hola!
                </Typography>
                <Typography variant="h6" component="div">
                    Logueate para ingresar.
                </Typography>
                {
                    messageError.name === 'username' && (
                        <p 
                            style={{ position: 'absolute', fontSize: '12px',lineHeight: '16px',display: 'flex',alignItems: 'center',color: '#808080' }}
                        >
                            { messageError.value }
                        </p>
                    )
                }
                <FormControl sx={{ my: 2, width: '25.5ch' }} variant="standard">
                    <Box className={ classes.loginBox }>
                        <AccountCircle className={ classes.loginIconField }/>
                        <TextField
                            type="text"
                            autoComplete="off"
                            id="username"
                            name="username"
                            label="Usuario"
                            variant="standard"
                            onChange={ handleInputChange }
                        />
                    </Box>
                </FormControl>
                {
                    messageError.name === 'password' && (
                        <p 
                            style={{ position: 'absolute', fontSize: '12px',lineHeight: '16px',display: 'flex',alignItems: 'center',color: '#808080' }}
                        >
                            { messageError.value }
                        </p>
                    )
                }
                <FormControl sx={{ my: 3, width: '25.5ch' }} variant="standard">
                    <InputLabel sx={{ paddingLeft: '10%' }} htmlFor="password">Password</InputLabel>
                    <Box className={ classes.loginBox }>
                        <Lock className={ classes.loginIconField } />
                        <Input
                            type={ showPassword ? 'text' : 'password' }
                            autoComplete="off"
                            id="password"
                            name="password"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={ handleClickShowPassword }
                                        edge="end"
                                    >
                                        { showPassword ? <VisibilityOff /> : <Visibility /> }
                                    </IconButton>
                                </InputAdornment>
                            }
                            onChange={ handleInputChange }
                        />
                    </Box>
                </FormControl>
            </CardContent>
            <CardActions>
                <LoadingButton
                    onClick={ handleLogin }
                    loading={ promiseInProgress }
                    className={ classes.loginButton }
                    variant="contained"
                    sx={{ background: '#243081', color: 'white' }}
                >
                    Ingresar
                </LoadingButton>
            </CardActions>
        </Card>
    );
}