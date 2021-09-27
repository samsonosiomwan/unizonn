import { Box} from "@material-ui/core";
import { Stack } from "@mui/material";
import { userProfileStyles } from "../../../MaterialUi/UserProfile";

const FollowDetails = ({
  numberOfConnections,
  numberOfFollowers,
  numberOfFollowing,
}) => {
  const classes = userProfileStyles();

  return (
    <>
      <Box style={{ marginTop: "4%" }}>
        <Stack
          direction="row"
          spacing={9}
          justifyContent="flex-start"
          // alignItems="center"
        >
          <span className={classes.stackItem}>{numberOfFollowers}</span>
          <span className={classes.stackItem}>{numberOfFollowing}</span>
          <span className={classes.stackItem}>{numberOfConnections}</span>
        </Stack>
        <Stack direction="row" spacing={5}>
          <span className={classes.stackItemLabel}>followers</span>
          <span className={classes.stackItemLabel}>following</span>
          <span className={classes.stackItemLabel}>connection</span>
        </Stack>
      </Box>
    </>
  );
};

export default FollowDetails;
