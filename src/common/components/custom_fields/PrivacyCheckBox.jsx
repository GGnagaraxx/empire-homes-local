import React from "react";
import { Checkbox, FormGroup, FormLabel, Typography } from "@mui/material";


function PrivacyCheckBox(props) {

    return (
        <FormGroup>
            <FormLabel component='span' sx={{ color: 'black' }}>
                <Checkbox name='privacyPolicy' onChange={props.onChange} />
                <Typography
                    variant='body2'
                    component='span'
                    sx={{ fontStyle: 'italic' }}>
                    {'I have read and agreed to the Empire Homes '}
                </Typography>
                <Typography
                    variant='body2'
                    component='span'
                    color='secondary'
                    onClick={props.onPrivacyOpen}
                    sx={{
                        fontStyle: 'italic',
                        cursor: 'pointer'
                    }}>
                    Privacy Policy.
                </Typography>
                { props.helperText ? 
                    <Typography
                        variant='body2'
                        color='red'
                    >
                        Privacy Policy agreement is required.
                    </Typography> : null
                }
            </FormLabel>
        </FormGroup>
    )
}

export default PrivacyCheckBox;