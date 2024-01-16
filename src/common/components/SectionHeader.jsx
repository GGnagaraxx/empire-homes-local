import React from "react";
import { Box, Button, Typography } from "@mui/material";


function SectionHeader(props) {

    const { title, subtitle, textColor, titleVariant, subVariant, center, buttonProps } = props;

    return (
        <Box sx={{mb: 5, textAlign: center ? 'center' : 'left' }}>
            <Typography variant={titleVariant ? titleVariant : 'h3'} color={textColor ? textColor :'text.primary'}>
                {title}
            </Typography>
            <Typography gutterBottom variant={ subVariant ? subVariant : 'body2'} color={textColor ? textColor :'text.primary'}>
                {subtitle}
            </Typography>
            {buttonProps ?
                <Button
                    {...buttonProps}
                    variant={buttonProps.variant ? buttonProps.variant : 'outlined'}
                    color={buttonProps.color ? buttonProps.color : 'primary'}
                >
                    {buttonProps.label}
                </Button> : null
            }
        </Box>
    )
}


export default SectionHeader;