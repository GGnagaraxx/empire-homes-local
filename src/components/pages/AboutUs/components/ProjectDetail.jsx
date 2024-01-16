import React from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import Bold from "../../../../common/components/Bold";
import SectionHeader from "../../../../common/components/SectionHeader";

const styles = {
    section: {
        p: 5,
        px: '10%'
    },
    gridItems: {
        p: 2
    },
    imgGrid: {
        p: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: '90%',
        boxShadow: '0 0 5px #777777',
        borderRadius: '5px'
    }
}

function ProjectDetail() {
    return (
        <Box className='section' sx={styles.section}>
            <SectionHeader
                title='The Empire Homes Project'
                subtitle='November 2020'
            />
            <Grid container>
                <Grid item xs={12} lg={6} sx={styles.gridItems}>
                    <Typography gutterBottom variant='h6'>
                        <Bold component='p'>How it started.</Bold>
                        Minim aliquip ipsum proident qui. Reprehenderit officia culpa reprehenderit ad voluptate voluptate. Nulla excepteur velit ad consectetur eiusmod dolore officia. Pariatur Lorem quis culpa dolore pariatur nisi ea consectetur.
                        Duis nostrud do non laboris reprehenderit adipisicing ex anim tempor ea. Nisi anim ad cupidatat laboris incididunt. Eiusmod esse id ullamco exercitation elit in cupidatat adipisicing consectetur. Amet ipsum amet commodo occaecat laboris eu esse eiusmod aliquip exercitation. Occaecat ea enim est adipisicing commodo aliqua consectetur quis irure laborum. Consectetur elit consequat voluptate ad do sit amet. Sunt occaecat pariatur dolor est minim.
                    </Typography>
                    <Typography variant='h6'>
                        <Bold component='p'>Why we started it.</Bold>
                        Duis nostrud do non laboris reprehenderit ad. rcitation elit in cupidatat adipisicing consectetur. Amet ipsum amet commodo occaecat laboris eu esse eiusmod aliquip exercitation. Occaecat ea enim est adipisicing commodo aliqua consectetur quis irure laborum. Consectetur elit consequat voluptate ad do sit amet. Sunt occaecat pariatur dolor est minim.
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={6} sx={styles.imgGrid}>
                    <img
                        src='https://picsum.photos/720/480'
                        alt=''
                        style={styles.img}
                    />
                </Grid>
                <Grid item xs={12} sx={styles.gridItems}>
                    <Typography variant='h6'>
                        <Bold component='p'>How long it will last.</Bold>
                        Minim aliquip ipsum proident qui. Reprehenderit officia culpa reprehenderit ad voluptate voluptate. Nulla excepteur velit ad consectetur eiusmod dolore officia. Pariatur Lorem quis culpa dolore pariatur nisi ea consectetur.
                        In ullamco irure nisi enim laboris est nisi reprehenderit in cupidatat aute. Sunt quis aliqua aliquip officia irure Lorem elit cupidatat tempor aliquip aliquip ea aliquip laborum. Dolore nulla amet in enim amet pariatur eiusmod. Pariatur consequat quis labore ullamco consectetur. Minim consectetur et id est do ut aute aute irure est aliqua esse. Sunt ea pariatur duis esse mollit aliqua.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ProjectDetail;