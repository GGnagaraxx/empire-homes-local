import React, { useEffect, useState } from "react";
import StepOne from "./StepOne";
import { Box, Step, StepLabel, Stepper } from "@mui/material";
import StepTwo from "./StepTwo";
import ReviewAndSubmit from "./ReviewAndSubmit";

const steps = ['Personal Info', 'Non-Filipino', 'Review & Submit']

function JoinUsForm() {

    const [stepOneInput, setStepOneInput] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNum: '',
        province: '',
        city: '',
        nationalId: '',
    });
    const [stepTwoInput, setStepTwoInput] = useState({
        idType: '',
        idNumber: '',
    });
    const [isFilipino, setIsFilipino] = useState(true);
    const [completedSteps, setCompletedSteps] = useState([false, false]);
    const [activeStep, setActiveStep] = useState(0);

    function handleEnableStep2() {
        if(!isFilipino){
            setStepTwoInput({
                idType: '',
                idNumber: '',
            })
        }
        setIsFilipino(!isFilipino);
    }
    
    function resetFields(){
        setStepOneInput({
            firstName: '',
            lastName: '',
            email: '',
            contactNum: '',
            province: '',
            city: '',
            nationalId: '',
        })
        setStepTwoInput({
            idType: '',
            idNumber: '',
        })
        setIsFilipino(true);
    }

    function handleNext() {
        let completedClone = [...completedSteps];
        completedClone[activeStep] = true;
        setCompletedSteps(completedClone);
        setActiveStep(isFilipino ? 2 : activeStep + 1);
    }

    function handleBack() {
        let completedClone = [...completedSteps];

        if(isFilipino && activeStep == 2){
            setActiveStep(0);
        } else {
            completedClone[activeStep - 1] = false;
            setActiveStep(activeStep - 1);
        }
    }


    return (
        <Box>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, i) => (
                    <Step key={label} completed={i == 2 && isFilipino && completedSteps[0]}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Box sx={{ mt: 3 }}>
                <Box sx={{ display: activeStep == 0 ? 'flex' : 'none' }}>
                    <StepOne
                        formInput={stepOneInput}
                        setFormInput={setStepOneInput}
                        isFilipino={isFilipino}
                        setIsFilipino={setIsFilipino}
                        handleEnableStep2={handleEnableStep2}
                        handleNext={handleNext} />
                </Box>
                <Box sx={{ display: activeStep == 1 ? 'flex' : 'none' }}>
                    <StepTwo 
                        formInput={stepTwoInput}
                        setFormInput={setStepTwoInput}
                        handleBack={handleBack} 
                        handleNext={handleNext} />
                </Box>
                <Box sx={{ display: activeStep == 2 ? 'flex' : 'none' }}>
                    <ReviewAndSubmit 
                        userInput={{...stepOneInput, ...stepTwoInput}} 
                        resetFields={resetFields}
                        handleBack={handleBack} />
                </Box>
            </Box>
        </Box>
    )
}


export default JoinUsForm;