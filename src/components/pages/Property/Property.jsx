import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Card, CircularProgress, getListItemSecondaryActionClassesUtilityClass, Grid, Stack, Typography } from "@mui/material";
import LikeIcon from '@mui/icons-material/FavoriteBorder';
import ProgressIcon from '@mui/icons-material/HourglassTop';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SellIcon from '@mui/icons-material/Sell';
import PageHeader from "../../../common/components/PageHeader";
import Bold from "../../../common/components/Bold";
import { useDispatch } from "react-redux";
import { changeModalState } from "../../../common/redux/slices/modalSlice";
import { useGetPropertyQuery } from "../../../common/redux/apiSlices/propertyApiSlice";
import { changeGlobalFields } from "../../../common/redux/slices/globalSearchSlice";
import { filterList } from "../../../common/functions/listFunctions";
import { propertyData } from "../../../utils/sampleData";

const styles = {
    pageContent: {
        pt: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: '100% 100%',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'right bottom',
        backgroundRepeat: 'no-repeat',
    },
    stack: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headCard: {
        px: '5%',
        pb: 2,
        pt: 5,
        mb: 5,
        width: '80%',
        maxWidth: 800,
        borderRadius: '15px',
        boxShadow: '0px 0px 10px orange',
        backgroundColor: '#000000bb',
        color: 'white'
    },
    bodyCard: {
        px: '5%',
        py: 2,
        mb: 5,
        width: '80%',
        borderRadius: '15px',
        boxShadow: '0px 0px 10px orange',
        backgroundColor: '#000000bb',
        color: 'white'
    },
    gridItem: {
        p: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    statsBox: {
        display: 'flex',
        justifyContent: 'space-evenly',
        mb: 3,
    },
    descBox: {
        my: 2,
        p: 3,
        border: '1px solid orange'
    },
    icons: {
        fontSize: 'large'
    },
    img: {
        maxWidth: '100%',
        maxHeight: '250px',
        marginHeight: '2px',
    },
    button: {
        color: 'white',
        fontWeight: 'bold'
    },
    mapBox: {
        my: 5,
    },
    mapOuter: {
        width: '100%',
        borderRadius: 5,
        overflow: 'hidden'
    },
    mapCanvas: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    }
}

function Property() {


    const dispatch = useDispatch();
    const params = useParams();
    // const { status, data } = useGetPropertyQuery(params.id);
    console.log(propertyData, params.id)
    const data = propertyData.find(property => property.id == params.id);
    console.log(data)
    const status = "fulfilled";
    const [propData, setPropData] = useState();
    const [mapLocation, setMapLocation] = useState("");

    useEffect(() => {
        if (status == "fulfilled") {
            setPropData(data);
            console.log("DataLocation:" + data.location)
            setMapLocation(
                data.location.replace(/" "/g, '%20')
            );
        }
    }, [status])

    function handleOpenModal() {
        dispatch(changeGlobalFields({ modalProperty: propData.name }));
        dispatch(changeModalState('reservationModal'));
    }

    return (
        <Box
            className='page-content'
            sx={{
                ...styles.pageContent,
                backgroundImage: propData ? `radial-gradient(rgba(0, 0, 0, 0.5), rgba(30, 30, 30, 0.5)), url(${propData.imgUrl})`
                : 'radial-gradient(rgba(0, 0, 0, 0.5), rgba(30, 30, 30, 0.5))'
            }}>
            {
                propData ? 
                <Stack sx={styles.stack}>
                    <Card sx={styles.headCard}>
                        <PageHeader
                            title={propData.name}
                            subtitle={propData.location}
                            color='orange'
                            center
                        />
                        <Box sx={styles.statsBox}>
                            <Typography variant='body1' color='inherit' sx={styles.icons}>
                                <Bold>{"Demands "}<LikeIcon /></Bold> {propData.demand}
                            </Typography>
                            |
                            <Typography variant='body1' color='inherit' sx={styles.icons}>
                                <Bold>{"Progress "}<ProgressIcon /></Bold> {propData.progress + '%'}
                            </Typography>
                            |
                            <Typography variant='body1' color='inherit' sx={styles.icons}>
                                <Bold>{"Category "}<ApartmentIcon /></Bold> {propData.type}
                            </Typography>
                        </Box>
                        <Box sx={styles.statsBox}>
                            <Typography variant='body1' color='inherit' sx={styles.icons}>
                                <SellIcon /> &#8369;{propData.minPrice + ' - '} &#8369;{propData.maxPrice}
                            </Typography>
                        </Box>
                        <Box sx={styles.statsBox}>
                            <Button
                                variant='contained' color='primary'
                                size='large' onClick={handleOpenModal}
                                sx={styles.button}>
                                RESERVE NOW
                            </Button>
                        </Box>
                    </Card>
                    <Card sx={styles.bodyCard}>
                        <Stack>
                            <Box sx={styles.descBox}>
                                <Grid container>
                                    <Grid item xs={12} lg={6} sx={styles.gridItem}>
                                        <Typography variant='h6' color='inherit'>
                                            {propData.desc.slice(0, 300)}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} lg={6} sx={styles.gridItem}>
                                        <img
                                            src={propData.imgUrl}
                                            alt={propData.name}
                                            style={styles.img}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sx={styles.gridItem}>
                                        <Typography variant='h6' color='inherit'>
                                            {propData.desc.slice(300)}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={styles.mapBox}>
                                <Typography gutterBottom variant='h6' color='inherit' sx={styles.icons}>
                                    <Bold>{"Property Location: " + propData.location}</Bold>
                                </Typography>
                                <div className="mapouter" style={styles.mapOuter}>
                                    <div className="gmap_canvas" style={styles.mapCanvas}>
                                        <iframe
                                            width="100%" height="100%"
                                            id="gmap_canvas"
                                            src={`https://maps.google.com/maps?q=${mapLocation}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                            frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" />
                                    </div>
                                </div>
                            </Box>

                        </Stack>
                    </Card>
                </Stack>
                : 
                <CircularProgress color="primary" />
            }
        </Box>
    )
}


export default Property;