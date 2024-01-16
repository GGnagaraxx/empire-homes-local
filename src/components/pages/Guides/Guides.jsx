import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import PageHeader from "../../../common/components/PageHeader";
import header_image from "../../../utils/images/header_image1.jpg"
import ContactUsSection from "../../../common/components/sections/ContactUsSection";
import BuyersGuide from "./components/BuyersGuide";
import SellersGuide from "./components/SellersGuide";

const styles = {
    header: {
        px: 5,
        pt: 8,
        pb: 2,
        backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.5), rgba(30, 30, 30, 0.5)), url(${header_image})`,
        backgroundSize: '100% auto',
        backgroundPosition: '100% 90%',
    },
    body: {
        backgroundColor: 'white',
    },
    guideSection: {
        width: '100%'
    }, 
    items: {
        p: 5
    }

}

function Guides() {

    return (
        <Box className='page-content'>
            <Box className='page-header' sx={styles.header}>
                <PageHeader
                    title='Guides'
                    subtitle='Here are some instructions for our buyers and sellers.'
                />
            </Box>
            <Stack sx={styles.body}>
                <Grid container>
                    <Grid item xs={12} md={6} sx={styles.items}>
                        <BuyersGuide/>
                    </Grid>
                    <Grid item xs={12} md={6} sx={styles.items}>
                        <SellersGuide/>
                    </Grid>
                </Grid>
                <hr/>
                <Box className='section'>
                    <ContactUsSection />
                </Box>
            </Stack>
        </Box>
    )
}


export default Guides;