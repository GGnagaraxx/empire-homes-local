import { Box, Card } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import Bold from "../../../../common/components/Bold";
import SectionHeader from "../../../../common/components/SectionHeader";
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

function JoinUsSection() {

    const dispatch = useDispatch();
    
    function handleJoinClick(){
        dispatch(changeModalState('joinUsModal'));
    }

    return (
        <Box sx={styles.headerBox}>
            <Card sx={styles.card}>
                <SectionHeader
                    title="Be a Part of the Team!"
                    subtitle={
                     <span>
                        <Bold>200+ volunteers </Bold> 
                        have joined and <Bold>&#8369;1 Million </Bold> 
                        worth of incentives has been released! 
                        Join now to be a part of the team!</span>
                    }
                    center
                    subVariant='h6'
                    textColor= 'white'
                    buttonProps={{
                        label: 'JOIN US',
                        variant: 'contained',
                        onClick: handleJoinClick,
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

export default JoinUsSection;