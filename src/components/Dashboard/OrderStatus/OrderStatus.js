import React, { useEffect, useState } from 'react';
import AdminNav from '../AdminNav/AdminNav';
import DropDown from './DropDown/DropDown';


import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { green, purple } from '@material-ui/core/colors';


import CircularProgress from '@material-ui/core/CircularProgress';
const spinner = () => {
    return <CircularProgress disableShrink />;
}
const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const OrderStatus = () => {
    const classes = useStyles();
    const [allorders,setAllOrders]=useState([])
    useEffect(()=>{
        fetch("https://expressclean.herokuapp.com/allOrders")
        .then(res=>res.json())
        .then(data=>{
            setAllOrders(data)
        })
        .catch(err=>console.log(err))
    },[])
    return (
        <div>
            <AdminNav></AdminNav>

            <h1 className="text-center">Current Orders</h1>

           <div>

                {
                    !allorders.length ? spinner() : <div className="conatiner m-5 p-5">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        {/* <StyledTableCell>Dessert (100g serving)</StyledTableCell> */}
                                        <StyledTableCell align="left">Name</StyledTableCell>                                      
                                        <StyledTableCell align="right">Price</StyledTableCell>
                                        <StyledTableCell align="center">Time</StyledTableCell>
                                        <StyledTableCell align="center">Status</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>


                                    {allorders.map((pd) => (
                                        <TableRow key={pd.product.name}>
                                            <TableCell component="th" scope="row">
                                                {pd.product.name}
                                            </TableCell>
                                            {/* <StyledTableCell align="left">{pd.name}</StyledTableCell> */}
                                            <StyledTableCell align="right">{pd.product.price}</StyledTableCell>
                                            <StyledTableCell align="center">{pd.time}</StyledTableCell>
                                            <StyledTableCell align="center"> <DropDown status={pd.status} id={pd._id}></DropDown> </StyledTableCell>
                                        </TableRow>
                                    ))}

                                </TableBody>
                            </Table>
                        </TableContainer>


                    </div>
                }


           </div>

            <h1 className="text-center">Completed Orders</h1>

           <div>


           </div>
            
        </div>
    );
};

export default OrderStatus;


{/* <DropDown></DropDown> */}