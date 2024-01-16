import React from "react";
import { Button, Card, Grid } from "@mui/material";
import SectionHeader from "../../../../common/components/SectionHeader";
import { Link } from "react-router-dom";

const styles = {
    card:{
        boxShadow: '0 0 5px grey'
    },
    main: {
        p: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    items: {
        p: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

function SellersGuide() {
    return (
        <Card sx={styles.card}>
            <Grid container sx={styles.main}>
                <Grid item xs={12} sx={styles.items}>
                    <SectionHeader
                        title="Sellers' Guide"
                        subtitle="Read the step by step instruction guide and the benefits of joining our team." />
                </Grid>
                <Grid item xs={12} sx={styles.items}>
                    <Link to='/seller-guide' style={{ textDecoration: 'none' }}>
                        <Button variant="contained" sx={{ color: 'white', fontSize: 'medium' }}>Sellers' Guide</Button>
                    </Link>
                </Grid>
            </Grid>
        </Card>
    );
}

export default SellersGuide;