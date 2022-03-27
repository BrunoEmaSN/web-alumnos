import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

export const HomeImg = ({ title, description, link, linkText, image, imageText }) => {

    return (
        <Paper
            sx={{
                display: 'flex', 
                alignItems: 'center',
                backgroundColor: 'grey.800',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${image})`,
                borderRadius: 0,
                color: '#fff',
                height: '100vh',
                justifyContent: 'space-between',
                mb: 4,
                position: 'relative',
            }}
        >
            {<img style={{ display: 'none' }} src={image} alt={imageText} />}
            <Box
                sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backgroundImage: 'linear-gradient(rgba(34, 47, 62, 0.2), #222F3E)',
                }}
            />
            <Grid container>
                <Grid item md={6}>
                    <Box
                        sx={{
                        position: 'relative',
                        p: { xs: 3, md: 6 },
                        pr: { md: 0 },
                        }}
                    >
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            {title}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            {description}
                        </Typography>
                        <Link variant="subtitle1" href={link}>
                            {linkText}
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}

HomeImg.propTypes = {
    description: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired,
    imageText: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};