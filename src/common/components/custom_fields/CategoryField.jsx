import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import _ from "lodash";
import { useGetPropertyListQuery } from "../../redux/apiSlices/propertyApiSlice";
import { propertyData } from "../../../utils/sampleData";


function CategoryField(props) {

    const { handleChange, value, sx  } = props;
    // const { status, data } = useGetPropertyListQuery();
    const data = propertyData;

    const [ categoryOptions, setCategoryOptions ] = useState([]);

    useEffect(() => {
        if(status == "fulfilled"){
            setCategoryOptions(_.uniqBy(data, 'type').map((prop) => prop.type))
        }
    }, [status])

    return (
        <Autocomplete
            color='primary'
            disablePortal
            freeSolo
            id='type'
            options={categoryOptions}
            value={value}
            onChange={handleChange}
            sx={sx ? sx : {}}
            componentsProps={{
                clearIndicator: {
                    onClick: (e) => {
                        handleChange({
                            target: { id: 'type' }
                        }, '')
                    }
                }
            }}
            renderInput={(params) => <TextField {...params} id="type" label="Categories" />} />
    );
}

export default CategoryField;