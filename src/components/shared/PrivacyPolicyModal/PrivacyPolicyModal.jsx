import React, { useState } from "react";
import { Box, Button, Card, Modal, Typography } from "@mui/material";
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
        width: '70%',
        minWidth: 400,
        backgroundColor: '#333333',
        color: 'white',
        border: '1px solid white',
        overflowY: 'auto'
    },
    cardHeader: {
        mb: 3,
        textAlign: 'center'
    },
    buttonBox: {
        my: 3,
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    }
}

function PrivacyPolicyModal() {

    const open = useSelector((state) => state.modal.privacyModal);
    const dispatch = useDispatch()

    function handleClose() {
        dispatch(changeModalState('privacyModal'));
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            sx={styles.modal}
        >
            <Card sx={styles.card}>
                <Typography variant='h4' sx={styles.cardHeader}>
                    Privacy Policy
                </Typography>
                <Typography gutterBottom variant='body1' sx={{ mb: 2 }}>
                    Mollit ullamco tempor exercitation labore duis aliqua tempor aute. Non irure sint et eiusmod dolore. Aliqua minim ullamco eu ut aliquip do nisi reprehenderit culpa enim cupidatat occaecat sit excepteur. Aliquip voluptate Lorem duis dolor excepteur fugiat nostrud. Duis ut anim anim duis elit laborum occaecat anim irure dolor Lorem eiusmod elit laboris.
                </Typography>
                <Typography gutterBottom variant='body1'>
                    Nulla ea tempor ad duis non nostrud non velit nisi amet ad ipsum in. In consectetur consectetur consequat enim in. Adipisicing ex dolor nisi nulla incididunt incididunt velit. Proident in sit ullamco magna in amet et est sunt eiusmod sit. Ut consectetur reprehenderit dolor consectetur ut dolor esse. Nisi est ex sint ipsum esse consequat. Sit non reprehenderit dolor aute duis officia minim cillum exercitation commodo irure nisi esse occaecat.
                </Typography>
                <Box sx={styles.buttonBox}>
                    <Button 
                        variant='outlined' 
                        size='large'
                        onClick={handleClose}>
                        Close
                    </Button>
                </Box>
            </Card>
        </Modal>
    );
}

export default PrivacyPolicyModal;