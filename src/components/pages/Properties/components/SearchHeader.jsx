import React from "react";
import { Autocomplete, Box, Chip, TextField } from "@mui/material";
import FilterIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/ImportExport';
import _ from "lodash";
import PropertySearchField from "../../../../common/components/custom_fields/PropertySearchField";


function SearchHeader(props) {
    
    const { filter, openFilter, openSort, handleFilterClick, handleSortClick, handleFilterChange } = props;

    return ( 
        <Box sx={{ 
            p: 2,
            px: {
                xs: 2,
                md: 10,
                lg: 20
            },  
            backgroundColor: 'orange',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        }}>
            <Chip
                icon={<FilterIcon/>}
                label='Filter'
                size='large'
                clickable
                variant={openFilter ? 'filled' : 'outlined'}
                color={openFilter ? 'secondary' : 'warning'}
                onClick={handleFilterClick}
                sx={{
                    minWidth: {
                        xs: '20%',
                        md: '25%'
                    },
                    fontSize: 'medium',
                    color: openFilter ? 'white' : 'inherited'
                }}
            />
            <Chip
                icon={<SortIcon/>}
                label='Sort'
                size='large'
                clickable
                variant={openSort ? 'filled' : 'outlined'}
                color={openSort ? 'secondary' : 'warning'}
                onClick={handleSortClick}
                sx={{
                    minWidth: '25%',
                    fontSize: 'medium',
                    color: openSort ? 'white' : 'inherited'
                }}
            />
            <PropertySearchField 
                value={filter.name}
                handleSearchChange={handleFilterChange} 
                color='secondary'
                />

        </Box>
    );
}

export default SearchHeader;