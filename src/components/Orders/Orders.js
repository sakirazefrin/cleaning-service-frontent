import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import NavBar from '../Home/Navbar/NavBar';
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


const Orders = () => {
    const classes = useStyles();
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    const userEmail=loggedInUser.email||sessionStorage.getItem("email")

    ///This is for a users ALl Orders
    const [orders,setOrders]=useState([])

    useEffect(() => {
        fetch("https://expressclean.herokuapp.com/ordersByEmail",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email:userEmail})
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <div>
            <NavBar></NavBar>
            <h3 className="text-center m-5">Your Orders Are Showing Below</h3>
            <div>
                {
                    !orders.length ? spinner() : <div className="conatiner m-5 p-5">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        {/* <StyledTableCell>Dessert (100g serving)</StyledTableCell> */}
                                        <StyledTableCell align="left">Name</StyledTableCell>
                                        <StyledTableCell align="right">Price</StyledTableCell>
                                        <StyledTableCell align="center">Time</StyledTableCell>
                                        <StyledTableCell align="center">Order Status</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>


                                    {orders.map((pd) => (
                                        <TableRow key={pd._id}>
                                            <TableCell component="th" scope="row">
                                                {pd.product.name}
                                            </TableCell>
                                            {/* <StyledTableCell align="left">{pd.name}</StyledTableCell> */}
                                            <StyledTableCell align="center">{pd.product.price}</StyledTableCell>
                                            <StyledTableCell align="center">{pd.time}</StyledTableCell>
                                            <StyledTableCell align="center">{pd.status===1?"PENDING":pd.status===2?"RECEIVED":pd.status===3?"PROCESSING":"DELIVERED"}</StyledTableCell>
                                        </TableRow>
                                    ))}

                                </TableBody>
                            </Table>
                        </TableContainer>


                    </div>
                }
                
            </div>
        </div>
    );
};

export default Orders;