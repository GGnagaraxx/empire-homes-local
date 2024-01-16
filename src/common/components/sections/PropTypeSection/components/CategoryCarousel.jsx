import React from "react";
import { Chip } from "@mui/material";
import CardCarousel from "../../../CardCarousel";
import { propertyTypes } from "../../../../../utils/sampleData";

function CategoryCarousel(props) {

    const { handleSelectCategory, selectedCategory } = props

    const propTypeMap = propertyTypes.map((propType, i) => {
        return (
            <div className="carousel-item" key={propType.id}>
                <Chip
                    onClick={handleSelectCategory}
                    clickable
                    variant={selectedCategory == propType.type ? 'filled' : 'outlined'}
                    label={propType.type}
                    color={i % 2 == 0 ? 'primary' : 'secondary'}
                    sx={{
                        minWidth: 150,
                        color: selectedCategory == propType.type ? 'white' : 'inherited'
                    }}
                />
            </div>
        )
    })

    return (

        <CardCarousel
            infinite
            slidesToShow={{
                xs: 2,
                sm: 2,
                md: 3,
                lg: 4.5,
                xl: 6.5
            }}
        >
            {propTypeMap}
        </CardCarousel>
    )
}

export default CategoryCarousel;