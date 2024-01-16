import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import ApartmentIcon from '@mui/icons-material/Apartment';

function Contacts() {

    return (
        <Grid container spacing={5}>
            <Grid
                item
                xs={12}
                sm={6}
                lg={12}
            >
                <Box sx={{ minHeight: 110, mb: 2 }}>
                    <Typography variant="h3">
                        <LocalPhoneIcon fontSize="large" />
                        {' Phone'}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Our phone lines are available on weekdays from 8am to 5pm.
                    </Typography>
                </Box>
                <Typography variant="body2">
                    Buyer Concerns: (+63) 2-xxxx-xxxx <br />
                    Seller Concerns: (+63) 2-xxxx-xxxx <br />
                    Customer Service: (+63) 2-xxxx-xxxx <br />
                    Reservations: (+63) 2-xxxx-xxxx <br />
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
                lg={12}
            >
                <Box sx={{ minHeight: 110, mb: 2 }}>
                    <Typography variant="h3">
                        <EmailIcon fontSize="large" />
                        {' Email'}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Reach us through our official emails.
                    </Typography>
                </Box>
                <Typography variant="body2">
                    Buyer Concerns: sample4buyers@sample.com <br />
                    Seller Concerns: sample4sellers@sample.com <br />
                    Customer Service: sample4customerservice@sample.com <br />
                    Reservations: sample4reservations@sample.com <br />
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: {
                        lg: 'start',
                        sm: 'center',
                        xs: 'start'
                    }
                }}
            >
                <Box sx={{ minHeight: 110, mb: 2 }}>
                    <Typography variant="h3">
                        <ApartmentIcon fontSize="large" />
                        {' Offices'}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Feel free to personally visit our offices.
                    </Typography>
                </Box>
                <Typography variant="body2">
                    123 Here St. Somewhere City, Province A <br />
                    321 There St. Everwhere City, Province B  <br />
                    231 NextTo St. Nowhere City, Province C  <br />
                    312 Behind St. Anywhere City, Province D  <br />
                </Typography>
            </Grid>
        </Grid>
    )
}


export default Contacts;