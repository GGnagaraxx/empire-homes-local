import React, { useEffect, useState } from "react";
import { Autocomplete, Stack, TextField } from "@mui/material";
import _ from "lodash";
import { useGetPropertyListQuery } from "../../../../common/redux/apiSlices/propertyApiSlice";
import CategoryField from "../../../../common/components/custom_fields/CategoryField";
import LocationField from "../../../../common/components/custom_fields/LocationField";


function FilterTab(props) {

    const { filters, handleFilterChange } = props;

    return (
        <Stack spacing={2} sx={{ p: 5, pb: 0 }}>

            <CategoryField
                handleChange={handleFilterChange}
                value={filters.type}
            />

            <LocationField
                handleChange={handleFilterChange}
                value={filters.location}
            />

            <TextField
                type='number' id="minPrice"
                label="Min Price" variant="outlined"
                onChange={handleFilterChange}
                inputProps={{
                    min: 0,
                    max: 99999999
                }} />
            <TextField 
                type='number' id="maxPrice" 
                label="Max Price" variant="outlined" 
                onChange={handleFilterChange}/>

        </Stack>
    );
}

export default FilterTab;