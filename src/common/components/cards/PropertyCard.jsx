import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { moneyFormat } from "../../functions/formatter";

const styles = {
    card: {
        maxWidth: 300,
        height: 420,
        position: 'relative',
        boxShadow: '0px 0px 3px grey',
        cursor: 'pointer',
        overflow: 'hidden',
        textAlign: 'center',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0px 0px 8px orange',
        }
    },
    mediaBox: {
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    progressTxt: {
        position: 'absolute',
        textAlign: 'center',
        color: 'white'
    },
    progressBar: {
        position: 'absolute',
        backgroundColor: 'rgba(255, 149, 0, 0.49)',
        width: '100%',
        bottom: 0
    },
    overflowHider: {
        alignSelf: 'center',
        width: '100%',
        height: '20px',
        position: 'absolute',
        top: '100%',
        backgroundColor: 'white',
        boxShadow: '0px -5px 20px #cccccc'

    }
}


function PropertyCard(props) {

    const { propData, showProgress, withDesc } = props;

    return (
        <Link to={'/properties/' + propData.id} style={{ textDecoration: 'none' }}>
            <Card sx={styles.card}>
                <Box
                    className='prop-card-media'
                    sx={styles.mediaBox}
                >
                    <CardMedia
                        component="img"
                        height="300"
                        image={propData.imgUrl}
                        alt={propData.name + ' image'}
                    />
                    {
                        showProgress ?
                            <>
                                <Box
                                    className="progress-highlight"
                                    sx={{ ...styles.progressBar, height: propData.progress.toString() + '%' }}
                                />
                                <Typography
                                    className="progress-percent"
                                    variant='h4'
                                    sx={styles.progressTxt}
                                >
                                    {propData.progress.toString() + '%'}
                                </Typography>
                            </> : null
                    }
                </Box>
                <CardContent>
                    <Typography variant='h6'>
                        {propData.name}
                    </Typography>
                    <Typography gutterBottom variant='body2' color='text.secondary'>
                        {propData.location}
                    </Typography>
                    <Typography gutterBottom variant='body2' color='text.primary'>
                        {moneyFormat(propData.minPrice, 'Php') + ' - ' + moneyFormat(propData.maxPrice, 'Php')}
                    </Typography>
                    {withDesc ?
                        <Typography variant='body1' color='text.primary'>
                            {propData && propData.desc ? propData.desc.substr(0, 150) : 'Sample Desc'}
                        </Typography> : null
                    }
                </CardContent>
                <Box sx={styles.overflowHider} />
            </Card>
        </Link>
    )
}

export default PropertyCard;