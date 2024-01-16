import React from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function CustListButton(props) {

    const { name, Icon, text, hasDropDown, open, primaryTypographyProps, ...rest } = props

    return (
        <ListItemButton name={name} {...rest} sx={{ pl: 4 }}>
            {Icon ?
                <ListItemIcon>
                    <Icon />
                </ListItemIcon> : null
            }
            <ListItemText primaryTypographyProps={primaryTypographyProps} primary={text} />
            {hasDropDown && open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>
    );
}

export default CustListButton;