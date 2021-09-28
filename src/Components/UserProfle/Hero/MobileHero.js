
import Acadamian from "../../../Assets/Icons/Acadamian.svg";
import MobileBackground from "../../../Assets/Icons/MobileBackground.svg";


import PreviousArrow from "../../../Assets/Icons/PreviousArrow.svg";
import { useMutation } from "@apollo/client";

// import About from "../About";

import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Paper,
  Typography,
  Tabs,
  Tab,
  CardHeader,
} from "@material-ui/core";

import {
  Img,
  userProfileStyles,
  StyledBadge,
  
} from "../../../MaterialUi/UserProfile";
import { Stack } from "@mui/material";
import About from "../About";
import Articles from "../Articles";
import { useState, useEffect } from "react";
import Posts from "../Posts";
import Interests from "./Intrests";
import FollowDetails from "./followDetails";
import { FOLLOW } from "../../../GraphQL/Mutations";

const MobileHero = ({
  userData,
  department,
  institution,
  country,
  followership,
  interests,
}) => {
  const { firstname, lastname, role, numberOfConnections } = userData;
  const { numberOfFollowers, numberOfFollowing } = followership;
  const [follow, { error, data }] = useMutation(FOLLOW);
  const [followed, setFollowed] = useState("");
  const classes = userProfileStyles();
  const [value, setValue] = useState(0);
  const handleTabs = (e, val) => {
    setValue(val);
  };

  const handleFollow = (e) => {
    e.preventDefault();
    (async () => {
      const a = await follow({
        variables: {
          following: "60eeb6c09446750021736263",
          // follower: "60eeb6c09446750021836264",
          follower: "60eeb6c09446750021736263",
          // 2262007315 zenith
          unFollow: false,
        },
      });

      console.log(a, ">>>>>>>");
      setFollowed(a.data.follow.description);

      if (!a) {
        console.log("=====>", error);
      }
    })();
  };

  useEffect(() => {
    setFollowed("follow");
  }, [follow]);

  console.log("=====>", data);

  return (
    <>
      <Container
        // container
        style={{ padding: "0", margin: "0" }}
      >
        <Paper
          className={classes.mobileStickyContainer}
          style={{
            // p: 2, margin: "auto", maxWidth: 500, flexGrow: 1,
            width:"100%",
            backgroundImage: `url(${MobileBackground})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left top",
            // padding: "0",
            // margin: "0",
            // border: "1px solid black",
          }}
        >
          <Grid spacing={2} className={classes.hero} container direction="row">
            <Grid item>
              <img src={PreviousArrow} alt="back" />
            </Grid>
            <Grid item>{firstname}'s Profile</Grid>
          </Grid>

          <Box container className={classes.heroBackground}>
            <Grid container spacing={4} className={classes.hero}>
              <Stack
                direction="row"
                spacing={2}
                justifyContent="space-evenly"
              
                className={classes.paddingLeft2}
              >
                <StyledBadge
                  component="span"
                  overlap="rectangle"
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  variant="dot"
                  style={{
                    width: "128px",
                    height: "128px",
                  }}
                >
                  <Img
                    alt={firstname}
                    src="https://res.cloudinary.com/seeautos/image/upload/v1628133133/sample.jpg"
                  />
                </StyledBadge>

                <span>
                  {" "}
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="div"
                    style={{ paddingTop: "3%" }}
                    className={classes.heroHeader}
                  >
                    {firstname} {lastname}
                  </Typography>
                  <CardHeader
                    className={classes.typographyHeader}
                    style={{ padding: "0" }}
                    avatar={
                      <Avatar
                        variant="square"
                        src={Acadamian}
                        style={{ width: "24px", height: "19.69px" }}
                      >
                        {Acadamian}
                      </Avatar>
                    }
                    title={role ? role.toLowerCase() : ""}
                  />
                  <Typography
                    // component="div"
                    className={classes.typography}
                    style={{ paddingTop: "3%", paddingBottom: "3%" }}
                  >
                    {department.subject}
                  </Typography>
                  <Typography className={classes.typography}>
                    {institution.name}, {country.name}
                  </Typography>{" "}
                </span>
              </Stack>

              <Grid
                item
                // xs={12}
                alignItems="stretch"
                sm={12}
                // style={{ padding: "0" }}
                style={{
                  padding: "0",
                  width: "100%",
                }}
              >
                <Grid
                  item
                  xs
                  container
                  direction="row"
                  alignItems="stretch"
                  spacing={2}
                  style={{
                    height: "100%",
                    margin: "0",
                    padding: "0",
                  }}
                >
                  <Grid item xs style={{ padding: "0" }}>
                    <Grid container wrap="nowrap" spacing={3}>
                      <Grid item></Grid>
                      <Grid item xs>
                        <Interests interests={interests} />

                        <FollowDetails
                          numberOfFollowers={numberOfFollowers}
                          numberOfFollowing={numberOfFollowing}
                          numberOfConnections={numberOfConnections}
                        />

                        <Box className={classes.item}>
                          <Stack spacing={3} direction="row">
                            <Button
                              className={classes.mobileButton}
                              size="large"
                              color="secondary"
                              variant="contained"
                              onClick={handleFollow}
                            >
                              {followed}
                            </Button>
                            <Button
                              className={classes.mobileButton2}
                              color="secondary"
                              size="large"
                              variant="outlined"
                            >
                              Message
                            </Button>
                          </Stack>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Tabs
              value={value}
              onChange={handleTabs}
              textColor="secondary"
              indicatorColor="secondary"
              className={classes.item2}
            >
              <Tab label="About" className={classes.tabs} />
              <Tab label="Articles" className={classes.tabs} />
              <Tab label="Posts" className={classes.tabs} />
            </Tabs>
          </Box>
        </Paper>
        <Card
          style={{
            marginTop: 15,
            marginLeft: 30,
            marginRight: 30,
            borderRadius: "16px",
            padding: "0",
          }}
        >
          <TabPanel value={value} index={0}>
            <About />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Articles />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Posts />
          </TabPanel>
        </Card>
      </Container>
    </>
  );
};

const TabPanel = (props) => {
  const { children, value, index } = props;
  return <>{value === index && <div>{children}</div>}</>;
};

export default MobileHero;
