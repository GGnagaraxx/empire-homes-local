import React, { useEffect, useState } from "react";
import { Box, Chip, Collapse, Grid, Stack, TextField } from "@mui/material";
import PageHeader from "../../../common/components/PageHeader";
import header_image from '../../../utils/images/header_image.jpg'
import PropertyPagination from "./components/PropertyPagination";
import FilterTab from "./components/FilterTab";
import SortTab from "./components/SortTab";
import SearchHeader from "./components/SearchHeader";
import { useDispatch, useSelector } from "react-redux";
import { changeGlobalFields } from "../../../common/redux/slices/globalSearchSlice";

const styles = {
    header: {
        p: 5,
        pt: 15,
        backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.5), rgba(30, 30, 30, 0.5)), url(${header_image})`,
        backgroundSize: '100vw 100vh',    
        backgroundPosition: 'right top',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
    },
    body:{
        mt: '0!important',
        minHeight: 500
    },
    sidebar: {
        backgroundColor: '#f8f8f8   ',
    }
}

function Properties() {

    const dispatch = useDispatch();
    const info = useSelector(state => state.globalSearch);
    const [openFilter, setOpenFilter] = useState(false);
    const [openSort, setOpenSort] = useState(false);
    const [filters, setFilters] = useState({
        name: '',
        type: '',
        minPrice: 0,
        maxPrice: '',
        location: '',
    });
    const [sortDetails, setSortDetails] = useState({
        name: null,
        minPrice: null,
        maxPrice: null,
        demand: null,
        progress: null,
    });

    useEffect(() => {
        if(info.type || info.location){
            const globalType = info.type ? info.type : filters.type;
            const globalLoc = info.location ? info.location : filters.location;
    
            setOpenFilter(true);
            setFilters({
                ...filters,
                type: globalType,
                location: globalLoc
            })
            dispatch(changeGlobalFields({
                type: '',
                location: ''
            }))
        }

    }, [info])

    function handleFilterClick() {
        setOpenFilter(!openFilter);
    }

    function handleSortClick() {
        setOpenSort(!openSort);
    }

    function handleFilterChange(e, val) {
        if(e.target.id == 'minPrice' || e.target.id == 'maxPrice'){
            setFilters({
                ...filters,
                [e.target.id]: e.target.value
            })
        } else {
            const id = e.target.id.split('-')[0];
    
            setFilters({
                ...filters,
                [id]: val
            })
        }
    }

    function handleSortChange(e) {
        const name = lowerFirstLetter(e.currentTarget.innerText);
        let newSortDirection
        if(!sortDetails[name]){
            newSortDirection = 'asc'
        } else if(sortDetails[name] == 'asc'){
            newSortDirection = 'desc'
        }

        setSortDetails({
            ...sortDetails,
            [name]: newSortDirection
        })
        
    }
    
    function lowerFirstLetter(string) {
        return string.charAt(0).toLowerCase() + string.slice(1);
    }

    return (
        <Box className='page-content'>
            <Box className='page-header' sx={styles.header}>
                <PageHeader
                    title='Properties'
                    subtitle='Browse through our upcoming properties and see if it interests you!'
                />
            </Box>
            <Stack spacing={2} sx={{ mb: 5 }}>
                <SearchHeader
                    filter={filters}
                    openFilter={openFilter}
                    openSort={openSort}
                    handleFilterClick={handleFilterClick}
                    handleSortClick={handleSortClick}
                    handleFilterChange={handleFilterChange}
                />
                <Grid container sx={styles.body}>
                    {openFilter || openSort ?
                        <Grid item xs={12} sm={6} md={4} lg={3} sx= {styles.sidebar}>
                            <Stack>
                                {openFilter ? <FilterTab filters={filters} handleFilterChange={handleFilterChange}/> : null}
                                {openSort ? <SortTab sortDetails={sortDetails} handleSortChange={handleSortChange}/> : null}
                            </Stack>
                        </Grid> : null
                    }
                    <Grid
                        item
                        xs={12} sm={openFilter || openSort ? 6 : 12} md={openFilter || openSort ? 8 : 12} lg={openFilter || openSort ? 9 : 12}
                    >
                        <PropertyPagination 
                            sortDetails={sortDetails} 
                            filter={filters} 
                            filterOpen={openFilter || openSort} />
                    </Grid>
                </Grid>
            </Stack>
        </Box>
    )
}


export default Properties;