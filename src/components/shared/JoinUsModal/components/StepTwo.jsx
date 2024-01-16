import React, { useEffect, useState } from "react";
import { Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { ContactNumValidation, EmailValidation, IdValidation, NameValidation } from "../../../../common/functions/validator";
import PrivacyCheckBox from "../../../../common/components/custom_fields/PrivacyCheckBox";


function StepTwo(props) {

    const { formInput, setFormInput, handleNext, handleBack } = props;

    const [inputError, setInputError] = useState({
        idType: false,
        idNumber: false,
    })

    useEffect(() => {
        initStates();
    }, [])


    function initStates() {
        setFormInput({
            idType: '',
            idNumber: '',
        })
        setInputError({
            idType: false,
            idNumber: false,
        })
    }

    function validate(input, inputType) {
        return new Promise((resolve, reject) => {
            let resp = {}
            if (inputType == "idType") {
                if (input == "Passport" || input == "Immigrant COR") {
                    resp.err = false;
                } else {
                    resp.err = 'ID Type is required'
                }
            } else if (inputType == "idNumber") {
                resp = IdValidation(input);
            }

            setInputError({
                ...inputError,
                [inputType]: resp.err
            });

            resolve(resp.err);
        })
    }

    function handleChange(e) {
        const name = e.target.name

        if (name == 'privacyPolicy') {
            setFormInput({
                ...formInput,
                [name]: e.target.checked
            });
        } else {
            setFormInput({
                ...formInput,
                [name]: e.target.value
            });

            validate(e.target.value, name);
        }
    }

    async function handleSubmit(e) {

        e.preventDefault();

        let valid = true;
        let errCopy = { ...inputError }
        for (const key in formInput) {
            errCopy[key] = await validate(formInput[key], key);
            if (errCopy[key]) valid = false;
        }

        if (!valid) {
            setInputError(errCopy);
            return;
        }

        handleNext();

    }


    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <FormControl fullWidth error={Boolean(inputError.idType)}>
                    <InputLabel required>ID Type</InputLabel>
                    <Select
                        name="idType"
                        value={formInput.idType}
                        label="ID Type"
                        onChange={handleChange}
                    >
                        <MenuItem value={'Passport'}>Passport</MenuItem>
                        <MenuItem value={'Immigrant COR'}>Immigrant COR</MenuItem>
                    </Select>
                    <FormHelperText>{inputError.idType ? inputError.idType : ''}</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    name='idNumber'
                    label='ID Number'
                    value={formInput.idNumber}
                    onChange={handleChange}
                    error={inputError.idNumber ? true : false}
                    helperText={inputError.idNumber ? inputError.idNumber : ''}
                    sx={{ width: '100%' }}
                />
            </Grid>
            <Grid
                item xs={12}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    mt: 2
                }}
            >
                <Button
                    type="button"
                    variant="contained"
                    size="large"
                    color='secondary'
                    onClick={handleBack}
                    sx={{ color: 'white' }}
                >
                    Back
                </Button>
                <Button
                    type="button"
                    variant="contained"
                    size="large"
                    onClick={handleSubmit}
                    sx={{ color: 'white' }}
                >
                    Next
                </Button>
            </Grid>
        </Grid>
    );
}

export default StepTwo;