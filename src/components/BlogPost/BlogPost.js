import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
    },
    media: {
        height: 100,
    },
});

const BlogPost = ({service}) => {

    const readMoreButtonHandler=(id)=>{
        console.log("I am clicked ",id)
    }   
     const classes = useStyles();
    return (
        <div className="col-md-3 m-2">
            <Card style={{ backgroundColor: "#AFB8B3" }} className={classes.root}>
                <CardActionArea className="">
                   
                    <CardMedia style={{height:"150px",width:"100%",borderRadius:"20px"}}
                        className={classes.media}
                        image={service.file}
                        title="Contemplative Reptile"/>
                    <Typography className="d-flex justify-content-center" gutterBottom variant="h6" component="h2">{service.name}</Typography>
                    <p className="text-center">{service.post}</p>
                    <Button onClick={()=>readMoreButtonHandler(service.id)} className=" ms-5 btn btn-primary d-flex justify-content-right" size="small" color="primary"><h6>Read More</h6></Button>
                    
                </CardActionArea>
                
              

                
            </Card>
        </div>
    );
};

export default BlogPost;




// {/* <CardActions className="mx-4">
//     {/* <Button size="small" color="primary"><h4>${service.price}</h4></Button> */}
//     {/* <Button  className="ml-auto" size="small" color="primary"><h5>Read More</h5></Button> */}
// </CardActions> */}