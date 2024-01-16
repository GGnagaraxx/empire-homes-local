import { Box, Grid } from "@mui/material";
import React from "react";
import Contacts from "../Contacts";
import ContactUsForm from "../forms/ContactUsForm"
import SectionHeader from "../SectionHeader";

function ContactUsSection(props) {

    const { removeHeader, sx } = props;

    return (
        <Box className="section" sx={sx ? sx : { p: 5 }}>
            {!removeHeader ?
                <SectionHeader
                    title='Contact Us'
                    subtitle='Got questions or concerns? Feel free to contact us!'
                /> : null
            }
            <Grid container>
                <Grid item lg={7} sx={{ px: 2, py: 5 }}>
                    <ContactUsForm />
                </Grid>
                <Grid
                    item
                    lg={5}
                    sx={{
                        px: 2,
                        py: 5,
                        borderLeft: {
                            lg: '1px solid grey'
                        },
                        borderTop: {
                            xs: '1px solid grey',
                            lg: 'none'
                        }
                    }}
                >
                    <Contacts />
                </Grid>
            </Grid>
        </Box>
    )
}


export default ContactUsSection;