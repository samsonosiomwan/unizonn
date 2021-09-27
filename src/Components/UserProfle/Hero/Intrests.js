import { Box, Typography } from "@material-ui/core";
import { Stack } from "@mui/material";
import {
 
  userProfileStyles,
 
} from "../../../MaterialUi/UserProfile";

const Interests = ({ interests }) => {
  const classes = userProfileStyles();

  return (
    <>
      <Box className={classes.boxItem} >
        <Typography
          style={{
            fontSize: "14px",
            fontWeight: 600,
            // lineHeight: "40px",
          }}
        >
          Interests
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          // style={{ marginTop: "-10px" }}
        >
          <Typography
            className={classes.stackItemLabel}
            style={{ lineHeight: "1em" }}
          >
            {interests == null ? "Not Available" : interests.name}
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default Interests;
