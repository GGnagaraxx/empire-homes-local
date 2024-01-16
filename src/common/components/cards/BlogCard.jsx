import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { dateFormat, moneyFormat } from "../../functions/formatter";

const styles = {
    card: {
        maxWidth: 300,
        height: 350,
        position: 'relative',
        boxShadow: '0px 0px 3px grey',
        cursor: 'pointer',
        overflow: 'hidden',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0px 0px 8px grey',
        }
    },
    mediaBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        borderRadius: '5px',
        overflow: 'hidden'
    },
    highlightTitle: {
        bottom: '20px',
        left: '10px',
        position: 'absolute',
        color: 'white'
    },
    overflowHider: {
        alignSelf: 'center',
        width: '100%',
        height: '20px',
        position: 'absolute',
        top: '100%',
        backgroundColor: 'white',
        boxShadow: '0px -5px 20px #cccccc'

    }
}


function BlogCard(props) {

    const { blogData, theme, highlight, withDesc } = props;

    return (
        <a href={blogData.link} target="_blank" rel="noreferrer" 
            style={{ textDecoration: 'none' }}>
            <Card
                sx={{
                    ...styles.card,
                    backgroundColor: theme && theme.bg ? theme.bg : 'white',
                    maxWidth: highlight ? '600px' : styles.card.maxWidth,
                    maxHeight: highlight ? '350px' : 'none',
                    height: highlight ? 'auto' : styles.card.height,
                    width: highlight ? 'auto' : styles.card.width,
                }}>
                <Box
                    className='prop-card-media'
                    sx={styles.mediaBox}
                >
                    <CardMedia
                        component="img"
                        image={blogData.imgUrl}
                        alt={blogData.title + ' image'}
                        sx={{ height: highlight ? "100%" : "300" }}
                    />
                </Box>
                {highlight ?
                    <Typography
                        variant='h5'
                        color={theme && theme.txtPrim ? theme.txtPrim : 'text.primary'}
                        sx={styles.highlightTitle}
                    >
                        {blogData.title}
                    </Typography>
                    :
                    <>
                        <CardContent>
                            <Typography
                                variant='h5'
                                color={theme && theme.txtPrim ? theme.txtPrim : 'text.primary'}
                            >
                                {blogData.title}
                            </Typography>
                            <Typography
                                gutterBottom
                                variant='body2'
                                color={theme && theme.txtSec ? theme.txtSec : 'text.secondary'}
                            >
                                {dateFormat(new Date(blogData.date), 'words')}
                            </Typography>
                            {withDesc ?
                                <Typography
                                    variant='body1'
                                    color={theme && theme.txtPrim ? theme.txtPrim : 'text.primary'}
                                >
                                    {blogData.summary ? blogData.summary.substr(0, 150) : ''}
                                </Typography> : null
                            }
                        </CardContent>
                        <Box sx={styles.overflowHider} />
                    </>
                }
            </Card>
        </a>
    )
}

export default BlogCard;