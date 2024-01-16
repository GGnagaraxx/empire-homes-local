import { Box } from "@mui/material";
import React from "react";


function CustomLine(props){


    return(
        <Box 
            sx={{
                height: props.type == 'vertical' ? props.length : 1,
                width: props.type == 'horizontal' ? props.length : 1,
            }}
        />
    )
}


export default CustomLine;