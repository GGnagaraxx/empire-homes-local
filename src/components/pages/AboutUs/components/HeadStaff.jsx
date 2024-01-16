import React from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import Bold from "../../../../common/components/Bold";

const styles = {
    section: {
        p: 5
    },
    cardContainer: {
        p: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        p: 3,
        maxWidth: 800,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        boxShadow: '0 0 5px #555555'
    },
    img: {
        width: 150,
        borderRadius: 5,
    },
    infoBox: {
        pl: 2,
        minWidth: '250px',
        maxWidth: 289,
        textAlign: {
            xs: 'center',
            sm: 'left'
        }
    }
}

const staffNames = ['JUAN MIGUEL DELA CRUZ', 'JAMES BOND', 'TOM CRUISE', 'TONY STARK']

function HeadStaff() {
    return (
        <Box className='section' sx={styles.section}>
            <Grid container>
                {
                    staffNames.map((name, index) => {
                        return (
                            <Grid key={name} item xs={12} lg={6} sx={styles.cardContainer}>
                                <Card sx={styles.card}>
                                    <img
                                        src='https://picsum.photos/200'
                                        alt=''
                                        style={styles.img}
                                    />
                                    <Box sx={styles.infoBox}>
                                        <Typography variant='h5'>
                                            <Bold>{name}</Bold>
                                        </Typography>
                                        <Typography gutterBottom variant='body1' sx={{ fontStyle: 'italic' }}>
                                            Sample Position {index}
                                        </Typography>
                                        <Typography variant='body1'>
                                            Ad adipisicing ea cupidatat elit incididunt Lorem id aliqua nostrud. Amet fugiat qui deserunt occaecat cillum ad enim non minim.
                                        </Typography>
                                    </Box>
                                </Card>
                            </Grid>)
                    })
                }
            </Grid>
        </Box>
    );
}

export default HeadStaff;