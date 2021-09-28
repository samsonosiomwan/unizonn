import {  CardContent } from "@material-ui/core";
// import {
//   Img,
//   userProfileStyles,
//   StyledBadge,
// } from "../../MaterialUi/UserProfile";

const Articles = () => {
  // const classes = userProfileStyles()
  return (
    <>
      <CardContent style={{ boxShadow: "0px 0px 44px 0px #00000014" }}>
        <small>Not Articles written yet</small>
      </CardContent>
      {/* <Card>
        <CardHeader
          avatar={
            <StyledBadge
              component="span"
              overlap="rectangle"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              variant="dot"
              style={{
                width: "40.51px",
                height: "37.65px",
                borderRadius: "8px",
              }}
            >
              <Img
                // alt={firstname}
                src="https://res.cloudinary.com/seeautos/image/upload/v1628133133/sample.jpg"
              />
            </StyledBadge>
          }
          action={
            <IconButton
              aria-label="settings"
              style={{
                fontSize: "14px",
              }}
            >
              30 mins ago
            </IconButton>
          }
          title="Richard Ozoemene"
          subheader="Computer Science, Enugu"
        />
        <CardMedia 
        component="img"
        height=""
        image="https://res.cloudinary.com/seeautos/image/upload/v1628133133/sample.jpg" />
        <CardContent></CardContent>
      </Card> */}
    </>
  );
};

export default Articles;
