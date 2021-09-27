import {useState} from 'react';
import {AppBar,  Avatar,  Button,  IconButton,  InputBase, Toolbar, Typography} from '@material-ui/core';
import { useStyles } from "../../MaterialUi/UseStyles";
import Logo from "../../Assets/Icons/Logo.svg";
import {  KeyboardArrowDown, Search, Cancel } from '@material-ui/icons';
import Union from "../../Assets/Icons/Union.svg";
import Notification from "../../Assets/Icons/Notification.svg";
import CreateNew from "../../Assets/Icons/CreateNew.svg";


const Navbar = () => {
     const [open, setOpen] = useState(false)
     const classes = useStyles({open});

  return (
    <>
      <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>
          <div >
            
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 1 }}
            >
            <img src={Logo}  alt="Unizonn logo" className={classes.logo} />

            </IconButton>
            <Typography variant="h6" component="span" className={classes.logoText}  >
              Unizonn
            </Typography>
          </div>
          <div className={classes.search}>
          <Cancel className={classes.cancel} onClick={()=>{setOpen(false)}}/>
            <InputBase placeholder="Search Unizonn" className={classes.input} />
            <Search className={classes.bold} />
            
          </div>
          <div className={classes.searchButton}>
            <Search className={classes.bold} onClick={()=>{open===false?setOpen(true):setOpen(false)}}/>
          </div>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.appbarbutton}
            startIcon={<img src={CreateNew} alt="Icon" />}
          >
            Create New...
          </Button>
         <div className={classes.icons}>
         <Button
            className={classes.searchButton}
            startIcon={<img src={CreateNew} alt="Icon" />}
          >
          </Button>
          </div>
          <div className={classes.icons}>
           
            <img
              src={Notification}
              alt="notification"
              className="navbar-brand-img"
            />
          </div>
          <div className={classes.icons}>
            <img src={Union} className="navbar-brand-img" alt="Union" />
          </div>
          <div className={classes.icons}>
            <Avatar
              alt="H"
              src="https://res.cloudinary.com/seeautos/image/upload/v1628133133/sample.jpg"
            />
            <KeyboardArrowDown color="secondary" />
          </div>
        </Toolbar>
      </AppBar>
      
    </>
  );
};

export default Navbar;
