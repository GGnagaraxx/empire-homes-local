import React, { useState } from "react";
import { Card, Modal, Typography } from "@mui/material";
import ReservationForm from "./components/ReservationForm";
import { useDispatch, useSelector } from "react-redux";
import { changeModalState } from "../../../common/redux/slices/modalSlice";

const styles = {
    modal: {
        py: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        p: 3,
        width: '60%',
        minWidth: 400,
        backgroundColor: 'white',
        color: 'black',
        border: '1px solid white',
        overflowY: 'auto'
    },
    cardHeader: {
        mb: 3
    }
}

function ReservationModal() {

    const open = useSelector(state => state.modal.reservationModal);
    const dispatch = useDispatch()

    function handleClose() {
        dispatch(changeModalState('reservationModal'))
    }

    return ( 
        <Modal
            open={open}
            onClose={handleClose}
            sx={styles.modal}
        >
            <Card sx={styles.card}>
                <Typography variant='h4' sx={styles.cardHeader}>
                    Reservation Form
                </Typography>
                <ReservationForm/>
            </Card>
        </Modal>
    );
}

export default ReservationModal;