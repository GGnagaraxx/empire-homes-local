import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import _ from "lodash";
import { useGetPropertyListQuery } from "../../redux/apiSlices/propertyApiSlice";
import { propertyData } from "../../../utils/sampleData";


function LocationField(props) {

    const { handleChange, value, sx  } = props;
    // const { status, data } = useGetPropertyListQuery();
    const data = propertyData;


    const [ locationOptions, setLocationOptions ] = useState([]);

    useEffect(() => {
        if(status == "fulfilled"){
            setLocationOptions(_.uniqBy(data, 'location').map((prop) => prop.location));
        }
    }, [status])

    return (
        <Autocomplete
            color='primary'
            disablePortal
            freeSolo
            id='location'
            options={locationOptions}
            value={value}
            onChange={handleChange}
            sx={sx ? sx : {}}
            componentsProps={{
                clearIndicator: {
                    onClick: (e) => {
                        handleChange({
                            target: { id: 'location' }
                        }, '')
                    }
                }
            }}
            renderInput={(params) => <TextField {...params} id="location" label="Location" />} />
    );
}

export default LocationField;