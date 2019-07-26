import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: "25rem",
    marginBottom: "1rem",
    textAlign: "left",
    height: "100%"
  },
  media: {
    height: "20rem"
  }
});

export default function MediaCard(props) {
  const classes = useStyles();
  let { image, title, deletePost, id, text, date } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Typography
          gutterBottom
          variant="p"
          component="p"
          style={{ marginLeft: '.5rem', marginTop: '.5rem',fontSize:'.75rem', fontFamily: "Nunito" }}
        >
          {date}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          style={{ margin: "0.5rem", marginTop: '.2rem', fontFamily: "DM Serif Text" }}
        >
          {title}
        </Typography>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ fontFamily: "Nunito" }}
          >
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        <Button onClick={() => deletePost(id)} size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
