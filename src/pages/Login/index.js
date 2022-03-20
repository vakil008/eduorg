import * as React from "react";
import {
  Link,
  Typography,
  Box,
  Paper,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button
} from '@material-ui/core';
import logo from '../../theme/assets/images/logo.png';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from '../../theme/light'


export default function Login() {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const preventDefault = (event) => event.preventDefault();
  return (
    <ThemeProvider theme={theme}>
      <Paper className="register-page" elevation={0}>
        <Box bgcolor="primary.white">
          <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" className="outer-container">
            <Box className="register-container" display="flex" justifyContent="center" flexDirection="column">
              <Box className="logo" mb={2} textAlign="center" maxWidth="250px" mx="auto">
                <img src={logo} alt="img" className="login-logo" />
              </Box>
              <Box color="text.primary" mb={2.7} textAlign="center">
                <Typography variant="h6" gutterBottom color="inherit">
                  Please fill the fields below
                </Typography>
              </Box>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField type="email" label="Email Address" variant="outlined" className="custom-textfield" />
                </Grid>
                <Grid item xs={12}>
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={values.showPassword ? 'text' : 'password'}
                      value={values.password}
                      onChange={handleChange('password')}
                      className="custom-textfield"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" />}
                          </IconButton>
                        </InputAdornment>
                      }
                      labelWidth={70}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Box mt={3} mb={2.5}>
                <Button variant="contained" color="primary" disableElevation size="large" className="custom-button" fullWidth={true}>
                Login
                </Button>
              </Box>
              <Box color="text.primary" textAlign="center">
                <Typography variant="body1" gutterBottom>
                  Create a new account?
                  <Box component="span" ml={1}>
                    <Link href="#" className="font-weight-bold policy-lick" underline="always" onClick={preventDefault} color="inherit">
                      Register
                    </Link>
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}
