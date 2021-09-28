import { makeStyles} from "@material-ui/core/styles";
import { theme } from "../MaterialUi/theme";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { AvatarGroup } from "@mui/material";



export const userProfileStyles = makeStyles({
  root: {
    "& .MuiAvatarGroup-root": { borderRadius: "38px" },
  },
  grid: {
    paddingTop: theme.spacing(3),
  },

  gridItem: {
    marginRight: theme.spacing(4),
  },
  stack: {
    lineHeight: "-200px",
  },
  hero: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  item: {
    marginTop: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(4),
    },
  },
  item2: {
    marginTop: theme.spacing(2),
  },

  boxItem: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(1),
    },
  },
  connectionStackItem: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(1),
  },
  marginLeft11: {
    marginLeft: theme.spacing(12.5),
    // paddingLeft: theme.spacing(13),
  },
  paddingLeft2: {
    paddingLeft: theme.spacing(2),
    // paddingLeft: theme.spacing(13),
  },
  heroBackground: {
    marginRight: theme.spacing(2),

    // border: "1px solid #8D8D8D",
  },
  heroHeader: {
    fontWeight: 600,
    fontStyle: "normal",
    fontSize: "24px",
    color: "#000000",
    paddingBottom: "2%",
    marginTop: 0,
    lineHeight: "12px",
  },
  image: {
    borderRadius: "16px",
    border: "4px solid #FFFFFF",

    height: "100%",
  },
  typography: {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    color: "#8D8D8D",

    // lineHeight: "18px",
    // letter-spacing: 0em;
    // text-align: left;
  },
  typographyHeader: {
    fontSize: "14px",
    // fontStyle: "normal",
    fontWeight: 600,
    color: "#4F4F4F",
    textTransform: "capitalize",
    paddingBottom: "1%",

    // lineHeight: "30px",
    // letter-spacing: 0em;
    // text-align: left;
  },

  typographyConnections: {
    fontSize: "12px",
    lineHeight: "17.82px",
    paddingLeft: 8,
  },

  button: {
    borderRadius: "8px",
    textTransform: "capitalize",
    paddingLeft: "15%",
    paddingRight: "15%",
  },

  button2: {
    borderRadius: "8px",
    textTransform: "capitalize",
    paddingLeft: "15%",
    paddingRight: "15%",
  },

  mobileButton: {
    borderRadius: "8px",
    textTransform: "capitalize",
    paddingLeft: "15%",
    paddingRight: "15%",
  },

  mobileButton2: {
    borderRadius: "8px",
    textTransform: "capitalize",
    paddingLeft: "15%",
    paddingRight: "15%",
  },

  stackItem: {
    fontSize: "25px",
    paddingTop: "3%",
    fontWeight: 500,
    lineHeight: "31px",
  },

  stackItemLabel: {
    fontSize: "11px",
    fontWeight: 400,
    lineHeight: "31px",
    color: "#05C731",
  },

  tabs: {
    textTransform: "capitalize",
    fontSize: "18px",
  },

  stickyContainer: {
    position: "sticky",
    top: "10vh",
    zIndex: "1000",
    [theme.breakpoints.down("sm")]: {
      position: "sticky",
      top: 0,
      zIndex: "1000",
    },
  },

  mobilestickyContainer: {
    position: "sticky",
    top: "10vh",
    zIndex: "1000",
    [theme.breakpoints.down("sm")]: {
      position: "sticky",
      top: 0,
      zIndex: "1000",
    },
  },

  friendsToNetworkBox: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  mobileHero: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  heroLayout: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  mobileWebMenu: {
    // [theme.breakpoints.down("sm")]: {
    //   display: "flex",
    // },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  interests: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mobileInterests: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mobileCard: {},
});

export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    top: 0,
    right: 0,
    width: "12.73px",
    height: "12.74px",
    borderRadius: "50%",
    

    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: -100,
      // width: "100%",
      // height: "100%",
      borderRadius: "50%",
      //   animation: "ripple 1.2s infinite ease-in-out",
      //   border: "1px solid #8D8D8D",
      content: '""',
    //   border: "2px solid #FFFFFF",
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));



export const StyledAvatarGroup = styled(AvatarGroup)(({ theme }) => ({
  "& .MuiAvatarGroup-avatar": {
    // backgroundColor: "#44b700",
    // color: "#44b700",
    top: 0,
    right: 0,
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    fontSize:"10px",

    
  },
}));



export const Img = styled("img")({
  //   margin: "auto",
  //   display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  height: "100%",
  width: "100%",
  borderRadius: "16px",
  //   border: "4px solid #FFFFFF",
});