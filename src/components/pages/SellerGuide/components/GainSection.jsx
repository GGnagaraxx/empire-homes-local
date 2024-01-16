import React from "react";
import { Stack, Typography } from "@mui/material";
import Bold from "../../../../common/components/Bold";

const styles = {
    stack: {
        px: 3
    }
}

function GainSection() {
    return (
        <>
            <Typography gutterBottom variant='h5'>
                <Bold>What You'll Gain</Bold>
            </Typography>
            <Stack spacing={2} sx={styles.stack}>
                <Typography variant='body1'>
                    Labore magna voluptate laboris officia. Eu nisi eu culpa fugiat qui sint ea enim.
                    Esse do adipisicing labore eiusmod adipisicing proident
                    Lorem consectetur aute occaecat Lorem incididunt duis.
                    Ipsum non ad ullamco commodo et ipsum veniam. Fugiat aliqua
                    consectetur esse minim labore labore reprehenderit id consectetur laboris.
                    Esse tempor in aute voluptate eu nostrud irure veniam est amet commodo commodo duis in.
                </Typography>

                <Typography variant='h6'>
                    <Bold>Incentives</Bold>
                </Typography>

                <Typography variant='body1'>
                    Labore magna voluptate laboris officia. Eu nisi eu culpa fugiat qui sint ea enim.
                    Esse do adipisicing labore eiusmod adipisicing proident
                    Lorem consectetur aute occaecat Lorem incididunt duis.
                    Ipsum non ad ullamco commodo et ipsum veniam.
                </Typography>

                <Typography variant='h6'>
                    <Bold>Certificate</Bold>
                </Typography>

                <Typography variant='body1'>
                    Labore magna voluptate laboris officia. Eu nisi eu culpa fugiat qui sint ea enim.
                    Esse do adipisicing labore eiusmod adipisicing proident
                    Lorem consectetur aute occaecat Lorem incididunt duis.
                    Ipsum non ad ullamco commodo et ipsum veniam.
                </Typography>

                <Typography variant='h6'>
                    <Bold>Official Employment</Bold>
                </Typography>

                <Typography variant='body1'>
                    Labore magna voluptate laboris officia. Eu nisi eu culpa fugiat qui sint ea enim.
                    Esse do adipisicing labore eiusmod adipisicing proident
                    Lorem consectetur aute occaecat Lorem incididunt duis.
                </Typography>
            </Stack>
        </>
    );
}

export default GainSection;