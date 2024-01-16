import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import CategoryCarousel from "./components/CategoryCarousel";
import PropsCarousel from "./components/PropsCarousel";
import SectionHeader from "../../SectionHeader";
import { Link } from "react-router-dom";


function PropTypeSection() {

    const [selectedCategory, setSelectedCategory] = useState('');

    function handleSelectCategory(e) {
        const category = e.target.innerText
        if (category == selectedCategory) {
            setSelectedCategory('')
        } else {
            setSelectedCategory(category)
        }
    }



    return (
        <Box className="section" sx={{ p: 5 }}>
            <Link to='/properties' style={{textDecoration: 'none'}}>
                <SectionHeader
                    title='Top Properties'
                    subtitle="Take a look at Empire Home's most demanded properties in the Philippines!"
                    buttonProps={{
                        label: 'View All Properties',
                        variant: 'contained',
                        sx: {
                            color: 'white'
                        }
                    }}
                />
            </Link>
            <CategoryCarousel
                handleSelectCategory={handleSelectCategory}
                selectedCategory={selectedCategory}
            />
            <Box className='mt-5'>
                <PropsCarousel selectedCategory={selectedCategory} />
            </Box>
        </Box>
    )
}

export default PropTypeSection;