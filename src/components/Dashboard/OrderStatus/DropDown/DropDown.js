import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(1),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 100,
    },
}));

const DropDown=({id,status})=> {
    const classes = useStyles();
    const [stat, setStat] = React.useState(status);
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setStat(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleBlur=()=>{
        fetch("https://expressclean.herokuapp.com/updateOrder",{ 
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({id:id,status:stat})
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    }

    return (
        <div>
            {/* <Button className={classes.button} onClick={handleOpen}>
                Open the select
      </Button> */}
            <FormControl className={classes.formControl}>
                {/* <InputLabel id="demo-controlled-open-select-label">{status === 1 ? "PENDING" : status === 2 ? "PROCESSING" : "DELIVERED"}</InputLabel> */}
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={stat}
                    onChange={handleChange}
                    onBlur={handleBlur}
                >
                    {/* <MenuItem value="">
                        <em>{status === 1 ? "PENDING" :status === 2 ? "PROCESSING" : "DELIVERED"}</em>
                    </MenuItem> */}
                    <MenuItem value={1}>PENDING</MenuItem>
                    <MenuItem value={2}>RECEIVED</MenuItem>
                    <MenuItem value={3}>PROCESSING</MenuItem>
                    <MenuItem value={4}>DELIVERED</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}; export default DropDown;