import { Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/lab";
import { useState } from "react";

export const MuiPicker = (props) => {

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    console.log(selectedDate);

    return(
        <Stack spacing={4} sx={{width: '250px'}}>
            <DatePicker label= {props.label} renderInput={params => <TextField {...params} />}
            value={selectedDate}
            onChange={newValue=>setSelectedDate(newValue)}/>
        </Stack>
    )
}