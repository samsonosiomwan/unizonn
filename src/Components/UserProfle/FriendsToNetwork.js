import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,

  Typography,
} from "@material-ui/core";
import {  Stack } from "@mui/material";
import {
  userProfileStyles,
  StyledAvatarGroup,
} from "../../MaterialUi/UserProfile";
import GraduationCap from "../../Assets/Icons/GraduationCap.svg";
import Close  from "../../Assets/Icons/Close.svg";

const FriendsToNetwork = () => {
 const classes = userProfileStyles();
  return (
    <>
      <Card
        style={{
          display: "flex",
          padding: "0",

          marginBottom: "1%",
        }}
      >
        <CardMedia
          component="img"
          style={{ width: "80px", padding: "0", margin: "0" }}
          image="https://res.cloudinary.com/seeautos/image/upload/v1628133133/sample.jpg"
          alt="connection"
        />
        <Box
          style={{
            display: "flex",
            margin: "0",
            padding: "0",
            flexDirection: "column",
          }}
        >
          <CardContent
            style={{
              flex: "1 0 auto",
              padding: "0",
              margin: "0",

              paddingLeft: "10px",
            }}
          >
            <Typography
              component="span"
              variant=""
              style={{
                fontSize: "12px",

                fontWeight: "700",
                lineHeight: "18px",

                // border: "2px solid #8D8D8D",
                padding: "0",

                color: "#4F4F4F",
              }}
            >
              Samson Osiomwan
            </Typography>
            <Typography
              component="span"
              className={classes.marginLeft11}
              style={{
                padding: "0",
                // marginLeft:"5",
                color: "#4F4F4F",
              }}
            >
              <img alt=".." src={Close} />
            </Typography>

            <Grid container wrap="nowrap" spacing={3}>
              <Grid item>
                <Avatar
                  variant="square"
                  src={GraduationCap}
                  style={{ width: "16px", height: "16px" }}
                >
                  {GraduationCap}
                </Avatar>
              </Grid>
              <Grid item xs>
                <Typography
                  style={{
                    fontSize: "11px",

                    fontWeight: 400,
                    lineHeight: "13px",
                    letterSpacing: "0em",
                  }}
                >
                  Computer Science <br /> University of Nigeria, Nsukka
                </Typography>
              </Grid>
            </Grid>
            <Box
              container
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                pl: 1,
                pb: 1,
                paddingTop: 5,
                paddingBottom: 8,
                border: "2px solid dark",
                // width: "16px",
              }}
            >
              <StyledAvatarGroup variant="circular" max={3}>
                <Avatar
                  variant="circular"
                  alt="Remy Sharp"
                  style={{ width: "16px", height: "16px" }}
                  src=""
                />
                <Avatar
                  variant="circular"
                  style={{ width: "16px", height: "16px" }}
                  alt="Travis Howard"
                  src=""
                />
                <Avatar
                  variant="circular"
                  alt=".."
                  style={{ width: "16px", height: "16px" }}
                  src=""
                />
                <Avatar
                  variant="circular"
                  alt="Agnes Walker"
                  style={{ width: "16px", height: "16px" }}
                  src=""
                />
                <Avatar
                  variant="circular"
                  alt="Trevor Henderson"
                  // style={{ width: "16px", height: "16px" }}
                  src=""
                />
              </StyledAvatarGroup>

              <Typography className={classes.typographyConnections}>
                Connections
              </Typography>
              <Stack
                className={classes.connectionStackItem}
                style={{
                  padding: "0",
                }}
              >
                <Button
                  style={{ paddingTop: "0", paddingBottom: "0" }}
                  className={classes.button}
                  color="secondary"
                  size="small"
                  variant="outlined"
                >
                  Follow
                </Button>
              </Stack>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default FriendsToNetwork;
