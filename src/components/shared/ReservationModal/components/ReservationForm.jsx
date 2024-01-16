import React, { useEffect, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { Form } from "react-bootstrap";
import { send } from "@emailjs/browser";
import { ContactNumValidation, EmailValidation, IdValidation, NameValidation } from "../../../../common/functions/validator";
import PropertySearchField from "../../../../common/components/custom_fields/PropertySearchField";
import PrivacyCheckBox from "../../../../common/components/custom_fields/PrivacyCheckBox";
import { useDispatch, useSelector } from "react-redux";
import { changeModalState } from "../../../../common/redux/slices/modalSlice";
import { popNotification, pushNotification } from "../../../../common/redux/slices/notifSlice";
import { changeGlobalFields } from "../../../../common/redux/slices/globalSearchSlice";
import SelectCountry from "../../../../common/components/custom_fields/SelectCountry";
import SelectState from "../../../../common/components/custom_fields/SelectState";
import SelectCity from "../../../../common/components/custom_fields/SelectCity";


function ReservationForm() {

    const dispatch = useDispatch();
    const globalPropertyInput = useSelector(state => state.globalSearch.modalProperty);

    const [formInput, setFormInput] = useState({
        property: '',
        firstName: '',
        lastName: '',
        email: '',
        contactNum: '',
        country: '',
        province: '',
        city: '',
        idNumber: '',
        privacyPolicy: false,
    })
    const [inputError, setInputError] = useState({
        property: false,
        firstName: false,
        lastName: false,
        email: false,
        contactNum: false,
        country: false,
        province: false,
        city: false,
        idNumber: false,
        privacyPolicy: false,
    })

    useEffect(() => {
        initStates();
    }, [])

    useEffect(() => {
        if(globalPropertyInput){
            setFormInput({
                ...formInput,
                property: globalPropertyInput
            });
            
            dispatch(changeGlobalFields({modalProperty: ''}));
        }
    }, [globalPropertyInput])

    function initStates(){
        setFormInput({
            
            firstName: '',
            lastName: '',
            email: '',
            contactNum: '',
            country: '',
            province: '',
            city: '',
            idNumber: '',
            privacyPolicy: false,
        })
        setInputError({
            firstName: false,
            lastName: false,
            email: false,
            contactNum: false,
            country: false,
            province: false,
            city: false,
            idNumber: false,
            privacyPolicy: false,
        })
    }

    function validate(input, inputType) {
        return new Promise((resolve, reject) => {
            let resp = {}
            if (inputType == "firstName" || inputType == "lastName" ||
                inputType == "city" || inputType == "province" || 
                inputType == "country") {
                resp = NameValidation(input);
            } else if (inputType == "property"){
                if(!input){
                    resp.err = 'Property is required.'
                }
            } else if (inputType == "email") {
                resp = EmailValidation(input);
            } else if (inputType == "contactNum") {
                resp = ContactNumValidation(input);
            } else if (inputType == "idNumber") {
                resp = IdValidation(input);
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

    function handleSearchChange(e, val) {
        setFormInput({
            ...formInput,
            property: val
        });
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

        // try{
        //     let resp = await send(process.env.EJS_KEY, process.env.EJS_TEMPLATE_KEY, formInput, process.env.EJS_PUBLIC_KEY);  
        //     //Notify Success  
        //     dispatch(pushNotification({
        //         type: 'success',
        //         message: 'Reservation has been successfully submitted.'
        //     }))
        //     dispatch(changeModalState('reservationModal'));
        //     initStates();
        //     setTimeout(() => {
        //         dispatch(popNotification());
        //     }, 3000);
        // } catch (err){
        //     //Notify Error
        //     dispatch(pushNotification({
        //         type: 'error',
        //         message: err.message
        //     }))
        //     setTimeout(() => {
        //         dispatch(popNotification());
        //     }, 3000);
        // }

        
        dispatch(pushNotification({
            type: 'success',
            message: 'Reservation has been successfully submitted.'
        }));
        dispatch(changeModalState('reservationModal'));
        initStates();
        setTimeout(() => {
            dispatch(popNotification());
        }, 3000);

    }

    function handleOpenPrivacyModal() {
        dispatch(changeModalState('privacyModal'));
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <PropertySearchField 
                            required
                            value={formInput.property}
                            handleSearchChange={handleSearchChange}
                            sx={{ width: '100%' }}/>
                    </Grid>
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
                            required
                            name='idNumber'
                            label='Valid ID Number'
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
                            justifyContent: 'center'
                        }}>
                        <PrivacyCheckBox
                            helperText={inputError.privacyPolicy}
                            onChange={handleChange}
                            onPrivacyOpen={handleOpenPrivacyModal}
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


export default ReservationForm;