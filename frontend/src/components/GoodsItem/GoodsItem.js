import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import {Link} from "react-router-dom";
import {CardMedia, makeStyles, Typography} from "@material-ui/core";

import {apiURL} from "../../config";

const useStyles = makeStyles({
  root: {
    marginBottom: '20px'
  },
  card: {
    height: '100%',
    maxWidth: '90%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  }
});

const GoodsItem = (props) => {
  const classes = useStyles();

  const cardImage = apiURL + '/' + props.image;

  return (
    <Grid item xs sm={12} md={6} lg={4} className={classes.root}>
      <Card className={classes.card}>
        <CardHeader title={props.title}/>
        <CardMedia
          image={cardImage}
          title={props.title}
          className={classes.media}
        />
        <CardContent>
          <strong style={{marginLeft: '10px'}}>
            {props.category}
          </strong>
          <Typography>{props.description}</Typography>
        </CardContent>
        <CardActions>
          <IconButton component={Link} to={'/goods/' + props.id}>
            <ArrowForwardIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

GoodsItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default GoodsItem;