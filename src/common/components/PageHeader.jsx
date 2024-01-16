import React from "react";
import { Box, Typography } from "@mui/material";


function PageHeader(props) {
    
    const { title, subtitle, color, center } = props;

    return ( 
        <Box sx={{ mb: 5 }}>
            <Typography variant='h3' color={color ? color : 'white'} sx={{ textAlign: center ? 'center' : 'left' }}>
                {title}
            </Typography>
            <Typography gutterBottom variant='h6' color={color ? color : 'white'} sx={{ textAlign: center ? 'center' : 'left' }}>
                {subtitle}
            </Typography>
        </Box>
    );
}

export default PageHeader;