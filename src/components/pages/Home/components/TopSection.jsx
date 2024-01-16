import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Bold from "../../../../common/components/Bold";
import HomeSearch from "./HomeSearch";

function TopSection() {
    return (
        <Stack
            className="top-section"
            spacing={5}
            sx={{
                alignItems: 'center'
            }}
        >
            <Grid 
                container sx={{
                    height:'500px',
                    mb: 2
                }}
            >
                <Grid
                    item
                    xs={12} md={8} lg={6}
                    sx={{
                        p: 4,
                        pt: 20,
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <Typography gutterBottom variant='h2' sx={{ color: 'white' }}>
                        Welcome to <br/><Bold> Empire Homes</Bold>
                    </Typography>
                    <Typography variant='h4' sx={{ color: 'white' }}>
                        
                    The most awaited Real Estate Project of the Philippine government
                    </Typography>
                </Grid>
            </Grid>
            <HomeSearch/>
        </Stack>
    )
}

export default TopSection;