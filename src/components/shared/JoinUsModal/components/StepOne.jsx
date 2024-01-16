import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Button, Checkbox, FormControlLabel, Grid, TextField } from "@mui/material";
import { ContactNumValidation, EmailValidation, IdValidation, NameValidation } from "../../../../common/functions/validator";
import PrivacyCheckBox from "../../../../common/components/custom_fields/PrivacyCheckBox";
import SelectState from "../../../../common/components/custom_fields/SelectState";
import SelectCity from "../../../../common/components/custom_fields/SelectCity";


function StepOne(props) {

    const { formInput, setFormInput, isFilipino, setIsFilipino, handleEnableStep2, handleNext } = props;

    const [inputError, setInputError] = useState({
        firstName: false,
        lastName: false,
        email: false,
        contactNum: false,
        province: false,
        city: false,
        nationalId: false,
    });

    useEffect(() => {
        initStates();
    }, [])

    function initStates() {
        setFormInput({

            firstName: '',
            lastName: '',
            email: '',
            contactNum: '',
            province: '',
            city: '',
            nationalId: '',
        })
        setInputError({
            firstName: false,
            lastName: false,
            email: false,
            contactNum: false,
            province: false,
            city: false,
            nationalId: false,
        })
    }

    function validate(input, inputType) {
        return new Promise((resolve, reject) => {
            let resp = {}
            if (inputType == "firstName" || inputType == "lastName" ||
                inputType == "city" || inputType == "province" ||
                inputType == "country" || inputType == "property") {
                resp = NameValidation(input);
            } else if (inputType == "email") {
                resp = EmailValidation(input);
            } else if (inputType == "contactNum") {
                resp = ContactNumValidation(input);
            } else if (inputType == "nationalId" && isFilipino) {
                resp = IdValidation(input, isFilipino);
            } else if (inputType == "privacyPolicy") {
                resp.err = !input;
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

    function handleAutoCompleteChange(e, val) {
        let id = e.target.id.split('-')[0];

        if (val == "") {
            if (id == "country") {
                setFormInput({
                    ...formInput,
                    [id]: val,
                    province: '',
                    city: ''
                })
            } else if (id == "province") {
                setFormInput({
                    ...formInput,
                    [id]: val,
                    city: ''
                })
            }
        } else {
            setFormInput({
                ...formInput,
                [id]: val
            })
        }
    }

    function handleCheckChange(e) {
        setFormInput({
            ...formInput,
            nationalId: ''
        })
        setIsFilipino(!isFilipino);
        handleEnableStep2();
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
        <Form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
                <Grid item xs={12} lg={6}>
                    <TextField
                        required
                        name='firstName'
                        label='First Name'
                        value={formInput.firstName}
                        onChange={handleChange}
                        error={inputError.firstName ? true : false}
                        helperText={inputError.firstName ? inputError.firstName : ''}
                        sx={{ width: '100%', color: 'white' }}
                    />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <TextField
                        required
                        name='lastName'
                        label='Last Name'
                        value={formInput.lastName}
                        onChange={handleChange}
                        error={inputError.lastName ? true : false}
                        helperText={inputError.lastName ? inputError.lastName : ''}
                        sx={{ width: '100%' }}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={12}>
                    <TextField
                        required
                        name='email'
                        label='Email'
                        value={formInput.email}
                        onChange={handleChange}
                        error={inputError.email ? true : false}
                        helperText={inputError.email ? inputError.email : ''}
                        sx={{ width: '100%' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <TextField
                        required
                        name='contactNum'
                        label='Contact Number'
                        value={formInput.contactNum}
                        onChange={handleChange}
                        error={inputError.contactNum ? true : false}
                        helperText={inputError.contactNum ? inputError.contactNum : ''}
                        sx={{ width: '100%' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={6}>
                    <SelectState
                        required
                        value={formInput.province}
                        country={"Philippines"}
                        handleChange={handleAutoCompleteChange}
                        sx={{ width: '100%' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={6}>
                        <SelectCity
                            required
                            disabled={!Boolean(formInput.province)}
                            value={formInput.city}
                            state={formInput.province}
                            country={"Philippines"}
                            handleChange={handleAutoCompleteChange}
                            sx={{ width: '100%' }}
                        />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={6}>
                    <TextField
                        required={isFilipino}
                        disabled={!isFilipino}
                        name='nationalId'
                        label='Philippines National ID Number'
                        value={formInput.nationalId}
                        onChange={handleChange}
                        error={inputError.nationalId ? true : false}
                        helperText={inputError.nationalId ? inputError.nationalId : ''}
                        sx={{ width: '100%' }}
                    />
                    <FormControlLabel control={<Checkbox checked={isFilipino} onChange={handleCheckChange} />} label="I'm a Filipino Citizen" />
                </Grid>
                <Grid
                    item xs={12}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        mt: 2,
                    }}
                >
                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{ color: 'white' }}
                    >
                        Next
                    </Button>
                </Grid>
            </Grid>
        </Form>
    );
}

export default StepOne;