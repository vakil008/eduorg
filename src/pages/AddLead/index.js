import 'date-fns';
import React from "react";
import {
  Paper, Box, Typography, Divider, Grid, TextField,
  FormControlLabel, Select, InputLabel, FormControl, MenuItem, RadioGroup, Radio,
  Button
} from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from '../../theme/light';
import AddCircleIcon from '@material-ui/icons/AddCircle';


export default function AddLead() {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [age, setAge] = React.useState('');
  const [branch, setBranch] = React.useState('');

  const handleSelectChange = (event) => {
    setAge(event.target.value);
  };
  const handleBranchChange = (event) => {
    setBranch(event.target.value);
  };

  const [value, setValue] = React.useState('female');

  const handleWorkChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
    <Box className="container" p={2.5} bgcolor="primary.lightBgContainer">
      <Paper className="content lead-page" >
        <Box className="page-heading" mb={3}>
          <Box color="text.secondary" pt={3} pr={2.7} pb={1.8} pl={3}>
            <Typography variant="h6" gutterBottom color="inherit">
              Lead Form
            </Typography>
          </Box>
          <Divider />
        </Box>

        <Box className="lead-form" px={3} pb={3}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <TextField type="text" label="First Name" variant="outlined" className="custom-textfield" />
            </Grid>
            <Grid item xs={3}>
              <TextField type="text" label="Last Name" variant="outlined" className="custom-textfield" />
            </Grid>
            <Grid item xs={3}>
              <MuiPickersUtilsProvider utils={DateFnsUtils} >
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date Of Birth"
                  value={selectedDate}
                  onChange={handleDateChange}
                  className="custom-datepicker"
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={3}>
              <TextField type="text" label="Email Address" variant="outlined" className="custom-textfield" />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <TextField type="number" label="Mobile Number" variant="outlined" className="custom-textfield" />
            </Grid>
            <Grid item xs={3}>
              <TextField type="text" label="Address" variant="outlined" className="custom-textfield" />
            </Grid>
            <Grid item xs={3}>
              <TextField type="text" label="Remarks" variant="outlined" className="custom-textfield" />
            </Grid>
            <Grid item xs={3} className='work-experience'>
              <Box color="text.secondary" >
                <Typography variant="subtitle2" gutterBottom color="inherit">
                  Work Experience
                </Typography>
              </Box>

              <Box display="flex">
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleWorkChange}>
                  <FormControlLabel value="female" control={<Radio color="primary" />} label="Yes" />
                  <FormControlLabel value="male" control={<Radio color="primary" />} label="No" />
                </RadioGroup>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={3}>
              <FormControl variant="outlined" className="custom-textfield">
                <InputLabel id="demo-simple-select-outlined-label">Work Duration</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age}
                  onChange={handleSelectChange}
                  label="workduration"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <TextField type="text" label="Passport Number" variant="outlined" className="custom-textfield" />
            </Grid>
            <Grid item xs={3}>
              <FormControl variant="outlined" className="custom-textfield">
                <InputLabel id="demo-simple-select-outlined-label">Branch</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={branch}
                  onChange={handleBranchChange}
                  label="Branch"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3} className='work-experience'>
              <Box color="text.secondary" >
                <Typography variant="subtitle2" gutterBottom color="inherit">
                  Marital Status
                </Typography>
              </Box>
              <Box display="flex">
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleWorkChange}>
                  <FormControlLabel value="female" control={<Radio color="primary" />} label="Yes" />
                  <FormControlLabel value="male" control={<Radio color="primary" />} label="No" />
                </RadioGroup>
              </Box>
            </Grid>
          </Grid>


          <Grid container spacing={3}>
            <Grid item xs={3}>
              <TextField type="text" label="Listening Score" variant="outlined" className="custom-textfield" />
            </Grid>
            <Grid item xs={3}>
              <TextField type="text" label="Reading Score" variant="outlined" className="custom-textfield" />
            </Grid>
            <Grid item xs={3}>
              <TextField type="text" label="Writing Score" variant="outlined" className="custom-textfield" />
            </Grid>
            <Grid item xs={3}>
              <TextField type="text" label="Speaking Score" variant="outlined" className="custom-textfield" />
            </Grid>
          </Grid>

          <Box mt={1}></Box>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <FormControl variant="outlined" className="custom-textfield">
                <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={branch}
                  onChange={handleBranchChange}
                  label="Country"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl variant="outlined" className="custom-textfield">
                <InputLabel id="demo-simple-select-outlined-label">Lead Source</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={branch}
                  onChange={handleBranchChange}
                  label="Lead Source"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl variant="outlined" className="custom-textfield">
                <InputLabel id="demo-simple-select-outlined-label">Lead Status</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={branch}
                  onChange={handleBranchChange}
                  label="Lead Status"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>


          <Box color="text.secondary" mt={3} mb={2} className="spouse-heading" display="flex" alignItems="center">
            <Typography variant="subtitle1" gutterBottom color="inherit">
              Spouse
            </Typography>
            <Box ml="auto" className='cursor-pointer'>
              <AddCircleIcon color="primary" style={{ fontSize: 25 }} />
            </Box>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={3}>
              <TextField type="text" label="First Name" variant="outlined" className="custom-textfield" />
            </Grid>
            <Grid item xs={3}>
              <TextField type="text" label="Last Name" variant="outlined" className="custom-textfield" />
            </Grid>
            <Grid item xs={3}>
              <MuiPickersUtilsProvider utils={DateFnsUtils} >
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date Of Birth"
                  value={selectedDate}
                  onChange={handleDateChange}
                  className="custom-datepicker"
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={3}>
              <TextField type="text" label="Email Address" variant="outlined" className="custom-textfield" />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <TextField type="number" label="Mobile Number" variant="outlined" className="custom-textfield" />
            </Grid>
            <Grid item xs={3}>
              <TextField type="text" label="Address" variant="outlined" className="custom-textfield" />
            </Grid>
            <Grid item xs={3}>
              <TextField type="text" label="Remarks" variant="outlined" className="custom-textfield" />
            </Grid>
            <Grid item xs={3} className='work-experience'>
              <Box color="text.secondary" >
                <Typography variant="subtitle2" gutterBottom color="inherit">
                  Work Experience
                </Typography>
              </Box>

              <Box display="flex">
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleWorkChange}>
                  <FormControlLabel value="female" control={<Radio color="primary" />} label="Yes" />
                  <FormControlLabel value="male" control={<Radio color="primary" />} label="No" />
                </RadioGroup>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={3}>
              <FormControl variant="outlined" className="custom-textfield">
                <InputLabel id="demo-simple-select-outlined-label">Work Duration</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age}
                  onChange={handleSelectChange}
                  label="workduration"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <TextField type="text" label="Passport Number" variant="outlined" className="custom-textfield" />
            </Grid>


          </Grid>



          <Box color="text.secondary" mt={3} mb={2} className="spouse-heading" display="flex" alignItems="center">
            <Typography variant="subtitle1" gutterBottom color="inherit">
              Spouse Qualifications
            </Typography>
            <Box ml="auto" className='cursor-pointer'>
              <AddCircleIcon color="primary" style={{ fontSize: 25 }} />
            </Box>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={3}>
              <FormControl variant="outlined" className="custom-textfield">
                <InputLabel id="demo-simple-select-outlined-label">Qualification</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age}
                  onChange={handleSelectChange}
                  label="Qualification"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <MuiPickersUtilsProvider utils={DateFnsUtils} >
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Passing Year"
                  value={selectedDate}
                  onChange={handleDateChange}
                  className="custom-datepicker"
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>

            <Grid item xs={3}>
              <TextField type="text" label="Percentage" variant="outlined" className="custom-textfield" />
            </Grid>
            <Grid item xs={3}>
              <TextField type="text" label="Description" variant="outlined" className="custom-textfield" />
            </Grid>

          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={3}>
              <FormControl variant="outlined" className="custom-textfield">
                <InputLabel id="demo-simple-select-outlined-label">University</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age}
                  onChange={handleSelectChange}
                  label="University"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>

          </Grid>




          <Box color="text.secondary" mt={3} mb={2} className="spouse-heading" display="flex" alignItems="center">
            <Typography variant="subtitle1" gutterBottom color="inherit">
              User Qualifications
            </Typography>
            <Box ml="auto" className='cursor-pointer'>
              <AddCircleIcon color="primary" style={{ fontSize: 25 }} />
            </Box>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={3}>
              <FormControl variant="outlined" className="custom-textfield">
                <InputLabel id="demo-simple-select-outlined-label">Qualification</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age}
                  onChange={handleSelectChange}
                  label="Qualification"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <MuiPickersUtilsProvider utils={DateFnsUtils} >
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Passing Year"
                  value={selectedDate}
                  onChange={handleDateChange}
                  className="custom-datepicker"
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>

            <Grid item xs={3}>
              <TextField type="text" label="Percentage" variant="outlined" className="custom-textfield" />
            </Grid>
            <Grid item xs={3}>
              <TextField type="text" label="Description" variant="outlined" className="custom-textfield" />
            </Grid>

          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={3}>
              <FormControl variant="outlined" className="custom-textfield">
                <InputLabel id="demo-simple-select-outlined-label">University</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age}
                  onChange={handleSelectChange}
                  label="University"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>

          </Grid>

          <Box color="text.secondary" mt={3} mb={2} className="spouse-heading" display="flex" alignItems="center">
            <Typography variant="subtitle1" gutterBottom color="inherit">
              Create User Visa
            </Typography>
            <Box ml="auto" className='cursor-pointer'>
              <AddCircleIcon color="primary" style={{ fontSize: 25 }} />
            </Box>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={3}>
              <FormControl variant="outlined" className="custom-textfield">
                <InputLabel id="demo-simple-select-outlined-label">Visa Type</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age}
                  onChange={handleSelectChange}
                  label="Visa Type"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl variant="outlined" className="custom-textfield">
                <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age}
                  onChange={handleSelectChange}
                  label="Country"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={3}>
              <TextField type="text" label="City" variant="outlined" className="custom-textfield" />
            </Grid>
            <Grid item xs={3}>
              <TextField type="text" label="Reason" variant="outlined" className="custom-textfield" />
            </Grid>
            <Grid item xs={3}>
              <TextField type="text" label="remarks" variant="outlined" className="custom-textfield" />
            </Grid>

          </Grid>

          <Box mt={3}>
            <Button variant="contained" color="primary" disableElevation size="large" className="custom-button">
              Submit
            </Button>
          </Box>
        </Box>

      </Paper>
    </Box>
  </ThemeProvider>
  );
}
