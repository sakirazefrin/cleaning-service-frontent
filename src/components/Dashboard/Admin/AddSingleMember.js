import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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

const AddSingleMember = ({ service }) => {
    const classes = useStyles();
    return (
        <div className="col-md-3 m-2">
            <Card style={{ borderRadius: "40px" }} className={classes.root}>
                <CardActionArea>
                    <div className="d-flex justify-content-center">
                        <img style={{ height: "200px", borderRadius: "40px", backgroundColor: "blue" }} src={service.file} alt="" className="img-fluid" />
                    </div>
                    {/* <CardMedia style={{height:"150px",width:"100%",borderRadius:"20px"}}
                        className={classes.media}
                        image={first}
                        title="Contemplative Reptile"/> */}
                    <CardContent>
                        <Typography className="text-center" gutterBottom variant="h5" component="h2">{service.name}</Typography>
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

export default AddSingleMember;


