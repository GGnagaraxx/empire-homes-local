import React, { useEffect, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { Form } from "react-bootstrap";
import PrivacyCheckBox from "../custom_fields/PrivacyCheckBox";
import SelectEnqType from "../custom_fields/SelectEnqType";
import { send } from "@emailjs/browser";
import { ContactNumValidation, EmailValidation, NameValidation } from "../../functions/validator";
import { useDispatch } from "react-redux";
import { changeModalState } from "../../redux/slices/modalSlice";
import { popNotification, pushNotification } from "../../redux/slices/notifSlice";
import SelectCountry from "../custom_fields/SelectCountry";
import SelectState from "../custom_fields/SelectState";
import SelectCity from "../custom_fields/SelectCity";


function ContactUsForm() {

    const dispatch = useDispatch();

    const [formInput, setFormInput] = useState({
        enqType: 'Other Concerns',
        firstName: '',
        lastName: '',
        email: '',
        contactNum: '',
        country: '',
        province: '',
        city: '',
        message: '',
        privacyPolicy: false,
    })
    const [inputError, setInputError] = useState({
        enqType: false,
        firstName: false,
        lastName: false,
        email: false,
        contactNum: false,
        country: false,
        province: false,
        city: false,
        message: false,
        privacyPolicy: false,
    })

    useEffect(() => {
        initStates();
    }, [])


    function initStates(){
        setFormInput({
            enqType: 'Other Concerns',
            firstName: '',
            lastName: '',
            email: '',
            contactNum: '',
            country: '',
            province: '',
            city: '',
            message: '',
            privacyPolicy: false,
        })
        setInputError({
            enqType: false,
            firstName: false,
            lastName: false,
            email: false,
            contactNum: false,
            country: false,
            province: false,
            city: false,
            message: false,
            privacyPolicy: false,
        })
    }

    function validate(input, inputType) {
        return new Promise((resolve, reject) => {
            let resp = {}
            if (inputType == "firstName" || inputType == "lastName" ||
                inputType == "city" || inputType == "province" || inputType == "country") {
                resp = NameValidation(input);
            } else if (inputType == "email") {
                resp = EmailValidation(input);
            } else if (inputType == "contactNum") {
                resp = ContactNumValidation(input);
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

        if(val == ""){
            if(id == "country"){
                setFormInput({
                    ...formInput,
                    [id]: val,
                    province: '',
                    city: ''
                })
            } else if(id == "province"){
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

        try{
            let resp = await send(import.meta.env.VITE_EJS_KEY, import.meta.env.VITE_EJS_TEMPLATE_KEY, formInput, import.meta.env.VITE_EJS_PUBLIC_KEY);  
            //Notify Success  
            dispatch(pushNotification({
                type: 'success',
                message: 'Inquiry has been sent successfully.'
            }))
            initStates();
            setTimeout(() => {
                dispatch(popNotification());
            }, 3000);
        } catch (err){
            //Notify Error
            dispatch(pushNotification({
                type: 'error',
                message: err.message
            }))
        }

    }

    function handleOpenPrivacyModal() {
        dispatch(changeModalState('privacyModal'))
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <SelectEnqType
                            value={formInput.enqType}
                            label='How can we help you?'
                            helperText={inputError.enqType}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <TextField
                            required
                            name='firstName'
                            label='First Name'
                            value={formInput.firstName}
                            onChange={handleChange}
                            error={inputError.firstName ? true : false}
                            helperText={inputError.firstName ? inputError.firstName : ''}
                            sx={{ width: '100%' }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
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
                        <SelectCountry
                            required
                            value={formInput.country}
                            handleChange={handleAutoCompleteChange}
                            sx={{ width: '100%' }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={6}>
                        <SelectState
                            required
                            disabled={!Boolean(formInput.country)}
                            value={formInput.province}
                            country={formInput.country}
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
                            country={formInput.country}
                            handleChange={handleAutoCompleteChange}
                            sx={{ width: '100%' }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-name"
                            name="message"
                            label="Message"
                            placeholder="Type your message here."
                            multiline
                            inputProps={{ maxLength: 500 }}
                            minRows={5}
                            maxRows={5}
                            required
                            sx={{ width: '100%' }}
                            error={inputError.message ? true : false}
                            helperText={inputError.message ? inputError.message : ''}
                            value={formInput.message}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid
                        item xs={12}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                        <PrivacyCheckBox
                            helperText={inputError.privacyPolicy}
                            onChange={handleChange}
                            onPrivacyOpen={handleOpenPrivacyModal}
                            checked={formInput.privacyPolicy}
                        />
                    </Grid>
                    <Grid
                        item xs={12}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{ color: 'white' }}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Form>
        </>
    )
}


export default ContactUsForm;