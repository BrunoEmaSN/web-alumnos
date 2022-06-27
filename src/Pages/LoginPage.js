import React, { useContext, useState } from 'react';
import { trackPromise } from "react-promise-tracker";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';

import { AccountCircle, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { AppContext } from '../Context/BuildContext';
import { styles } from '../Components/GlobalStylesComponents/styles';
import { TypographyH4 } from '../Components/GlobalStylesComponents/stylesComponents';

let initialStateErrors = {
    username: '',
    password: ''
}

export const LoginPage = () => {
    const { handleToken, login } = useContext(AppContext);

    const classes = styles();

    const [ showPassword, setshowPassword ] = useState( false );

    const [ errors, setErrors ] = useState(initialStateErrors);

    const [ formValues, setFormValues] = useState(initialStateErrors);

    const { username, password } = formValues;

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [ target.name ]: target.value
        });
    }

    const handleClickShowPassword = () => {
        setshowPassword( !showPassword );
    };

    const handleLogin = async () => {
        if( isFormValid() ){
            const data = await trackPromise(login({ ...formValues }));
            if(data){
                const { token } = data;
                handleToken( token );
            }
        }
    }

    const isFormValid = () => {
        setErrors(initialStateErrors);
        let isValid = true;
        let newState = initialStateErrors;

        if( !username.length ){
            isValid = false;
            newState = {
                ...newState,
                username: 'no ingreso su usuario'
            }
        }

        if( !password.length ){
            isValid = false;
            newState = {
                ...newState,
                password: 'no ingreso su contraseña'
            }
        }

        setErrors(newState);
        return isValid;
    }

    return (
        <Box>
            <Box className={ classes.loginBackground }>
                <Box
                    className={ classes.radialGradientBackground }
                />
            </Box>
            <Card className={ classes.loginCard }>
                <CardContent>
                    <TypographyH4 label="Iniciar Sesion"/>
                    <FormControl sx={{ my: 1, width: '24ch' }} variant="standard">
                        <Box className={ classes.loginBox }>
                            <TextField
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    )
                                }}
                                fullWidth
                                autoComplete="off"
                                id="username"
                                name="username"
                                label="Usuario"
                                variant="standard"
                                onChange={ handleInputChange }
                                error={Boolean(errors?.username)}
                                helperText={errors?.username}
                            />
                        </Box>
                    </FormControl>
                    <FormControl sx={{ my: 1, width: '24ch' }} variant="standard">
                        <Box className={ classes.loginBox }>
                            <TextField
                                fullWidth
                                type={ showPassword ? 'text' : 'password' }
                                autoComplete="off"
                                id="password"
                                name="password"
                                label="Contraseña"
                                variant="standard"
                                onChange={ handleInputChange }
                                error={Boolean(errors?.password)}
                                helperText={errors?.password}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Lock />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={ handleClickShowPassword }
                                                edge="end"
                                            >
                                                { showPassword ? <VisibilityOff /> : <Visibility /> }
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Box>
                    </FormControl>
                </CardContent>
                <CardActions>
                    <LoadingButton
                        onClick={ handleLogin }
                        className={ classes.loginButton }
                        variant="contained"
                    >
                        Ingresar
                    </LoadingButton>
                </CardActions>
            </Card>
        </Box>
    );
}