import React, { useState } from "react";
import { Box, Collapse, Divider, List, ListItem, Typography } from "@mui/material";
import SectionHeader from "../SectionHeader";
import { faqs } from "../../../utils/sampleData";
import CustListButton from "../CustListButton";

const styles = {
    section:{ 
        px: '10%', 
        pt: 5,
        mb: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerBox: {
        width: '80%',
        minWidth: 375,
        maxWidth: 750 
    }
}


function FaqsSection() {

    const [faqsOpen, setFaqsOpen] = useState('');

    function handleClick(e) {
        const id = e.currentTarget.id;
        if (faqsOpen == id) {
            setFaqsOpen('')
        }
        else {
            setFaqsOpen(id);
        }

    }

    return (
        <Box className='section' sx={styles.section}>
            <Box sx={styles.innerBox}>
                <SectionHeader
                    title='FAQS'
                    subtitle='Before sending an inquiry, check out the Frequently Asked Questions of our visitors.'
                />
                <List
                    sx={{
                        backgroundColor: '#f9a825',
                        borderRadius: '5px',
                        boxShadow: '0px 0px 5px grey'
                    }}>
                    {
                        faqs.map((faq) => {
                            return (
                                <React.Fragment key={faq.id}>
                                    <ListItem sx={{ backgroundColor: '#f9a825', color: 'white' }}>
                                        <CustListButton
                                            id={'question' + faq.id}
                                            text={faq.question}
                                            hasDropDown
                                            open={faqsOpen == ('question' + faq.id)}
                                            primaryTypographyProps={{
                                                variant: 'h6'
                                            }}
                                            onClick={handleClick}
                                        />
                                    </ListItem>
                                    <Collapse in={faqsOpen == ('question' + faq.id)} timeout="auto" unmountOnExit>
                                        <ListItem sx={{ px: '10%', backgroundColor: '#ffcc80' }}>
                                            <Typography variant='body1'>
                                                {faq.answer}
                                            </Typography>
                                        </ListItem>
                                    </Collapse>
                                </React.Fragment>
                            )
                        })
                    }
                </List>
            </Box>
        </Box>
    );
}

export default FaqsSection;