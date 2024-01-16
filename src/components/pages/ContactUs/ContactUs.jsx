import React from "react";
import { Box } from "@mui/material";
import ContactUsSection from "../../../common/components/sections/ContactUsSection";
import PageHeader from "../../../common/components/PageHeader";
import header_image from '../../../utils/images/header_image.jpg'
import FaqsSection from "../../../common/components/sections/FaqsSection";

const styles = { 
    header: {
        p: 5, 
        backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.5), rgba(30, 30, 30, 0.5)), url(${header_image})`,
        backgroundSize: '100% auto',
        backgroundPosition: '100% 90%',
    },
}

function ContactUs(){

    return(
        <Box className='page-content'>
            <Box className='page-header' sx={styles.header}>
                <PageHeader 
                    title='Contact Us'
                    subtitle='Feel free to contact us for any inquiries or questions you may have regarding our service.'
                />
            </Box>
            <FaqsSection/>
            <ContactUsSection removeHeader sx={{ p: 5, pt: 0 }}/>
        </Box>
    )
}


export default ContactUs;