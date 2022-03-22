import "date-fns";
import React from "react";
import {
  Paper,
  Box,
  Typography,
  Divider,
  Grid,
  TextField,
  FormControlLabel,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
  RadioGroup,
  Radio,
  Button,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../../theme/light";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import moment from "moment";
import UserService from "../../services/user.service";

class AddLead extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date(),
      age: "",
      branch: "",
      gender: "female",
      overAllScore: "9",
      speakingScore: "9",
      writingScore: "9",
      readingScore: "9",
      listeningScore: "9",
      dateOfBirth: "",
      date: new Date(),
      sDate: new Date(),
      open: false,
      workExpId: "",
      isSelected: false,
      firstName: "abhijeet",
      lastName: "singh",
      dob: "",
      email: "abhi@gmail.com",
      phone: "9999999999",
      address: "qweqweq",
      remarks: "qweqweqwe",
      workDuration: "9",
      passportNo: "qweqweq",
      maritalStatus: "yes",
      allCountries: [],
      countryId: "",
      allLeads: [],
      leadId: "1",
      allVisaTypes: [],
      allQualifications: [],
      qualificationInputs: [
        {
          date: new Date(),
          qualificationId: "1",
          passingYear: "2022",
          percentage: "60",
          uniBoard: "asd",
          description: "sadasd",
        },
      ],
      visaInfos: [
        {
          visaCountry: "1",
          visaUniversity: "",
          visaCity: "no",
          visaReason: "asdas",
          visaRemarks: "asdasd",
          visaId: "1",
        },
      ],
      visaRefusaleses: [
        {
          refVisaID: "1",
          refCountry: "yes",
          refReason: "asdasd",
          refRemarks: "asdasdas",
        },
      ],
      spouseQualifications: [
        {
          date: new Date(),
          qualificationId: "1",
          passingYear: "2022",
          percentage: "60",
          description: "dasdas",
          uniBoard: "asd",
        },
      ],
      sopen: false,
      spouseEmail: "asjkdaj@gmail.com",
      spouseFirstName: "aasd",
      spouseLastName: "asdas",
      spouseDob: "",
      spouseMobileNumber: "1111111111",
      spouseAddress: "asdasd",
      spouseRemarks: "asdasda",
      spouseWorkexperience: "no",
      spouseWorkduration: "",
      spousePassportnumber: "asdasdasd",
    };
  }

  componentDidMount() {
    this.getAllQualifications();
    this.getAllLeadSource();
    this.getAllVisaTypes();
    this.getAllCountries();
  }

  addQuifications = () => {
    console.log("addQuifications");
    let qualificationInputs = [...this.state.qualificationInputs];
    const obj = {
      date: new Date(),
      qualificationId: "",
      passingYear: "",
      percentage: "",
      uniBoard: "",
      description: "",
    };
    if (qualificationInputs.length === 5) {
      console.log("you could not add more than 5 qualifications");
    } else {
      qualificationInputs.push(obj);
    }
    this.setState({
      qualificationInputs,
    });
  };

  removeQualifications = () => {
    let qualificationInputs = [...this.state.qualificationInputs];
    qualificationInputs.splice(qualificationInputs.length - 1);
    this.setState({
      qualificationInputs,
    });
  };

  addMoreVisaInfos = () => {
    let visaInfos = [...this.state.visaInfos];
    const obj = {
      visaType: "",
      visaCountry: "",
      visaUniversity: "",
      visaCity: "",
      visaReason: "",
      visaRemarks: "",
      visaId: "",
    };
    if (visaInfos.length === 5) {
      console.log("you could not add more than 5 qualifications");
    } else {
      visaInfos.push(obj);
    }
    this.setState({
      visaInfos,
    });
  };

  removeVisaInfos = () => {
    let visaInfos = [...this.state.visaInfos];
    visaInfos.splice(visaInfos.length - 1);
    this.setState({
      visaInfos,
    });
  };

  addSpouseQualifications = () => {
    let spouseQualifications = [...this.state.spouseQualifications];
    const obj = {
      date: new Date(),
      qualificationId: "",
      passingYear: "",
      percentage: "",
      description: "",
      uniBoard: "",
    };
    if (spouseQualifications.length === 5) {
      console.log("you could not add more than 5 qualifications");
    } else {
      spouseQualifications.push(obj);
    }
    this.setState({
      spouseQualifications,
    });
  };

  removeSpouseQualifications = () => {
    let spouseQualifications = [...this.state.spouseQualifications];
    spouseQualifications.splice(spouseQualifications.length - 1);
    this.setState({
      spouseQualifications,
    });
  };

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  };

  handleSelectChange = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  handleBranchChange = (event) => {
    this.setState({
      branch: event.target.value,
    });
  };

  handleWorkChange = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };

  getAllQualifications = async () => {
    try {
      const response = await UserService.GetAllQualification();
      console.log("response of qualifications", response);

      const { data } = response;
      const { data: list, succeeded } = data;
      if (succeeded) {
        if (list && list.length) {
          this.setState({
            allQualifications: list,
          });
        }
      }
    } catch (error) {
      console.log("status error", error);
    }
  };

  getAllCountries = async () => {
    try {
      const response = await UserService.GetAllCountry();
      console.log("response of qualifications", response);

      const { data } = response;
      const { data: list, succeeded } = data;
      if (succeeded) {
        if (list && list.length) {
          this.setState({
            allCountries: list,
          });
        }
      }
    } catch (error) {
      console.log("status error", error);
    }
  };

  getAllVisaTypes = async () => {
    try {
      const response = await UserService.GetAllVisaTypes();
      console.log("response of qualifications", response);

      const { data } = response;
      const { data: list, succeeded } = data;
      if (succeeded) {
        if (list && list.length) {
          this.setState({
            allVisaTypes: list,
          });
        }
      }
    } catch (error) {
      console.log("status error", error);
    }
  };

  getAllLeadSource = async () => {
    try {
      const response = await UserService.GetAllLeadSource();
      console.log("response of qualifications", response);

      const { data } = response;
      const { data: list, succeeded } = data;
      if (succeeded) {
        if (list && list.length) {
          this.setState({
            allLeads: list,
          });
        }
      }
    } catch (error) {
      console.log("status error", error);
    }
  };

  render() {
    const {
      selectedDate,
      age,
      branch,
      gender,
      qualificationInputs,
      allQualifications,
      spouseQualifications,
      allCountries,
      allLeads,
      allVisaTypes,
      countryId,
      leadId,
      visaInfos,
      visaId,
    } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Box className="container" p={2.5} bgcolor="primary.lightBgContainer">
          <Paper className="content lead-page">
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
                  <TextField
                    type="text"
                    label="First Name"
                    variant="outlined"
                    className="custom-textfield"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    label="Last Name"
                    variant="outlined"
                    className="custom-textfield"
                  />
                </Grid>
                <Grid item xs={3}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="dd-MM-yyyy"
                      autoOk
                      margin="normal"
                      id="date-picker-inline"
                      label="Date Of Birth"
                      value={selectedDate}
                      onChange={this.handleDateChange}
                      className="custom-datepicker"
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    label="Email Address"
                    variant="outlined"
                    className="custom-textfield"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <TextField
                    type="number"
                    label="Mobile Number"
                    variant="outlined"
                    className="custom-textfield"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    label="Address"
                    variant="outlined"
                    className="custom-textfield"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    label="Remarks"
                    variant="outlined"
                    className="custom-textfield"
                  />
                </Grid>
                <Grid item xs={3} className="work-experience">
                  <Box color="text.secondary">
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      color="inherit"
                    >
                      Work Experience
                    </Typography>
                  </Box>

                  <Box display="flex">
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={gender}
                      onChange={this.handleWorkChange}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio color="primary" />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio color="primary" />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <FormControl variant="outlined" className="custom-textfield">
                    <InputLabel id="demo-simple-select-outlined-label">
                      Work Duration
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={age}
                      onChange={this.handleSelectChange}
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
                  <TextField
                    type="text"
                    label="Passport Number"
                    variant="outlined"
                    className="custom-textfield"
                  />
                </Grid>
                <Grid item xs={3}>
                  <FormControl variant="outlined" className="custom-textfield">
                    <InputLabel id="demo-simple-select-outlined-label">
                      Branch
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={branch}
                      onChange={this.handleBranchChange}
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
                <Grid item xs={3} className="work-experience">
                  <Box color="text.secondary">
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      color="inherit"
                    >
                      Marital Status
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={gender}
                      onChange={this.handleWorkChange}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio color="primary" />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio color="primary" />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    label="Listening Score"
                    variant="outlined"
                    className="custom-textfield"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    label="Reading Score"
                    variant="outlined"
                    className="custom-textfield"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    label="Writing Score"
                    variant="outlined"
                    className="custom-textfield"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    label="Speaking Score"
                    variant="outlined"
                    className="custom-textfield"
                  />
                </Grid>
              </Grid>

              <Box mt={1}></Box>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <FormControl variant="outlined" className="custom-textfield">
                    <InputLabel id="demo-simple-select-outlined-label">
                      Country
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={countryId}
                      onChange={(event) => {
                        if (event.target.value) {
                          this.setState({
                            countryId: event.target.value,
                          });
                        } else {
                          this.setState({
                            countryId: "",
                          });
                        }
                      }}
                      label="Country"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {allCountries.map((data, index) => {
                        return (
                          <MenuItem key={index.toString()} value={data.id}>
                            {data.countryDescription}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={3}>
                  <FormControl variant="outlined" className="custom-textfield">
                    <InputLabel id="demo-simple-select-outlined-label">
                      Lead Source
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={leadId}
                      onChange={(event) => {
                        if (event.target.value) {
                          this.setState({
                            leadId: event.target.value,
                          });
                        } else {
                          this.setState({
                            leadId: "",
                          });
                        }
                      }}
                      label="Lead Source"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {allLeads.map((data, index) => {
                        return (
                          <MenuItem key={index.toString()} value={data.id}>
                            {data.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={3}>
                  <FormControl variant="outlined" className="custom-textfield">
                    <InputLabel id="demo-simple-select-outlined-label">
                      Lead Status
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={branch}
                      onChange={this.handleBranchChange}
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

              <Box
                color="text.secondary"
                mt={3}
                mb={2}
                className="spouse-heading"
                display="flex"
                alignItems="center"
              >
                <Typography variant="subtitle1" gutterBottom color="inherit">
                  Spouse
                </Typography>
                <Box ml="auto" className="cursor-pointer">
                  <AddCircleIcon color="primary" style={{ fontSize: 25 }} />
                </Box>
              </Box>

              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    label="First Name"
                    variant="outlined"
                    className="custom-textfield"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    label="Last Name"
                    variant="outlined"
                    className="custom-textfield"
                  />
                </Grid>
                <Grid item xs={3}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="dd-MM-yyyy"
                      autoOk
                      margin="normal"
                      id="date-picker-inline"
                      label="Date Of Birth"
                      value={selectedDate}
                      onChange={this.handleDateChange}
                      className="custom-datepicker"
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    label="Email Address"
                    variant="outlined"
                    className="custom-textfield"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <TextField
                    type="number"
                    label="Mobile Number"
                    variant="outlined"
                    className="custom-textfield"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    label="Address"
                    variant="outlined"
                    className="custom-textfield"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    label="Remarks"
                    variant="outlined"
                    className="custom-textfield"
                  />
                </Grid>
                <Grid item xs={3} className="work-experience">
                  <Box color="text.secondary">
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      color="inherit"
                    >
                      Work Experience
                    </Typography>
                  </Box>

                  <Box display="flex">
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={gender}
                      onChange={this.handleWorkChange}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio color="primary" />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio color="primary" />}
                        label="No"
                      />
                    </RadioGroup>
                  </Box>
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <FormControl variant="outlined" className="custom-textfield">
                    <InputLabel id="demo-simple-select-outlined-label">
                      Work Duration
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={age}
                      onChange={this.handleSelectChange}
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
                  <TextField
                    type="text"
                    label="Passport Number"
                    variant="outlined"
                    className="custom-textfield"
                  />
                </Grid>
              </Grid>

              <Box
                color="text.secondary"
                mt={3}
                mb={2}
                className="spouse-heading"
                display="flex"
                alignItems="center"
              >
                <Typography variant="subtitle1" gutterBottom color="inherit">
                  Spouse Qualifications
                </Typography>
                <Box
                  ml="auto"
                  onClick={this.addSpouseQualifications}
                  className="cursor-pointer"
                >
                  <AddCircleIcon color="primary" style={{ fontSize: 25 }} />
                </Box>
              </Box>
              {spouseQualifications.map((data, index) => {
                return (
                  <>
                    <Grid key={index.toString()} container spacing={3}>
                      <Grid item xs={3}>
                        <FormControl
                          variant="outlined"
                          className="custom-textfield"
                        >
                          <InputLabel id="demo-simple-select-outlined-label">
                            Qualification
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={
                              spouseQualifications[index]["qualificationId"]
                            }
                            onChange={(event) => {
                              console.log(event.target.value);
                              if (event.target.value) {
                                let spouseQualifications = [];
                                spouseQualifications = [
                                  ...this.state.spouseQualifications,
                                ];
                                spouseQualifications[index]["qualificationId"] =
                                  event.target.value;
                                this.setState({
                                  spouseQualifications,
                                });
                              }
                            }}
                            label="Qualification"
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            {allQualifications.map((data, index) => {
                              return (
                                <MenuItem
                                  key={index.toString()}
                                  value={data.id}
                                >
                                  {data.name}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={3}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd-MM-yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Passing Year"
                            autoOk
                            value={spouseQualifications[index]["date"]}
                            onChange={(date) => {
                              let spouseQualifications = [];
                              spouseQualifications = [
                                ...this.state.spouseQualifications,
                              ];
                              spouseQualifications[index]["date"] = date;
                              this.setState({
                                spouseQualifications,
                              });
                            }}
                            className="custom-datepicker"
                            KeyboardButtonProps={{
                              "aria-label": "change date",
                            }}
                          />
                        </MuiPickersUtilsProvider>
                      </Grid>

                      <Grid item xs={3}>
                        <TextField
                          type="text"
                          label="Percentage"
                          variant="outlined"
                          className="custom-textfield"
                          onChange={(value) => {
                            let spouseQualifications = [];
                            spouseQualifications = [
                              ...this.state.spouseQualifications,
                            ];
                            spouseQualifications[index]["percentage"] = value;
                            this.setState({
                              spouseQualifications,
                            });
                          }}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField
                          type="text"
                          label="Description"
                          variant="outlined"
                          className="custom-textfield"
                          onChange={(value) => {
                            let spouseQualifications = [];
                            spouseQualifications = [
                              ...this.state.spouseQualifications,
                            ];
                            spouseQualifications[index]["description"] = value;
                            this.setState({
                              spouseQualifications,
                            });
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                      <Grid item xs={3}>
                        <FormControl
                          variant="outlined"
                          className="custom-textfield"
                        >
                          <InputLabel id="demo-simple-select-outlined-label">
                            University
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={age}
                            onChange={this.handleSelectChange}
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
                  </>
                );
              })}

              <Box
                color="text.secondary"
                mt={3}
                mb={2}
                className="spouse-heading"
                display="flex"
                alignItems="center"
              >
                <Typography variant="subtitle1" gutterBottom color="inherit">
                  User Qualifications
                </Typography>
                <Box
                  ml="auto"
                  onClick={this.addQuifications}
                  className="cursor-pointer"
                >
                  <AddCircleIcon color="primary" style={{ fontSize: 25 }} />
                </Box>
              </Box>

              {qualificationInputs.map((data, index) => {
                return (
                  <>
                    <Grid key={index.toString()} container spacing={3}>
                      <Grid item xs={3}>
                        <FormControl
                          variant="outlined"
                          className="custom-textfield"
                        >
                          <InputLabel id="demo-simple-select-outlined-label">
                            Qualification
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={
                              qualificationInputs[index]["qualificationId"]
                            }
                            onChange={(event) => {
                              if (event.target.value) {
                                let qualificationInputs = [];
                                qualificationInputs = [
                                  ...this.state.qualificationInputs,
                                ];
                                qualificationInputs[index]["qualificationId"] =
                                  event.target.value;
                                this.setState({
                                  qualificationInputs,
                                });
                              }
                            }}
                            label="Qualification"
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            {allQualifications.map((data, index) => {
                              return (
                                <MenuItem
                                  key={index.toString()}
                                  value={data.id}
                                >
                                  {data.name}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={3}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd-MM-yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Passing Year"
                            autoOk
                            value={qualificationInputs[index]["date"]}
                            onChange={(date) => {
                              let qualificationInputs = [];
                              qualificationInputs = [
                                ...this.state.qualificationInputs,
                              ];
                              qualificationInputs[index]["date"] = date;
                              this.setState({
                                qualificationInputs,
                              });
                            }}
                            className="custom-datepicker"
                            KeyboardButtonProps={{
                              "aria-label": "change date",
                            }}
                          />
                        </MuiPickersUtilsProvider>
                      </Grid>

                      <Grid item xs={3}>
                        <TextField
                          type="text"
                          label="Percentage"
                          variant="outlined"
                          className="custom-textfield"
                          onChange={(value) => {
                            let qualificationInputs = [];
                            qualificationInputs = [
                              ...this.state.qualificationInputs,
                            ];
                            qualificationInputs[index]["percentage"] = value;
                            this.setState({
                              qualificationInputs,
                            });
                          }}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField
                          type="text"
                          label="Description"
                          variant="outlined"
                          className="custom-textfield"
                          onChange={(value) => {
                            let qualificationInputs = [];
                            qualificationInputs = [
                              ...this.state.qualificationInputs,
                            ];
                            qualificationInputs[index]["description"] = value;
                            this.setState({
                              qualificationInputs,
                            });
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                      <Grid item xs={3}>
                        <FormControl
                          variant="outlined"
                          className="custom-textfield"
                        >
                          <InputLabel id="demo-simple-select-outlined-label">
                            University
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={age}
                            onChange={this.handleSelectChange}
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
                  </>
                );
              })}
              <Box
                color="text.secondary"
                mt={3}
                mb={2}
                className="spouse-heading"
                display="flex"
                alignItems="center"
              >
                <Typography variant="subtitle1" gutterBottom color="inherit">
                  Create User Visa
                </Typography>
                <Box
                  ml="auto"
                  onClick={this.addMoreVisaInfos}
                  className="cursor-pointer"
                >
                  <AddCircleIcon color="primary" style={{ fontSize: 25 }} />
                </Box>
              </Box>
              {visaInfos.map((data, index) => {
                return (
                  <>
                    <Grid container spacing={3}>
                      <Grid item xs={3}>
                        <FormControl
                          variant="outlined"
                          className="custom-textfield"
                        >
                          <InputLabel id="demo-simple-select-outlined-label">
                            Visa Type
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={visaId}
                            onChange={this.handleSelectChange}
                            label="Visa Type"
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            {allVisaTypes.map((data, index) => {
                              return (
                                <MenuItem
                                  key={index.toString()}
                                  value={data.id}
                                >
                                  {data.name}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={3}>
                        <FormControl
                          variant="outlined"
                          className="custom-textfield"
                        >
                          <InputLabel id="demo-simple-select-outlined-label">
                            Country
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={age}
                            onChange={this.handleSelectChange}
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
                        <TextField
                          type="text"
                          label="City"
                          variant="outlined"
                          className="custom-textfield"
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField
                          type="text"
                          label="Reason"
                          variant="outlined"
                          className="custom-textfield"
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField
                          type="text"
                          label="remarks"
                          variant="outlined"
                          className="custom-textfield"
                        />
                      </Grid>
                    </Grid>
                  </>
                );
              })}

              <Box mt={3}>
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  size="large"
                  className="custom-button"
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Paper>
        </Box>
      </ThemeProvider>
    );
  }
}

export default AddLead;
