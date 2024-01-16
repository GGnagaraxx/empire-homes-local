import React from "react";
import { Typography } from "@mui/material";
import CastleIcon from '@mui/icons-material/Castle';

function FooterHeader(){

    return(
        <>
            <Typography className='logo-text' variant="h5" sx={{ textAlign: 'center' }}>
                <CastleIcon/> Empire Homes
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', maxWidth: 300, borderTop: '1px solid white' }}>
                With passion, expertise and dedication, we aim to provide the perfect home that you've been looking for.
            </Typography>
        </>
    )
}


export default FooterHeader;