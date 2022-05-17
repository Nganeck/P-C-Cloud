import { Button } from '@mui/material';
import classes from './create-meet.module.css';
import SendIcon from '@mui/icons-material/Send';
import { Fragment, useState } from 'react';
// imports for time pickers
// import { Grid } from '@mui/material';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//     MuiPickerUtilProvider,
//     KeyboardTimePicker,
//     KeyboarddatePicker
// } from '@material-ui/pickers';
//imports for time picker
import {LocalizationProvider} from '@mui/lab';
import { TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { MuiPicker } from '../../UI/MuiPicker';
//
import DateTimePicker from '@mui/lab/DateTimePicker';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
// 3rd try
//import TimePicker from 'react-time-picker';
// 4th try
import TimePicker from 'react-gradient-timepicker';
// 5th try
import { DesktopTimePicker } from '@mui/x-date-pickers';
// theme

const theme = createTheme({
    typography: {
      fontSize: 12,
      fontFamily: "Segoe UI, Helvetica, Arial, sans-serif",
    },
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: '#f44336',
      },
    },
  });
//


const CreateMeet = () =>{

    // console.log('current date: '+Date('Y-m-d'));
    // const [selectedDate, setSelectedDate] = useState(Date());

    const today = new Date();
    const [selectedTime, setSelectedTime] =  useState('10:00');
    console.log(selectedTime);

    const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));
 
  const handleChange = (newValue) => {
    setValue(newValue);
  };

    return(
        <Fragment>
            <center><form className={classes.newMeetForm}>
                <input placeholder='Description'/>
                {/* <input type='date'/>
                <input type='time'/>*/}
        <ThemeProvider theme={theme}>
      <div  className={classes.dateTimePicker}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
          <DateTimePicker
            label="Date&Time picker"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
            
          </Stack>
        </LocalizationProvider>
      </div>
    </ThemeProvider>
                <select onChange={e=>console.log(e.target.value)}>
                    <option >Consultation</option>
                    <option>Ophtamology</option>
                    <option>Urinology</option>
                    <option>Gastrology</option>
                </select>
                <br></br>
                <Button variant='outlined'>OK <SendIcon fontSize='small'/></Button>
            </form></center>
        </Fragment>
    )
    
    

}
export default CreateMeet;