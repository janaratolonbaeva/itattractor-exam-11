import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import {CardMedia, Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useDispatch, useSelector} from "react-redux";
import {fetchOneGoods} from "../../store/actions/goodsActions";
import {apiURL} from "../../config";

const useStyle = makeStyles(theme => ({
  media: {
    minWidth: '200px',
    minHeight: '200px',
    marginRight: '20px'
  },
  grid: {
    marginBottom: theme.spacing(4)
  },
  strong: {
    fontSize: '20px'
  }
}));

const OneGoods = ({match}) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const product = useSelector(state => state.goods.oneProduct);

  const id = match.params.id;

  useEffect(() => {
    dispatch(fetchOneGoods(id));
  }, [dispatch, id]);

  console.log(product)

  return (
    <>
      {product && (<Grid container direction="column">
        <Grid item className={classes.grid}>
          <Typography variant="h4">{product.title}</Typography>
        </Grid>
        <Grid container item direction="row" className={classes.grid}>
          <Grid item xs={4}>
            <CardMedia
              image={apiURL + '/' + product.image}
              title={product.title}
              className={classes.media}
            />
          </Grid>
          <Grid item>
            <Typography variant="body2" className={classes.grid}>
              seller: <strong className={classes.strong}>{product.user.displayName}</strong>
            </Typography>
            <Typography>phone: {product.user.phone}</Typography>
            <Typography>description: {product.description}</Typography>
            <Typography variant="body2" className={classes.grid}>
              category: <strong className={classes.strong}>{product.category.title}</strong>
            </Typography>
          </Grid>
        </Grid>
      </Grid>)}
    </>
  );
};

export default OneGoods;