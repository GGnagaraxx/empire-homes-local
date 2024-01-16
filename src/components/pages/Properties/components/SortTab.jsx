import React, { useEffect, useState } from "react";
import { Stack } from "@mui/system";
import AscIcon from '@mui/icons-material/Straight';
import SortIcon from '@mui/icons-material/ImportExport';
import DescIcon from '@mui/icons-material/South';
import { Chip } from "@mui/material";


function SortTab(props) {

    const { sortDetails, handleSortChange } = props;
    const sortableProps = ['name', 'minPrice', 'maxPrice', 'demand', 'progress']
    const [sortIcons, setSortIcons] = useState({
        name: <SortIcon />,
        minPrice: <SortIcon />,
        maxPrice: <SortIcon />,
        demand: <SortIcon />,
        progress: <SortIcon />,
    });

    useEffect(() => {
        updateSortIcons();
    }, [sortDetails])

    function updateSortIcons(){
        let sortIconsClone = { ...sortIcons };
        for (const key in sortIcons) {
            if(sortDetails[key] == 'asc'){
                sortIconsClone[key] = <AscIcon/>
            } else if(sortDetails[key] == 'desc'){
                sortIconsClone[key] = <DescIcon/>
            } else {
                sortIconsClone[key] = <SortIcon/>
            }
        }

        setSortIcons(sortIconsClone)
    }

    function capFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <Stack 
            spacing={2}
            sx={{
                alignItems: 'center',
                pt: 5,
            }}>
            {
                sortableProps.map((prop) => {
                    return (
                        <Chip
                            key={prop}
                            icon={sortIcons[prop]}
                            name={prop}
                            label={capFirstLetter(prop)}
                            size='large'
                            clickable
                            variant={sortDetails[prop] ? 'filled' : 'outlined'}
                            color='primary'
                            onClick={handleSortChange}
                            sx={{
                                width: '70%',
                                fontSize: 'medium',
                                color: sortDetails[prop] ? 'white' : 'inherited'
                            }}
                        />
                    )
                })
            }
        </Stack>
    );
}

export default SortTab;