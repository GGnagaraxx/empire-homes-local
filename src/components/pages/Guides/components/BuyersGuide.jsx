import React from "react";
import { Button, Card, Grid } from "@mui/material";
import SectionHeader from "../../../../common/components/SectionHeader";
import { Link } from "react-router-dom";

const styles = {
    card: {
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

function BuyersGuide() {
    return (
        <Card sx={styles.card}>
            <Grid container sx={styles.main}>
                <Grid item xs={12} sx={styles.items}>
                    <SectionHeader
                        title="Buyers' Guide"
                        subtitle="Read our offers and instructions for those who are interested on buying a property." />
                </Grid>
                <Grid item xs={12} sx={styles.items}>
                    <Link to='/buyer-guide' style={{ textDecoration: 'none' }}>
                        <Button variant="contained" sx={{ color: 'white', fontSize: 'medium' }}>Buyers' Guide</Button>
                    </Link>
                </Grid>
            </Grid>
        </Card>
    );
}

export default BuyersGuide;