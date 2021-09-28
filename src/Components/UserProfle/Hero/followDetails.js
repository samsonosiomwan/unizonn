import { Grid} from "@material-ui/core";
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
      <Grid
        item
        style={{
          marginTop: "4%",
          width: "100%",
        }}
        sm={12}
      >
        <Stack direction="row" spacing={16} justifyContent="flext-start">
          <span className={classes.stackItem}>{numberOfFollowers}</span>
          <span className={classes.stackItem}>{numberOfFollowing}</span>
          <span className={classes.stackItem}>{numberOfConnections}</span>
        </Stack>
        <Stack direction="row" spacing={12}>
          <span className={classes.stackItemLabel}>followers</span>
          <span className={classes.stackItemLabel}>following</span>
          <span className={classes.stackItemLabel}>connection</span>
        </Stack>
      </Grid>
    </>
  );
};

export default FollowDetails;
