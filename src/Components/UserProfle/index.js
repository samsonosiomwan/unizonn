import {useEffect, useState} from 'react';
import { useQuery} from "@apollo/client";
import { GET_USER } from "../../GraphQL/Queries";
import FriendsToNetwork from "./FriendsToNetwork";
import { Button, Grid, Typography } from "@material-ui/core"
import { userProfileStyles } from '../../MaterialUi/UserProfile';

import Hero from "./Hero";
import { Stack } from '@mui/material';
// import MobileWebMenu from './MobileWebMenu';





const UserProfile = () => {
const { loading, data} = useQuery(GET_USER);
const [userData, setUserData] = useState("");
const [department, setDepartment] = useState("");
const [institution, setInstitution] = useState("");
const [country, setCountry] = useState("");
const [followership, setFollowership] = useState("");
const [interests, setInterests] = useState("");
const classes = userProfileStyles();

useEffect(() => {
  // console.log("====>", data.getUser);
  if(data ){
   
    setUserData(data.getUser.payload);
    setDepartment(data.getUser.payload.department);
    setInstitution(data.getUser.payload.institution);
    setCountry(data.getUser.payload.country);
    setFollowership(data.getUser.payload.followership);
    setInterests(data.getUser.payload.interests);
  };
}, [loading,data]);
      // console.log("====userData==>", userData.interests)


  return (
    <>
      {loading ? (
        <div className="container py-10 px-10"> loading user .... </div>
      ) : (
        <>
          <Grid
            container
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            className={classes.grid}
          >
            <Grid item sm={12} md={7}>
              <Hero
                userData={userData}
                department={department}
                institution={institution}
                country={country}
                followership={followership}
                interests={interests}
              />
            </Grid>
            {/* <Grid item sm={10} md={7} className={classes.mobileWebMenu}>
              <MobileWebMenu />
            </Grid> */}

            <Grid item sm={3.5} className={classes.friendsToNetworkBox}>
              <Typography
                component="h1"
                style={{
                  color: "#8D8D8D",
                  fontSize: "18px",
                  fontWeight: 600,
                  marginBottom: "5%",
                }}
              >
                Friends to Network
              </Typography>

              <Stack>
                <FriendsToNetwork />
                <FriendsToNetwork />
                <FriendsToNetwork />
                <FriendsToNetwork />
              </Stack>
              <Stack
                // className={classes.connectionStackItem}
                style={{
                  padding: "0",
                  marginTop: 15,
                  // backgroundColor:"white"
                }}
              >
                <Button
                  style={{
                    paddingTop: "3%",
                    paddingBottom: "3%",
                    border: "1px solid #DADADA",
                    backgroundColor: "white",
                  }}
                  className={classes.button}
                  color="secondary"
                  size="large"
                  variant="outlined"
                >
                  See All Connections
                </Button>

                <span style={{ marginTop: "4%" }}>
                  <hr style={{ color: "#DADADA" }} />
                </span>
              </Stack>
              <Typography
                component="h1"
                style={{
                  color: "#8D8D8D",
                  fontSize: "18px",
                  fontWeight: 600,
                  marginBottom: "5%",
                }}
              >
                Catchup with Nearby Connections
              </Typography>

              <Stack>
                <FriendsToNetwork />
                <FriendsToNetwork />
              </Stack>
              <Stack
                // className={classes.connectionStackItem}
                style={{
                  padding: "0",
                  marginTop: 15,
                  // backgroundColor:"white"
                }}
              >
                <Button
                  style={{
                    paddingTop: "3%",
                    paddingBottom: "3%",
                    border: "1px solid #DADADA",
                    backgroundColor: "white",
                  }}
                  className={classes.button}
                  color="secondary"
                  size="large"
                  variant="outlined"
                >
                  See All Catch-Up
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default UserProfile;
