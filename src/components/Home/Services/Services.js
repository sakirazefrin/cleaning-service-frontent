import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import first from "../../../images/plumber1.png"
import { UserContext } from '../../../App';
import { useHistory } from 'react-router';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';



const useStyles = makeStyles({
    root: {
        maxWidth: 360,
    },
    media: {
        height: 100,
    },
});

const Services = ({service}) => {
    const history=useHistory()
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)

    const handleClick=(id)=>{
        history.push(`/cart/${id}`)
        
    }
    
    const classes = useStyles();

    return (
        <div className="col-md-3 m-2">
            <Card className={classes.root}>
                <CardActionArea>
                    <div className="d-flex justify-content-center">
                        <img  style={{height:"100px" ,borderRadius:"50px",backgroundColor:"blue" ,marginTop:"10px"}} src={service.file} alt="" className="img-fluid"/>
                    </div>
                    {/* <CardMedia style={{height:"150px",width:"100%",borderRadius:"20px"}}
                        className={classes.media}
                        image={first}
                        title="Contemplative Reptile"/> */}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{service.name}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{service.spec}</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className="mx-4">
                    <Button  size="small" color="primary"><h4>${service.price}</h4></Button>
                    <Button onClick={()=>handleClick(service._id)} className="ml-auto" size="small" color="primary"><h5>Buy Now</h5></Button>
                </CardActions>
            </Card>
      
            
        </div>
    );
};

export default Services;