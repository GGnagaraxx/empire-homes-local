import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import _ from "lodash";
import { Link } from "react-router-dom";
import { sortList } from "../../../../common/functions/listFunctions";
import { Links, SubLinks, SocialMediaLinks } from '../../../../common/data/links';

function FooterBody(){

    const linkList = sortList(_.concat(Links, SubLinks), {name: 'asc'})
    const linkMap = linkList.map((link) => {
                        return (
                            <React.Fragment key={link.name}>
                                <Link to={link.path} style={{ textDecoration: 'none', color: 'white' }}>
                                    <Typography variant="body2">
                                        {link.name}
                                    </Typography>
                                </Link>
                            </React.Fragment>
                        )
                    })

    return(
        <Grid container spacing={5}>
            <Grid item xs={12} md={6}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 3
                }}>
                <Typography gutterBottom variant='h6'>
                    Main Office
                </Typography>
                <Typography gutterBottom variant='body2'>
                    <LocationOnIcon size='medium' />
                    123 Here St. Somewhere City, Province A
                </Typography>
                <Typography variant="body2">
                    Buyer Concerns: (+63) 2-xxxx-xxxx <br />
                    Seller Concerns: (+63) 2-xxxx-xxxx <br />
                    Customer Service: (+63) 2-xxxx-xxxx <br />
                    Reservations: (+63) 2-xxxx-xxxx <br />
                </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
                <Typography gutterBottom variant='h6'>
                    Quick Links
                </Typography>
                <Stack sx={{ columnCount: 2, columnGap: 10 }}>
                    {linkMap}
                </Stack>
            </Grid>
            <Grid item xs={6} md={3}>
                <Typography gutterBottom variant='h6'>
                    Social Media
                </Typography>
                <Stack sx={{ columnCount: 2, columnGap: 10 }}>
                    {
                        SocialMediaLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <a key={link.name}
                                    href={link.url} target="_blank" rel="noreferrer"
                                    style={{ textDecoration: 'none', color: 'white' }}
                                >
                                    <Typography variant="body2">
                                        <Icon />
                                        {' ' + link.name}
                                    </Typography>
                                </a>
                            )
                        })
                    }
                </Stack>
            </Grid>
        </Grid>
    )
}


export default FooterBody;