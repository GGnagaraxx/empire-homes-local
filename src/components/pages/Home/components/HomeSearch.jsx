import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import CategoryField from "../../../../common/components/custom_fields/CategoryField";
import LocationField from "../../../../common/components/custom_fields/LocationField";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeGlobalFields } from "../../../../common/redux/slices/globalSearchSlice";

const styles = {
    mainButtonContainer:{
        p: 3,
        width: '50%',
        height: '125px',
        display: { xs: 'flex', md: 'none' },
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000c5',
        borderRadius: '30px'
    },
    link: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none'
    },
    mainButton: {
        color: 'white',
        height: '100%',
        width: '100%',
        maxWidth: 300,
        fontSize: 'larger',
        fontWeigth: 'bold',
    },
    gridContainer: {
        p: 3,
        width: '80%',
        maxWidth: '1000px',
        height: '125px',
        display: { xs: 'none', md: 'flex' },
        backgroundColor: '#000000c5',
        borderRadius: '30px'
    },
    gridItem: {
        p: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputField: {
        width: '100%',
        '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid white',
        },
        '& .MuiInputBase-root:hover fieldset': {
            border: '1px solid #f9a825',
        },
        '& .MuiFormLabel-root': {
            color: 'white'
        },
        '& .MuiButtonBase-root': {
            color: 'white'
        },
        '& .MuiInputBase-input':{
            color: 'white'
        }
    }
}


function HomeSearch() {

    const dispatch = useDispatch();
    const [userInput, setUserInput] = useState({
        type: '',
        location: '',
    });

    function handleChange(e, val) {
        let id = e.target.id.split('-')[0];

        setUserInput({
            ...userInput,
            [id]: val
        })
    }

    function handleClick() {
        dispatch(changeGlobalFields(userInput));
    }

    return (
        <>
            <Grid
                container
                sx={styles.gridContainer}
            >
                {/* {console.log(userInput)} */}
                <Grid item md={4} sx={styles.gridItem}>
                    <LocationField
                        handleChange={handleChange}
                        value={userInput.location}
                        sx={styles.inputField}
                    />
                </Grid>
                <Grid item md={4} sx={styles.gridItem}>
                    <CategoryField
                        handleChange={handleChange}
                        value={userInput.type}
                        sx={styles.inputField}
                    />
                </Grid>
                <Grid item md={4} sx={styles.gridItem}>
                    <Link to="/properties" style={{ textDecoration: 'none' }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleClick}
                            sx={{ color: 'white' }}>
                            Search Properties
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            <Box sx={styles.mainButtonContainer}>
                <Link to="/properties" style={styles.link}>
                    <Button
                        size='large'
                        variant="contained"
                        color="secondary"
                        onClick={handleClick}
                        sx={styles.mainButton}>
                        Search Properties
                    </Button>
                </Link>
            </Box>
        </>
    );
}

export default HomeSearch;