import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, CircularProgress } from "@mui/material";

const styles = {
    spinner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

function CardCarousel(props) {

    const { children, slidesToShow, slidesToScroll, infinite, centerMode } = props;
    const [toShow, setToShow] = useState({
        xs: 1,
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
    });
    const [toScroll, setToScroll] = useState({
        xs: 1,
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
    });

    useEffect(() => {
        let tempToShow = {
            xs: slidesToShow && slidesToShow.xs ? slidesToShow.xs : 1,
            sm: slidesToShow && slidesToShow.sm ? slidesToShow.sm : 1,
            md: slidesToShow && slidesToShow.md ? slidesToShow.md : 2,
            lg: slidesToShow && slidesToShow.lg ? slidesToShow.lg : 3,
            xl: slidesToShow && slidesToShow.xl ? slidesToShow.xl : 4,
        }
        let tempToScroll = {
            xs: slidesToScroll && slidesToScroll.xs ? slidesToScroll.xs : 1,
            sm: slidesToScroll && slidesToScroll.sm ? slidesToScroll.sm : 1,
            md: slidesToScroll && slidesToScroll.md ? slidesToScroll.md : 2,
            lg: slidesToScroll && slidesToScroll.lg ? slidesToScroll.lg : 3,
            xl: slidesToScroll && slidesToScroll.xl ? slidesToScroll.xl : 4,
        }

        setToShow(tempToShow);
        setToScroll(tempToScroll);
    }, [])

    const settings = {
        dots: false,
        infinite: infinite ? true : false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoPlaySpeed: 5000,
        autoPlay: !centerMode ? true : false,
        centerMode: centerMode ? true : false,
        responsive: children ? [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: toShow.xl > children.length ? children.length : toShow.xl,
                    slidesToScroll: toScroll.xl,
                    dots: true,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: toShow.lg > children.length ? children.length : toShow.lg,
                    slidesToScroll: toScroll.lg,
                    dots: true,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: toShow.md > children.length ? children.length : toShow.md,
                    slidesToScroll: toScroll.md,
                    dots: true,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: toShow.sm > children.length ? children.length : toShow.sm,
                    slidesToScroll: toScroll.sm,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: toShow.xs > children.length ? children.length : toShow.xs,
                    slidesToScroll: toScroll.xs,
                }
            }
        ] : []
    };


    return (
        <div className="cust-carousel">
            {!children ?
                <Box sx={styles.spinner}>
                    <CircularProgress color='secondary' />
                </Box> :
                <Slider {...settings}>
                    {children}
                </Slider>}
        </div>
    );
}


export default CardCarousel;