import React from "react";
import { Box, Stack } from "@mui/material";
import PageHeader from "../../../common/components/PageHeader";
import header_image from "../../../utils/images/header_image1.jpg"
import JoinUsSection from "./components/JoinUsSection";
import AccreditationSection from "./components/AccreditationSection";

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

function SellerGuide() {

    return (
        <Box className='page-content'>
            <Box className='page-header' sx={styles.header}>
                <PageHeader
                    title="Sellers' Guide"
                    subtitle='Here are some instructions for sellers/consultants who wants to join us.'
                />
                <JoinUsSection/>
            </Box>
            <Box>
                <AccreditationSection/>
            </Box>
        </Box>
    )
}


export default SellerGuide;