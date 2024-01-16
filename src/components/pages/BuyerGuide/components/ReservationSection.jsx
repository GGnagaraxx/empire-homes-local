import React from "react";
import { Box, Button, Card, Stack } from "@mui/material";
import SectionHeader from "../../../../common/components/SectionHeader";
import PropTypeSection from "../../../../common/components/sections/PropTypeSection/PropTypeSection";
import { useDispatch } from "react-redux";
import { changeModalState } from "../../../../common/redux/slices/modalSlice";

const styles = {
    headerBox: {
        px: 5,
        pt: 3,
        mb: 5,
        display: 'flex',
        justifyContent: 'center',
    },
    card: {
        py: 2,
        px: 5,
        maxWidth: 750,
        boxShadow: '0 0 10px orange',
        backgroundColor: '#00000077',
        color: 'white'
    }
}

function ReservationSection() {

    const dispatch = useDispatch();

    function handleReservationClick(e) {
        dispatch(changeModalState('reservationModal'));
    }

    return (
        
        <Box sx={styles.headerBox}>
            <Card sx={styles.card}>
                <SectionHeader
                    title="Apply for a Reservation!"
                    subtitle={
                     <span>
                        Planning on renting or leasing a unit in the future?
                        Looking to buy a property? Apply for a reservation!</span>
                    }
                    center
                    subVariant='h6'
                    textColor= 'white'
                    buttonProps={{
                        label: 'APPLY FOR RESERVATION',
                        variant: 'contained',
                        onClick: handleReservationClick,
                        sx: {
                            mt: 2,
                            minWidth: 250,
                            minHeight: 50,
                            fontSize: 'large',
                            color: 'white'
                        }
                    }} />
            </Card>
        </Box>
    );
}

export default ReservationSection;