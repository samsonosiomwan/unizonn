import { makeStyles, alpha } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import { theme } from "../MaterialUi/theme";

export const useStyles = makeStyles({
 
  toolbar: {
    display: "flex",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  logo: {
    paddingRight: theme.spacing(2),
  },
  logoText: {
    fontWeight: 700,
    color: grey[600],
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  bold: {
    fontWeight: 700,
    color: grey[600],
  },

  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.primary.dark, 0.15),
    "&:hover": {
      border: "0.5px solid green",
    },
    borderRadius: "8px",
    border: "1px solid #CBF8DE",
    width: "35%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "100%",
    },
  },

  searchButton: {
    display: (props) => (props.open ? "none" : "flex"),

    [theme.breakpoints.up("md")]: {
      display: (props) => (props.open ? "flex" : "none"),
    },
  },

  input: {
    marginLeft: theme.spacing(2),
    size: "50",
    width: "91%",
  },
  cancel: {
    //  fontWeight: 700,
    color: alpha(theme.palette.primary.dark, 1),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  icons: {
    alignItems: "center",
    marginLeft: theme.spacing(1),

    display: (props) => (props.open ? "none" : "flex"),
  },

  appbarbutton: {
    borderRadius: "8px",
    paddingRight: theme.spacing(5),
    textTransform: "capitalize",

    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "none" : "none"),
    },
  },

  button: {
    borderRadius: "8px",
    textTransform: "capitalize",
  },
});


