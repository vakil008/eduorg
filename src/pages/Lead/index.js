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
  Snackbar,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../../theme/light";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import moment from "moment";
import UserService from "../../services/user.service";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from "@material-ui/core/styles";

class Lead extends React.PureComponent {
  constructor(props) {
    super(props);
   
    this.state = {
      selectedDate: new Date(),
      leaddata:{
        firstName: null,
        lastName: null,
        dateOfBirth: null,
        emailAddress: null,
        mobileNumber: null,
        address: null,
        remarks: null,
        workexperience: true,
        workduration: null,
        passportnumber: null,
        branchId: 0,
        UserId: 0,
        ismaritalstatus: true,
        listeningScore: null,
        readingScore: null,
        writingScore: null,
        speakingScore: null,
        overAllScore: null,
        countryId: 0,
        leadSourceId: 0,
        leadsStatusId: 0,
        spouse: {
         
        },
        userQualifications: [],
        userVisaRefusales: [ ],
        createUserVisa: [ ],
        
      },
      allUniversities:[],
      allQualifications: [],
      allCountries: [],
      allLeadsSource : [],
      allLeadsStatus: [],
      allVisaTypes: [],
      allBranch: [],
      errorSnack: false,
      branchuser:[],
      alertMessage: "",
      errorMessage: "",
      isload:false,
      isloader:false,
      leadId:this.props.leadId
    };
  }

  componentDidMount() {

    this.getAllBranch();
    this.getAllQualifications();
    this.getAllLeadSource();
    this.getAllVisaTypes();
    this.getAllCountries();
    this.getAllLeadStatus();
    this.getAllUniversities();
    if(this.props.leadId){
        this.getGetLead(this.props.leadId);
    }
  
  }

  handleClose = (event, reason) => {
    this.setState({
      errorSnack: false,
      isSnack: false
    });
  };

  getGetLead = async (Id) => {
    try {
      const response = await UserService.GetLeadbyid(Id);


      const { data } = response.data;
    
      this.addQuificationsUser(data);
      
    } catch (error) {
      console.log("status error", error);
    }
  };

  addQuificationsUser = (data) => { 
    let {leaddata} = this.state;
    delete data['branch'];
    let {userQualifications,userVisa,spouseQualifications,userVisaRefusales,spouse}=data;
    delete data['spouseQualifications'];
    spouse.spouseQualifications=spouseQualifications;
     leaddata={ ...leaddata, spouse};
   let leads ={...leaddata,...data}
   console.log("response of GetLeadbyid", leads);
    this.setState({leaddata:leads,isload:false});
    
  };
  

//#region add remove 
  addSpouseQualifications = () => {
    const {leaddata} = this.state;
    let {spouse}=leaddata;
    let {spouseQualifications}=spouse;
    const obj =  {
      qualificationId: 0,
      passingYear: null,
      percentage: null,
      description: null
    }
    spouseQualifications.push(obj);
    const leads={ ...leaddata, spouse}
    this.setState({leaddata:leads});
  };

  removeSpouseQualifications = (index) => {
    const {leaddata} = this.state;
    let {spouse}=leaddata;
    let {spouseQualifications}=spouse;

    spouseQualifications.splice(index, 1);

    spouse.spouseQualifications=spouseQualifications;
    const leads={ ...leaddata, spouse}
    this.setState({leaddata:leads});
  };

  addQuifications = () => {
    const {leaddata} = this.state;
    let {userQualifications}=leaddata;
    const obj =   {
      qualificationId: 0,
      passingYear: null,
      percentage: null,
      description: null
    }
    userQualifications.push(obj);
    const leads={ ...leaddata, userQualifications}
    this.setState({leaddata:leads});
  };

  removeQualifications = (index) => {
    const {leaddata} = this.state;
    let {userQualifications}=leaddata;
    userQualifications.splice(index, 1);
    const leads={ ...leaddata, userQualifications}
    this.setState({leaddata:leads});
  };


  addMoreVisaInfos = () => {
    const {leaddata} = this.state;
    let {createUserVisa}=leaddata;
    const obj =  {
      visaTypeId: 0,
      countryId: 0,
      universityId: 0,
      city: null,
      reason: null,
      remarks: null
    }
    createUserVisa.push(obj);
    const leads={ ...leaddata, createUserVisa}
    this.setState({leaddata:leads});
  };

  removeVisaInfos = (index) => {
    const {leaddata} = this.state;
    let {createUserVisa}=leaddata;
    createUserVisa.splice(index, 1);
    const leads={ ...leaddata, createUserVisa}
    this.setState({leaddata:leads});
  };

  addRefUsaleses = () => {
    const {leaddata} = this.state;
    let {userVisaRefusales}=leaddata;
    const obj =  {
      visaTypeId: 0,
      countryId: 0,
      city: null,
      reason: null,
      remarks: null
    }
    userVisaRefusales.push(obj);
    const leads={ ...leaddata, userVisaRefusales}
    this.setState({leaddata:leads});
  };

  removeRefUsaleses = (index) => {
    const {leaddata} = this.state;
    let {userVisaRefusales}=leaddata;
    userVisaRefusales.splice(index, 1);
    const leads={ ...leaddata, userVisaRefusales}
    this.setState({leaddata:leads});
  };

  addSpouse = () => {
    const {leaddata} = this.state;
    let {spouse}=leaddata;
    if(Object.keys(spouse).length == 0){
        spouse =  {
            firstName: null,
            lastName: null,
            dateOfBirth: null,
            mobileNumber: null,
            address: null,
            remarks: null,
            workexperience: true,
            workduration: null,
            passportnumber: null,
            spouseQualifications: []
        }
    }else{
        spouse={};
    }
  
   
    const leads={ ...leaddata, spouse}
    this.setState({leaddata:leads});
  };

//#endregion

//#region get All data


getAllUniversities = async () => {
  try {
    const response = await UserService.GetAllUniversity();
    console.log("response of getAllUniversities", response);

    const { data } = response;
    if (data) {
      const { data: list, succeeded } = data;
      if (succeeded) {
        if (list && list.length) {
          this.setState({
            allUniversities: list,
          });
        }
      }
    }
  } catch (error) {
    console.log("status error", error);
  }
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
      console.log("response of getAllCountries", response);

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

  getBranchUser = async (id) => {
    try {
      const response = await UserService.GetUserbyBranchid(id);
      console.log("response of getBranchUser", response);

      const { data } = response;
      const { data: list, succeeded } = data;
      if (succeeded) {
        if (list && list.length) {
          this.setState({
            branchuser: list,
          });
        }
        else{
          this.setState({
            branchuser: [],
          });
        }
      }
     
    } catch (error) {
      console.log("status error", error);
    }
  };

  getAllLeadStatus = async () => {
    try {
      const response = await UserService.GetAllLeadsStatus();
      console.log("response of getAllLeadStatus", response);

      const { data } = response;
      if (data) {
        const { data: list, succeeded } = data;
        if (succeeded) {
          if (list && list.length) {
            this.setState({
              allLeadsStatus: list,
            });
          }
        }
      }
    } catch (error) {
      console.log("status error", error);
    }
  };

  getAllVisaTypes = async () => {
    try {
      
      if(this.props.leadId){
         this.setState({
            isload: true
          });
        }
      const response = await UserService.GetAllVisaTypes();
      console.log("response of getAllVisaTypes", response);

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
      const { data } = response;
      const { data: list, succeeded } = data;
      if (succeeded) {
        if (list && list.length) {
          this.setState({
            allLeadsSource: list,
          });
        }
      }
    } catch (error) {
      console.log("status error", error);
    }
  };

  getAllBranch = async () => {
    try {
      const response = await UserService.GetAllBranch();
      console.log("response of getAllBranch", response);

      const { data } = response;
      const { data: list, succeeded } = data;
      if (succeeded) {
        if (list && list.length) {
          this.setState({
            allBranch: list,
          });
        }
      }
    } catch (error) {
      console.log("status error", error);
    }
  };

//#endregion

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

onSubmit =async (event) => {
  event.preventDefault();
  this.setState({isloader: true});
  let {leaddata}= this.state;
  let {ismaritalstatus,workexperience,spouse}= leaddata;

  ismaritalstatus= ismaritalstatus=="true"?true:false;
  workexperience= workexperience=="true"?true:false;
  if(Object.keys(spouse).length != 0){
    spouse.workexperience= spouse.workexperience=="true"?true:false;
    leaddata={...leaddata,spouse};
  }
  leaddata={...leaddata,ismaritalstatus};
  leaddata={...leaddata,workexperience};
  try {
    const response = await UserService.Saveleadr(leaddata);
    const { status,data } = response;
    if(status==400){
        const {Message}=data;
        this.setState({
            errorSnack: true,
            errorMessage: Message,
            isloader: false
           
          });
    }else{
        this.setState({
          isSnack: true,
          Message: "Successfully Submitted",
          isloader: false
        });
        
      }
    console.log("response", data);
  } catch (error) {
    console.log("status error", error);
  }


};

 handleChange = (prop) => (event) => {
  const {leaddata}= this.state;
  console.log(prop)
   if(prop=="branchId"){
    this.getBranchUser(event.target.value);
   }
  
  const leads={ ...leaddata, [prop]: event.target.value}
  this.setState({leaddata:leads});
};

handleChangeDate = (prop) => (event) => {
    const {leaddata}= this.state;
    // let date= moment(event).format("DD-MM-YYYY")
   const leads={ ...leaddata, [prop]: event}
   this.setState({leaddata:leads});
 };

handleChangeRadio = (prop) => (event) => {
    const {leaddata}= this.state;
    let radioValue= event.target.value=="yes"?true:false;
   const leads={ ...leaddata, [prop]: radioValue}
   this.setState({leaddata:leads});
 };
handleChangeSpouse = (prop) => (event) => {
  const {leaddata}= this.state;
  let {spouse}=leaddata;
  spouse={...spouse,[prop]: event.target.value}
 const leads={ ...leaddata, spouse}
 this.setState({leaddata:leads});
};

handleChangeSpouseDate = (prop) => (event) => {
    const {leaddata}= this.state;
    let {spouse}=leaddata;
  
    spouse={...spouse,[prop]: event}
    const leads={ ...leaddata, spouse}
    this.setState({leaddata:leads});
 };

handleChangeSpouseQualifications = (prop,index) => (event) => {
  const {leaddata}= this.state;
  let {spouse}=leaddata;
  let {spouseQualifications}=spouse
  let obj
   if(prop=="passingYear"){
    let year= moment(event).format("YYYY")
     obj= {...spouseQualifications[index],[prop]: year};
    }else{
        obj= {...spouseQualifications[index],[prop]: event.target.value};
    }
 
  spouseQualifications[index]=obj;
  spouse={...spouse,spouseQualifications}
 const leads={ ...leaddata, spouse}
 this.setState({leaddata:leads});
};

handleChangeQualifications = (prop,index) => (event) => {
    const {leaddata}= this.state;
    let {userQualifications}=leaddata;
    let obj
    if(prop=="passingYear"){
        let year=moment(event).format("YYYY")
         obj= {...userQualifications[index],[prop]: year};
    }else{
         obj= {...userQualifications[index],[prop]: event.target.value};
    }
   
  
   userQualifications[index]=obj;
   const leads={ ...leaddata, userQualifications}
   this.setState({leaddata:leads});
  };
  handleChangeVisa = (prop,index) => (event) => {
    const {leaddata}= this.state;
    let {createUserVisa}=leaddata;
   let obj= {...createUserVisa[index],[prop]: event.target.value};
   createUserVisa[index]=obj;
   const leads={ ...leaddata, createUserVisa}
   this.setState({leaddata:leads});
  };


  handleChangeVisaRefusales = (prop,index) => (event) => {
    const {leaddata}= this.state;
    let {userVisaRefusales}=leaddata;
   let obj= {...userVisaRefusales[index],[prop]: event.target.value};
   userVisaRefusales[index]=obj;
   const leads={ ...leaddata, userVisaRefusales}
   this.setState({leaddata:leads});
  };


  render() {
    const {
      allCountries,
      allLeads,
      allVisaTypes,
      allUniversities,
      allBranch,
      allLeadsStatus,
      allQualifications,
      errorSnack,
      alertMessage,
      leaddata,
      selectedDate,
      allLeadsSource,
      isload,
      isloader,
      errorMessage,
      Message,
      isSnack,
      branchuser
    } = this.state;
 const {spouse}=leaddata;
    
    return (
    
        <React.Fragment>
             {isload? <LoaderBackdrop isload={isload} />:

        <Box className="container" p={2.5}>
           <Box className="lead-form" px={3} pb={3}>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    label="First Name"
                    value={leaddata.firstName}
                    variant="outlined"
                    className="custom-textfield"
                    onChange={this.handleChange('firstName')}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    label="Last Name"
                    value={leaddata.lastName}
                    variant="outlined"
                    className="custom-textfield"
                    onChange={this.handleChange('lastName')}
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
                      value={leaddata.dateOfBirth || selectedDate}
                      onChange={this.handleChangeDate('dateOfBirth')}
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
                    value={leaddata.emailAddress}
                    variant="outlined"
                    className="custom-textfield"
                    onChange={this.handleChange('emailAddress')}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <TextField
                    type="number"
                    label="Mobile Number"
                    value={leaddata.mobileNumber}
                    variant="outlined"
                    className="custom-textfield"
                    onChange={this.handleChange('mobileNumber')}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    label="Address"
                    value={leaddata.address}
                    variant="outlined"
                    className="custom-textfield"
                    onChange={this.handleChange('address')}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    label="Remarks"
                    value={leaddata.remarks}
                    variant="outlined"
                    className="custom-textfield"
                    onChange={this.handleChange('remarks')}
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
                      value={leaddata.workexperience}
                      onChange={this.handleChange('workexperience')}
                    >
                      <FormControlLabel
                         value={"true"}
                        control={<Radio color="primary" />}
                        label="Yes"
                      />
                      <FormControlLabel
                         value={"false"}
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
                    label="Work Duration"
                    variant="outlined"
                    value={leaddata.workduration}
                    className="custom-textfield"
                    onChange={this.handleChange('workduration')}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    label="Passport Number"
                    variant="outlined"
                    value={leaddata.passportnumber}
                    className="custom-textfield"
                    onChange={this.handleChange('passportnumber')}
                  />
                </Grid>
                <Grid item xs={3}>
                  <FormControl variant="outlined" className="custom-textfield">
                    <InputLabel id="demo-simple-select-outlined-label">
                      Country
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={leaddata.countryId}
                      onChange={this.handleChange('countryId')}
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
                      value={leaddata.ismaritalstatus}
                      onChange={this.handleChange('ismaritalstatus')}
                    >
                      <FormControlLabel
                         value={"true"}
                        control={<Radio color="primary" />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value={"false"}
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
                    value={leaddata.listeningScore}
                    className="custom-textfield"
                    onChange={this.handleChange('listeningScore')}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    label="Reading Score"
                    variant="outlined"
                    value={leaddata.readingScore}
                    className="custom-textfield"
                    onChange={this.handleChange('readingScore')}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    label="Writing Score"
                    variant="outlined"
                    value={leaddata.writingScore}
                    className="custom-textfield"
                    onChange={this.handleChange('writingScore')}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    label="Speaking Score"
                    variant="outlined"
                    value={leaddata.speakingScore}
                    className="custom-textfield"
                    onChange={this.handleChange('speakingScore')}
                  />
                </Grid>
              </Grid>

              <Box mt={1}></Box>
              <Grid container spacing={3}>

                <Grid item xs={3}>
                  <FormControl variant="outlined" className="custom-textfield">
                    <InputLabel id="demo-simple-select-outlined-label">
                      Lead Source
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={leaddata.leadSourceId}
                      onChange={this.handleChange('leadSourceId')}
                      label="Lead Source"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {allLeadsSource.map((data, index) => {
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
                      value={leaddata.leadsStatusId}
                      onChange={this.handleChange('leadsStatusId')}
                      label="Lead Status"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {allLeadsStatus.map((data, index) => {
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
                      Branch
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={leaddata.branchId}
                      onChange={this.handleChange('branchId')}
                      label="Branch"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {allBranch.map((data, index) => {
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
                      User
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={leaddata.UserId}
                      onChange={this.handleChange('UserId')}
                      label="Branch"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {branchuser.map((data, index) => {
                        return (
                          <MenuItem key={index.toString()} value={data.id}>
                            {data.email}
                          </MenuItem>
                        );
                      })}
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
                <Box
                  ml="auto"
                  onClick={this.addSpouse}
                  className="cursor-pointer"
                >
                    {Object.keys(spouse).length != 0?(  <HighlightOffIcon color="primary" style={{ fontSize: 25 }} />):(<AddCircleIcon color="primary" style={{ fontSize: 25 }}/>)}
                
                </Box>
              </Box>
              {Object.keys(spouse).length != 0 && 
            <>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    label="First Name"
                    variant="outlined"
                    value={spouse.firstName}
                    className="custom-textfield"
                    onChange={this.handleChangeSpouse('firstName')}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    label="Last Name"
                    variant="outlined"
                    value={spouse.lastName}
                    className="custom-textfield"
                    onChange={this.handleChangeSpouse('lastName')}
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
                      value={spouse.dateOfBirth || selectedDate}
                      onChange={this.handleChangeSpouseDate('dateOfBirth')}
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
                    value={spouse.emailAddress}
                    className="custom-textfield"
                    onChange={this.handleChangeSpouse('emailAddress')}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <TextField
                    type="number"
                    label="Mobile Number"
                    variant="outlined"
                    value={spouse.mobileNumber}
                    className="custom-textfield"
                    onChange={this.handleChangeSpouse('mobileNumber')}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    label="Address"
                    variant="outlined"
                    value={spouse.address}
                    className="custom-textfield"
                    onChange={this.handleChangeSpouse('address')}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    label="Remarks"
                    variant="outlined"
                    value={spouse.remarks}
                    className="custom-textfield"
                    onChange={this.handleChangeSpouse('remarks')}
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
                      value={spouse.workexperience}
                      onChange={this.handleChangeSpouse('workexperience')}
                    >
                      <FormControlLabel
                         value={"true"}
                        control={<Radio color="primary" />}
                        label="Yes"
                      />
                      <FormControlLabel
                         value={"false"}
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
                    label="Work Duration"
                    variant="outlined"
                    value={spouse.workduration}
                    className="custom-textfield"
                    onChange={this.handleChangeSpouse('workduration')}

                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    type="text"
                    label="Passport Number"
                    variant="outlined"
                    value={spouse.passportnumber}
                    className="custom-textfield"
                    onChange={this.handleChangeSpouse('passportnumber')}
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
              {spouse.spouseQualifications?.map((data, index) => {
                return (
                  <>
                    
                      <Box
                        color="text.secondary"
                        mt={3}
                        mb={2}
                        className="spouse-heading"
                        display="flex"
                        alignItems="center"
                      >
                      
                      </Box>
                   

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
                            value={data.qualificationId}
                            onChange={this.handleChangeSpouseQualifications('qualificationId',index)}
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
                            format="yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Passing Year"
                            autoOk
                            value={data.passingYear}
                            onChange={this.handleChangeSpouseQualifications('passingYear',index)}
                            className="custom-datepicker"
                            KeyboardButtonProps={{
                              "aria-label": "change date",
                            }}
                          />
                        </MuiPickersUtilsProvider>
                      </Grid>

                      <Grid item xs={2}>
                        <TextField
                          type="text"
                          label="Percentage"
                          variant="outlined"
                          className="custom-textfield"
                          value={data.percentage}
                          onChange={this.handleChangeSpouseQualifications('percentage',index)}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField
                          type="text"
                          label="Description"
                          variant="outlined"
                          value={data.description}
                          onChange={this.handleChangeSpouseQualifications('description',index)}
                          className="custom-textfield"
                       
                        />
                      </Grid>
                      <Grid item xs={1}>
                        <Box
                          ml="auto"
                          onClick={() => this.removeSpouseQualifications(index)}
                          className="cursor-pointer"
                        >
                          <HighlightOffIcon
                            color="danger"
                            style={{ fontSize: 25 }}
                          />
                        </Box>
                         </Grid>
                    </Grid>
              
                  </>
                );
              })}
               </>}
       
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
             
              {leaddata.userQualifications.map((data, index) => {
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
                           
                            value={data.qualificationId}
                            onChange={this.handleChangeQualifications('qualificationId',index)}
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
                            value={data.passingYear}
                            onChange={this.handleChangeQualifications('passingYear',index)}
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
                          value={data.percentage}
                          onChange={this.handleChangeQualifications('percentage',index)}
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <TextField
                          type="text"
                          label="Description"
                          variant="outlined"
                          className="custom-textfield"
                          value={data.description}
                          onChange={this.handleChangeQualifications('description',index)}
                        />
                      </Grid>
                      <Grid item xs={1}>
                        <Box
                          ml="auto"
                          onClick={() => this.removeQualifications(index)}
                          className="cursor-pointer"
                        >
                          <HighlightOffIcon
                            color="danger"
                            style={{ fontSize: 25 }}
                          />
                        </Box>
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
              {leaddata.createUserVisa.map((data, index) => {
                return (
                  <>
             
                    <Grid key={index.toString()} container spacing={3}>
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
                            value={data.visaTypeId}
                            onChange={this.handleChangeVisa('visaTypeId',index)}
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
                            value={data.countryId}
                            onChange={this.handleChangeVisa('countryId',index)}
                            label="Country"
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            {allCountries.map((data, index) => {
                              return (
                                <MenuItem
                                  key={index.toString()}
                                  value={data.id}
                                >
                                  {data.countryDescription}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid item xs={3}>
                        <TextField
                          type="text"
                          label="City"
                          variant="outlined"
                          className="custom-textfield"
                          value={data.city}
                          onChange={this.handleChangeVisa('city',index)}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField
                          type="text"
                          label="Reason"
                          variant="outlined"
                          className="custom-textfield"
                          value={data.reason}
                          onChange={this.handleChangeVisa('reason',index)}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField
                          type="text"
                          label="remarks"
                          variant="outlined"
                          className="custom-textfield"
                          value={data.remarks}
                          onChange={this.handleChangeVisa('remarks',index)}
                        />
                      </Grid>
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
                            value={data.universityId}
                            onChange={this.handleChangeVisa('universityId',index)}
                            label="University"
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            {allUniversities.map((data, index) => {
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
                      <Grid item xs={1}>
                        <Box
                          ml="auto"
                          onClick={() => this.removeVisaInfos(index)}
                          className="cursor-pointer"
                        >
                          <HighlightOffIcon
                            color="danger"
                            style={{ fontSize: 25 }}
                          />
                        </Box>
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
                  User Refusales Visa
                </Typography>
                <Box
                  ml="auto"
                  onClick={this.addRefUsaleses}
                  className="cursor-pointer"
                >
                  <AddCircleIcon color="primary" style={{ fontSize: 25 }} />
                </Box>
              </Box>
              {leaddata.userVisaRefusales.map((data, index) => {
                return (
                  <>
                    <Grid key={index.toString()} container spacing={3}>
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
                            value={data.visaTypeId}
                            onChange={this.handleChangeVisaRefusales('visaTypeId',index)}
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
                            value={data.countryId}
                            onChange={this.handleChangeVisaRefusales('countryId',index)}
                            label="Country"
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            {allCountries.map((data, index) => {
                              return (
                                <MenuItem
                                  key={index.toString()}
                                  value={data.id}
                                >
                                  {data.countryDescription}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid item xs={3}>
                        <TextField
                          type="text"
                          label="Reason"
                          variant="outlined"
                          className="custom-textfield"
                          value={data.reason}
                            onChange={this.handleChangeVisaRefusales('reason',index)}
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <TextField
                          type="text"
                          label="remarks"
                          variant="outlined"
                          className="custom-textfield"
                          value={data.remarks}
                          onChange={this.handleChangeVisaRefusales('remarks',index)}
                        />
                      </Grid>
                      <Grid item xs={1}>
                        <Box
                          ml="auto"
                          onClick={() => this.removeRefUsaleses(index)}
                          className="cursor-pointer"
                        >
                          <HighlightOffIcon
                            color="danger"
                            style={{ fontSize: 25 }}
                          />
                        </Box>
                         </Grid>
                    </Grid>
                  </>
                );
              })}

              <Box mt={3}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={isloader}
                  disableElevation
                  size="large"
                  onClick={this.onSubmit}
                  className="custom-button"
                >
                      {isloader && <CircularProgress size={16} />}
                  Submit
                </Button>
              </Box>
            </Box>
         
        </Box>
        }

       <Snackbar
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={errorSnack}
          onClose={this.handleClose}
        >
          {errorMessage ? (
            <Alert onClose={this.handleClose} severity="error">
              {errorMessage}
            </Alert>
          ) : (
            ""
          )}
        </Snackbar>
        <Snackbar
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={isSnack}
          onClose={this.handleClose}
        >
          {Message ? (
            <Alert onClose={this.handleClose} severity="success">
              {Message}
            </Alert>
          ) : (
            ""
          )}
        </Snackbar>
        </React.Fragment>
    
    );
  }
}


const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#299277',
    },
  }));
  
function LoaderBackdrop(props) {
    const classes = useStyles();
    return (
      <div>
        <Backdrop className={classes.backdrop} open={props.isload}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    );
  }

export default Lead;
