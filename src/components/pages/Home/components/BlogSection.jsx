import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Grid } from "@mui/material";
import SectionHeader from "../../../../common/components/SectionHeader";
import BlogCard from "../../../../common/components/cards/BlogCard";
import { partitionList, sortListByDate } from "../../../../common/functions/listFunctions";
import { useGetBlogListQuery } from "../../../../common/redux/apiSlices/blogApiSlice";
import { blogData as blogs } from "../../../../utils/sampleData";

const styles = {
    spinner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

function BlogSection() {

    // const blogData = useGetBlogListQuery();
    const [blogMap, setBlogMap] = useState();
    const blogData = blogs;

    useEffect(() => {
        if (blogData) {
            const data = [...blogData];
            let newList = sortListByDate(data, { date: 'desc' });
            newList = partitionList(newList, 7)[0];

            setBlogMap(initBlogMap(newList))
        }
    }, blogData)

    function initBlogMap(blogList) {
        return blogList.map((blog, index) => {
            return (
                <Grid
                    key={blog.id}
                    item
                    xs={12}
                    sm={index == 0 ? 12 : 6}
                    md={index == 0 ? 8 : 4}
                    lg={index == 0 ? 6 : 3}
                    sx={{
                        display: {
                            xs: index > 2 ? 'none' : 'flex',
                            md: index > 4 ? 'none' : 'flex',
                            lg: 'flex',
                        },
                        justifyContent: 'center',
                        alignItems: 'center',
                        p: 2
                    }}
                >
                    <BlogCard
                        blogData={blog}
                        withDesc
                        highlight={index == 0}
                    />
                </Grid>
            )
        })
    }

    return (
        <Box className="section" sx={{ p: 5 }}>
            <SectionHeader
                title="Blogs & Updates"
                subtitle="Read more about the latest updates of the project!"
            />
            <Grid container>
                {
                    blogMap ? blogMap :
                        <Grid item xs={12} sx={styles.spinner}>
                            <CircularProgress color='secondary' />
                        </Grid>
                }
            </Grid>
        </Box>
    )
}

export default BlogSection;