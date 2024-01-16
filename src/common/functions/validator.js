const patterns = {
    name: /^[a-zA-Z]{3,}([" "][a-zA-Z]{3,})*$/,
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    contactNum: /^[0-9]{10}$/,
    validId: /^[0-9]{12}$/,
}

const constants = {
    enqType: [
        'Seller Inquiry',
        'Buyer Inquiry',
        'Customer Care Concern',
        'Other Concerns'
    ]
}

function NameValidation(name){
    let retVal = {
        valid: false,
        err: false,
    }

    if(name==null || !name.trim().length){
        retVal.err = 'Field is required';
    } else if(patterns.name.test(name.trim())){
        retVal.valid = true;
    } else {
        retVal.err = 'Invalid Name';
    }

    return retVal;
}

function EmailValidation(email){
    let retVal = {
        valid: false,
        err: false,
    }

    if(email==null || !email.trim().length){
        retVal.err = 'Field is required';
    } else if(patterns.email.test(email.trim().toLowerCase())){
        retVal.valid = true;
    } else {
        retVal.err = 'Invalid Email';
    }

    return retVal;
}

function ContactNumValidation(num){
    let retVal = {
        valid: false,
        err: false,
    }

    if(num==null || !num.trim().length){
        retVal.err = 'Field is required';
    } else if(patterns.contactNum.test(num.trim())){
        retVal.valid = true;
    } else {
        retVal.err = 'Invalid Contact Number';
    }

    return retVal;
}

function IdValidation(idNumber, required){
    let retVal = {
        valid: false,
        err: false,
    }

    if((idNumber==null || !idNumber.trim().length) && required){
        retVal.err = 'Field is required';
    } else if(patterns.validId.test(idNumber.trim())){
        retVal.valid = true;
    } else {
        retVal.err = 'Invalid ID number';
    }

    return retVal;
}

function DoBValidation(dob){
    let retVal = {
        valid: false,
        err: false,
    }

    if(!dob || dob == ''){
        retVal.err = 'Field is required';
    } else if(dob < new Date()){
        retVal.valid = true;
    } else {
        retVal.err = 'Invalid Date of Birth';
    }

    return retVal;
}

function InqTypeValidation(inqType){
    let retVal = {
        valid: false,
        err: false,
    }

    inqType = inqType.trim()
    if(!inqType || inqType == ''){
        retVal.err = 'Field is required';
    } else if(constants.enqType.includes(inqType.trim())){
        retVal.valid = true;
    } else {
        retVal.err = 'Invalid Inquery Type';
    }

    return retVal;
}

function IsInputEmpty(input){
    let isEmpty = true;

    if(input && input != ''){
        isEmpty = false;
    }

    return isEmpty;
}


export {
    NameValidation,
    EmailValidation,
    ContactNumValidation,
    DoBValidation,
    
    IdValidation,
    InqTypeValidation,

    IsInputEmpty,
}