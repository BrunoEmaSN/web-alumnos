import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            { onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
  };
  
BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export const ViewMesaExamen = ({ data, isOpen, handleClose }) => {

    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={isOpen}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Vista de datos
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    {
                        data.map(([, d]) => (
                            
                            Object.entries(d).map(([k, v]) => (
                                <Typography key={v} gutterBottom>
                                    {`${k}:${v}`}
                                </Typography>
                            ))
                        ))
                    }
                </DialogContent>
            </BootstrapDialog>
        </div>
    );
}

ViewMesaExamen.propTypes = {
    data: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
}