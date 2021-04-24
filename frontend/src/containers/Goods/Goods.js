import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Sidebar from "../../components/UI/Sidebar/Sidebar";
import {Grid, makeStyles, Typography} from "@material-ui/core";
import {fetchGoods, fetchGoodsByCategories} from "../../store/actions/goodsActions";
import GoodsItem from "../../components/GoodsItem/GoodsItem";

const useStyle = makeStyles({
  title: {
    marginBottom: '20px'
  }
});

const Goods = () => {
  const dispatch = useDispatch();
  const goods = useSelector(state => state.goods.goods);
  const classes = useStyle();

  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

  return (
    <Grid container>
      <Grid item>
        <Sidebar />
      </Grid>
      <Grid item xs>
        <Typography variant="h2" className={classes.title}>All items</Typography>
        <Grid container justify="space-between">
          {goods && goods.map(item => (
            <GoodsItem
              key={item._id}
              title={item.title}
              id={item._id}
              image={item.image}
              description={item.description}
              displayName={item.user && item.user.displayName}
              phone={item.user && item.user.phone}
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Goods;