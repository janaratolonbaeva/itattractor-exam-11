import React, {useEffect} from 'react';
import {Grid, makeStyles, Typography} from "@material-ui/core";
import GoodsForm from "../../components/GoodsForm/GoodsForm";
import {useDispatch, useSelector} from "react-redux";
import {postGoods} from "../../store/actions/goodsActions";
import {fetchCategories} from "../../store/actions/categoriesActions";

const useStyle = makeStyles({
  grid: {
    marginBottom: '30px'
  }
});

const NewGoods = ({history}) => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories);
  const classes = useStyle();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const changeHandlerSubmit = async goods => {
    dispatch(postGoods(goods));
    history.push('/');
  }

  return (
    <Grid container direction="column">
      <Grid item xs className={classes.grid}>
        <Typography variant="h3">Add New Goods</Typography>
      </Grid>
      <Grid item xs={8}>
        <GoodsForm
          onSubmit={changeHandlerSubmit}
          categories={categories}
        />
      </Grid>
    </Grid>
  );
};

export default NewGoods;