import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { propertyData } from "../../../utils/sampleData";
import { useGetPropertyListQuery } from "../../redux/apiSlices/propertyApiSlice";
import _ from "lodash";


function PropertySearchField(props) {

    // const { status, data } = useGetPropertyListQuery();
    const data = propertyData;
    const status = "fulfilled";
    const { value, handleSearchChange, sx, required, color } = props;
    const [ nameOptions, setNameOptions ] = useState([]);

    useEffect(() => {
        if(status == "fulfilled"){
            setNameOptions(_.uniqBy(data, 'name').map((prop) => prop.name));
        }
    }, [status])

    return (
        <Autocomplete
            disablePortal
            id='name'
            options={nameOptions}
            onChange={handleSearchChange}
            value={value}
            componentsProps={{
                clearIndicator: {
                    onClick: (e) => {
                        handleSearchChange({
                            target: { id: 'name' }
                        }, '')
                    }
                }
            }}
            sx={sx ? sx : 
                {
                    backgroundColor: '#ffffff',
                    borderRadius: '5px',
                    width: {
                        xs: '40%',  
                        md: '25%'
                    },
                }
            }
            renderInput={(params) => <TextField {...params} required={required} id="name" label="Search Property" color={color ? color : 'primary'} />} />
    );
}

export default PropertySearchField;