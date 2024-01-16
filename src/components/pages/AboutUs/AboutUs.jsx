import React from "react";
import { Box } from "@mui/material";
import PageHeader from "../../../common/components/PageHeader";
import header_image from "../../../utils/images/header_image1.jpg"
import HeadStaff from "./components/HeadStaff";
import ProjectDetail from "./components/ProjectDetail";

const styles = { 
    header: {
        px: 5,
        pt: 8,
        pb: 2, 
        backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.5), rgba(30, 30, 30, 0.5)), url(${header_image})`,
        backgroundSize: '100% auto',
        backgroundPosition: '100% 90%',
    },
}

function AboutUs(){

    return(
        <Box className='page-content'>
            <Box className='page-header' sx={styles.header}>
                <PageHeader 
                    title='About Us'
                    subtitle='Read more about the Empire Homes Project, the government and the people behind it.'
                />
            </Box>
            <HeadStaff/>
            <ProjectDetail/>
        </Box>
    )
}


export default AboutUs;