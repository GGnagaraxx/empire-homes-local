import React from "react";
import { Box, Grid } from "@mui/material";
import SectionHeader from "../../../../common/components/SectionHeader";
import TrainingSection from "./TrainingSection";
import GainSection from "./GainSection";


const styles = {
    section: {
        p: 5,
        borderTop: '1px solid'
    },
    body: {
        p: 5,
        borderTop: '1px solid'
    },
    gridItem: {
        p: 5,
    }, 
    gainSection: {
        borderLeft: {
            xs: 'none',
            md: '1px solid'
        },
        borderTop: {
            xs: '1px solid',
            md: 'none'
        }
    }
}

function AccreditationSection() {
    return (
        <Box className="section" sx={styles.section}>
            <SectionHeader
                center
                title="Accreditation"
                subtitle="Here are the information on how to join the team and what you will gain!"
            />
            <Grid container sx={styles.body}>
                <Grid item xs={12} md={6} sx={styles.gridItem}>
                    <TrainingSection/>
                </Grid>
                <Grid item xs={12} md={6} sx={{...styles.gridItem, ...styles.gainSection}}>
                    <GainSection/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default AccreditationSection;