import React, {useEffect} from 'react';
import {makeStyles, MenuList, Paper} from "@material-ui/core";
import {fetchCategories} from "../../../store/actions/categoriesActions";
import {useDispatch, useSelector} from "react-redux";
import ItemLink from "./ItemLink/ItemLink";
import {fetchGoods, fetchGoodsByCategories} from "../../../store/actions/goodsActions";

const useStyle = makeStyles({
  root: {
    minWidth: '250px',
    marginRight: '30px',
    marginTop: '92px'
  }
});

const Sidebar = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories);
  const classes = useStyle();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const onClickFetchGoodsByCategory = (id) => {
    dispatch(fetchGoodsByCategories(id))
  };

  return (
    <Paper className={classes.root}>
      <MenuList>
        <ItemLink title="all items"/>
        {categories && categories.map(item => (
          <ItemLink
            key={item._id}
            onClick={() => onClickFetchGoodsByCategory(item._id)}
            title={item.title}/>
        ))}
      </MenuList>
    </Paper>
  );
};

export default Sidebar;