import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ser2 from "../../../images/ser2.jpg"

const useStyles = makeStyles({
    root: {
        maxWidth: 360,
    },
    media: {
        height: 100,
    },
});

const Testimony = ({service}) => {
    const classes = useStyles();
    return (
        <div className="col-md-3 m-2">
            <Card style={{ backgroundColor:"#AFB8B3"}} className={classes.root}>
                <CardActionArea className="mt-1">
                    <Typography className="d-flex justify-content-center" gutterBottom variant="h6" component="h2">{service.name}</Typography>
                    
                    {/* <CardMedia style={{height:"150px",width:"100%",borderRadius:"20px"}}
                        className={classes.media}
                        image={first}
                        title="Contemplative Reptile"/> */}
                    <CardContent>
                        <div className="d-flex row">
                            <div className="col-md-3">
                                <img style={{ height: "35px", width: "35px", borderRadius: "75%", backgroundColor: "blue" }} src={ser2} alt="" className="img-fluid" />
                                

                            </div>
                            <div className="col-md-9">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, voluptates.</p>

                            </div>
                        </div>
                       
                        {/* <Typography variant="body2" color="textSecondary" component="p">{service.des}</Typography> */}
                    </CardContent>
                </CardActionArea>
                {/* <CardActions className="mx-4">
                    <Button size="small" color="primary"><h4>${service.price}</h4></Button>
                    <Button  className="ml-auto" size="small" color="primary"><h5>Buy Now</h5></Button>
                </CardActions> */}
            </Card>


        </div>
    );
};

export default Testimony;