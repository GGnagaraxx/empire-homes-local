import React from "react";
import { Box, Grid } from "@mui/material";
import FooterHeader from "./components/FooterHeader";
import FooterBody from "./components/FooterBody";

function Footer() {

    return (
        <Box className="footer">
            <Grid container sx={{ p: 3, width: '95%', color: 'white' }}>
                <Grid
                    item
                    xs={12} lg={4}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        p: 3
                    }}
                >
                    <FooterHeader/>
                </Grid>
                <Grid
                    item
                    xs={12} lg={8}
                    sx={{
                        borderTop: {
                            xs: '1px solid white',
                            lg: 'none'
                        },
                        borderLeft: {
                            xs: 'none',
                            lg: '1px solid white'
                        },
                        p: 3
                    }}
                >
                    <FooterBody/>
                </Grid>
            </Grid>
        </Box>
    )
}


export default Footer;