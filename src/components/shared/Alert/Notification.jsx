import React from "react";
import { Alert, AlertTitle, Box, Modal, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const styles = {
    modal: {
        pointerEvents: 'none',
    },
    alertBox: {
        outline: 'none',
        p: 2,
        width: '60%',
        maxHeight: 600,
        maxWidth: 500,
        position: 'absolute',
        top: 0,
        right: 0,
    },
    notif: {
        backgroundColor: '#000000c5',
        color: '#cccccc'
    }
}

function Notification() {

    const notifs = useSelector(state => state.notif);

    function capFirstLetter(s){
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    return (
        <>
            <Modal open={true} hideBackdrop disableScrollLock disableAutoFocus
            slotProps={{
                root: {
                    sx: styles.modal,
                }
            }}>
                <Box sx={styles.alertBox}>
                    <Stack>
                        {
                            notifs.map((notif) => {
                                return (
                                    <Alert
                                        key={notif.message}
                                        severity={notif.type} variant="outlined"
                                        sx={styles.notif}>
                                        <AlertTitle>{capFirstLetter(notif.type)}</AlertTitle>
                                        {notif.message}
                                    </Alert>
                                )
                            })
                        }
                    </Stack>
                </Box>
            </Modal>
        </>
    )
}

export default Notification;