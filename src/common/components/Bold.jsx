import { Typography } from "@mui/material";
import React from "react";

function Bold(props) {

    const { component, variant, children } = props;

    return ( 
        <Typography
            component={component ? component : 'span'}
            variant={variant ? variant : 'inherit' }
            sx={{ fontWeight: 'bold' }}
        >
            {children}
        </Typography>
    );
}

export default Bold;