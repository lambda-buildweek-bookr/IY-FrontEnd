import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function Book(props) {
  return (
    // <div className="container">
    <Card className="card">
      <CardActionArea>
        <CardHeader
          style={{ height: "75px" }}
          title={props.title}
          subheader={props.author}
        />

        <img className="card-img" src={props.image} alt="img" />
      </CardActionArea>
      <CardContent>
        <Typography component="p">"{props.snippet}"</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    // </div>
  );
}
