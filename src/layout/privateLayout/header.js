import React, {useState} from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AppsIcon from "@material-ui/icons/Apps";
// import { Scrollbars } from "react-custom-scrollbars";
import { Paper, Box, Typography, Menu, MenuItem } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from '../../theme/light'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
} from "@material-ui/core";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import SettingsIcon from "@material-ui/icons/Settings";
import logo from '../../theme/assets/images/inner-logo.png';
import smallLogo from '../../theme/assets/images/small-logo.png';
import { useNavigate, Link } from "react-router-dom";

const AppHeader = (props) => {
  // const opneNavMenu = () => {
  //   document.body.classList.add('openMenu');
  // }
  // const closeNavMenu = () => {
  //   document.body.classList.remove('openMenu');
  // }
  const navigate = useNavigate();
  const [clicked, setClicked] = useState('');

  const openMenu = () => {
    clicked ? setClicked('') : setClicked('navMenuOpen navMenuClose');
    document.body.classList.remove('openMenu');
    console.log(window.location.pathname )
  };

  const closeMenu = () => {
    clicked ? setClicked('') : setClicked('navMenuOpen navMenuClose');
    document.body.classList.add('openMenu');
  };

  

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return <>
    <ThemeProvider theme={theme}>
      <Paper square className={ `sidebarNavMenu ${clicked && 'openNavMenu'}` }>
       
        <Box
          component="a"
          pl={1}
          pr={1}
          display="flex"
          color="text.hint"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"

          minHeight="70px"
        >
           <Box className="inner-logo"  textAlign="center" maxWidth="150px" mr={3}>
          <img src={logo} alt="img" className="login-logo" />
        </Box>
          <Box
            component="span"
            flexDirection="column"
            className="navMenu"
            textAlign="center"
            display="flex"
            alignItems="center"
            justifyContent="center"
            
          >
            <img src={smallLogo} alt="img" className="small-logo" />
          </Box>
          <Box
            component="span"
            flexDirection="column"
            className="openNavMenu"
            textAlign="center"
            display="flex"
            alignItems="center"
            justifyContent="center"
            onClick={openMenu}
            bgcolor="primary.menuCloseBg"
            color="text.primary"
          >
            <NavigateBeforeIcon color="inherit" />
          </Box>
          <Box
            component="span"
            flexDirection="column"
            className="closeMenu"
            textAlign="center"
            display="flex"
            alignItems="center"
            justifyContent="center"
            onClick={closeMenu}
            bgcolor="primary.menuCloseBg"
            color="text.primary"
          >
            <NavigateBeforeIcon color="inherit" />
          </Box>

        </Box>
        <Box
         button component={Link} to="/dashboard"
          p={1}
          display="flex"
          color="text.hint"
          alignItems="center"
          justifyContent="center"
          className={'/dashboard' === window.location.pathname ? 'navMenuActive navMenuList' : 'navMenuList'}
          

        >
          <Box
            component="span"
            className="navMenuIcon"
            textAlign="center"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={50}
          >
            <DashboardIcon color="text" />
          </Box>
          <Box component="span" color="text.primary" mt={2} className="menuTextList">
            <Typography variant="button" display="block" gutterBottom>
              Dashboard
            </Typography>
          </Box>
        </Box>
        <Box
           button component={Link} to="/leads"
          p={1}
          display="flex"
          color="text.hint"
          alignItems="center"
          justifyContent="center"
          className={'/leads' === window.location.pathname ? 'navMenuActive navMenuList' : 'navMenuList'}
        >
          <Box
            component="span"
            className="navMenuIcon"
            textAlign="center"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={50}
          >
            <DashboardIcon color="text" />
          </Box>
          <Box component="span" color="text.primary" mt={2} className="menuTextList">
            <Typography variant="button" display="block" gutterBottom>
              Lead
            </Typography>
          </Box>
        </Box>
        <Box
           button component={Link} to="/addlead"
          p={1}
          display="flex"
          color="text.hint"
          alignItems="center"
          justifyContent="center"
          className={'/addlead' === window.location.pathname ? 'navMenuActive navMenuList' : 'navMenuList'}
        >
          <Box
            component="span"
            className="navMenuIcon"
            textAlign="center"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={50}
          >
            <DashboardIcon color="text" />
          </Box>
          <Box component="span" color="text.primary" mt={2} className="menuTextList">
            <Typography variant="button" display="block" gutterBottom>
            Add lead
            </Typography>
          </Box>
        </Box>
        <Box
           button component={Link} to="/addUser"
          p={1}
          display="flex"
          color="text.hint"
          alignItems="center"
          justifyContent="center"
          className={'/addUser' === window.location.pathname ? 'navMenuActive navMenuList' : 'navMenuList'}
        >
          <Box
            component="span"
            className="navMenuIcon"
            textAlign="center"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={50}
          >
            <DashboardIcon color="text" />
          </Box>
          <Box component="span" color="text.primary" mt={2} className="menuTextList">
            <Typography variant="button" display="block" gutterBottom>
            Add User
            </Typography>
          </Box>
        </Box>
        <Box
           button component={Link} to="/branch"
          p={1}
          display="flex"
          color="text.hint"
          alignItems="center"
          justifyContent="center"
          className={'/branch' === window.location.pathname ? 'navMenuActive navMenuList' : 'navMenuList'}
        >
          <Box
            component="span"
            className="navMenuIcon"
            textAlign="center"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={50}
          >
            <DashboardIcon color="text" />
          </Box>
          <Box component="span" color="text.primary" mt={2} className="menuTextList">
            <Typography variant="button" display="block" gutterBottom>
            Branch
            </Typography>
          </Box>
        </Box>
      

      </Paper>
      <div className="appHeader">
        <AppBar position="static" color="inherit">
          <Toolbar>


            <Box display="flex" alignItems="center" ml="auto">

              <IconButton className="headerRightIcons">
                <SettingsIcon style={{ fontSize: 24 }} />
              </IconButton>


              <Box className="badgeStatus" width="40px" height="40px" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://placeimg.com/40/40/people/1"
                  edge="end"
                  style={{ fontSize: 24 }}
                  aria-label="account of current user"
                  aria-haspopup="true"
                  className="headerRightIcons"
                  color="primary"
                >
                  C
                </Avatar>
                <span className="status"></span>
              </Box>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className="dropdown-menu"
              >
                <MenuItem onClick={handleClose}>
                  <Box component="span" color="grey.50" mr={1}>
                    <ExitToAppIcon color="inherit" />
                  </Box>
                  Logout
                </MenuItem>

              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  </>;
};
export default AppHeader;
