import React from 'react';
import PropTypes from 'prop-types';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

export const CardGeneric = ({ titulo, descripcion, removeCard, id }) => {
    return(
        <Card sx={{ minWidth: 140 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    { titulo }
                </Typography>
                <Typography variant="body2">
                    { descripcion }
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={ () => removeCard( id ) }>
                    Quitar <DeleteOutlinedIcon />
                </Button>
            </CardActions>
        </Card>
    );
}

CardGeneric.propTypes = {
    titulo: PropTypes.string,
    descripcion: PropTypes.string,
    removeCard: PropTypes.func,
    id: PropTypes.any,
}