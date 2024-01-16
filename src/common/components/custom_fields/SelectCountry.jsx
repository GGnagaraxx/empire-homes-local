import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Country } from "country-state-city";
import _ from "lodash";


function SelectCountry(props) {

    const { handleChange, value, required, disabled, sx } = props;
    const countryOptions = Country.getAllCountries().map(country => country.name);

    return (
        <Autocomplete
            disabled={disabled}
            color='primary'
            disablePortal
            freeSolo
            id='country'
            name='country'
            options={countryOptions}
            value={value}
            onChange={handleChange}
            sx={sx ? sx : {}}
            componentsProps={{
                clearIndicator: {
                    onClick: (e) => {
                        handleChange({
                            target: {
                                id: 'country',
                                name: 'country'
                            }
                        }, '')
                    }
                }
            }}
            renderInput={(params) =>
                <TextField
                    {...params}
                    required={required}
                    id="country"
                    name='country'
                    label="Country" />
            } />
    );
}

export default SelectCountry;