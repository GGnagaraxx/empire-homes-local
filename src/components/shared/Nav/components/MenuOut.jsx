import React, { useState } from "react";
import { Box, Button, ClickAwayListener, Popper } from "@mui/material";
import { Link } from "react-router-dom";
import { Stack } from "@mui/system";
import { Links, SubLinks } from '../../../../common/data/links';
import _ from "lodash";


function MenuOut(props) {
    
    const [anchorElNavItems, setAnchorElNavItems] = useState();
    const [subLinkOptions, setSubLinkOptions] = useState();

    const handleOptionsOpen = (e) => {
        const name = e.target.name;
        const parent = e.target
        if (!_.find(SubLinks, { 'parentName': name })) {
            handleOptionsClose();
            return;
        };

        const options = _.groupBy(SubLinks, 'parentName')

        setSubLinkOptions(options[name]);
        setAnchorElNavItems(parent);
    }

    const handleOptionsClose = () => {
        setSubLinkOptions([]);
        setAnchorElNavItems(null);
    }

    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {Links.map((link, i) => {
                return (
                    <Link
                        key={link.name}
                        to={link.path}
                        style={{ textDecoration: 'none' }}
                    >
                        <Button
                            id={link.name}
                            name={link.name}
                            onMouseEnter={handleOptionsOpen}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {link.name}
                        </Button>
                    </Link>
                )
            })}
            <ClickAwayListener onClickAway={handleOptionsClose}>
                <Popper
                    anchorEl={anchorElNavItems}
                    open={Boolean(anchorElNavItems)}
                    placement='bottom-start'
                    onMouseLeave={handleOptionsClose}
                    sx={{
                        backgroundColor: '#333333',
                        p: 1,
                        borderRadius: '5px',
                    }}
                >
                    <Stack>
                        {subLinkOptions ?
                            subLinkOptions.map((option) => {
                                return (
                                    <Link key={option.name} to={option.path}
                                        style={{
                                            textDecoration: 'none',
                                        }}>
                                        <Button sx={{
                                            color: 'white',
                                            '&:hover': {
                                                color: '#ffcc80'
                                            }
                                        }}>
                                            {option.name}
                                        </Button>
                                    </Link>
                                )
                            }) : null
                        }
                    </Stack>
                </Popper>
            </ClickAwayListener>
        </Box>
    )
}

export default MenuOut;