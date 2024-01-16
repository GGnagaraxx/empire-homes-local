import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Country, State, City } from "country-state-city";
import _ from "lodash";


function SelectCity(props) {

    const { handleChange, value, country, state, required, disabled, sx } = props;
    const [cityOptions, setCityOptions] = useState([]);

    useEffect(() => {
        if(country && state){
            getOptions();
        }

    }, [state, country])


    function getOptions() {
        const countries = Country.getAllCountries();
        const countryInfo = _.find(countries, { name: country });
        const states = State.getStatesOfCountry(countryInfo.isoCode);
        const stateInfo = _.find(states, { name: state });

        // console.log(countryInfo, stateInfo);
        // console.log(City.getCitiesOfState(countryInfo.isoCode, stateInfo.isoCode));
        setCityOptions(
            _.uniq(City.getCitiesOfState(countryInfo.isoCode, stateInfo.isoCode))
            .map(city => city.name)
        );
    }

    return (
        <Autocomplete
            disabled={disabled}
            color='primary'
            disablePortal
            freeSolo
            id='city'
            name='city'
            value={value}
            onChange={handleChange}
            sx={sx ? sx : {}}
            options={cityOptions}
            componentsProps={{
                clearIndicator: {
                    onClick: (e) => {
                        handleChange({
                            target: {
                                id: 'city',
                                name: 'city'
                            }
                        }, '')
                    }
                }
            }}
            renderInput={(params) =>
                <TextField
                    {...params}
                    required={required}
                    id="city"
                    name='city'
                    label="City" />
            } />
    );
}

export default SelectCity;