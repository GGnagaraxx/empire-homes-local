import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Country, State } from "country-state-city";
import _ from "lodash";


function SelectState(props) {

    const { handleChange, value, country, required, disabled, sx } = props;
    const [stateOptions, setStateOptions] = useState(State.getAllStates());

    useEffect(() => {
        if (country) {

            const countries = Country.getAllCountries();
            const countryInfo = _.find(countries, { name: country });
            setStateOptions(
                _.uniq(State.getStatesOfCountry(countryInfo.isoCode).map(state => state.name))
            );
        }
    }, [country])

    return (
        <Autocomplete
            disabled={disabled}
            color='primary'
            disablePortal
            freeSolo
            id='province'
            name='province'
            value={value}
            onChange={handleChange}
            sx={sx ? sx : {}}
            options={stateOptions}
            componentsProps={{
                clearIndicator: {
                    onClick: (e) => {
                        handleChange({
                            target: {
                                id: 'province',
                                name: 'province'
                            }
                        }, "")
                    }
                }
            }}
            renderInput={(params) =>
                <TextField
                    {...params}
                    required={required}
                    id="province"
                    name='province'
                    label="State" />
            } />
    );
}

export default SelectState;