import React from 'react';
import {Link} from "react-router-dom";
import {Button, makeStyles} from "@material-ui/core";
import {logoutUser} from "../../../../store/actions/usersActions";
import {useDispatch} from "react-redux";

const useStyle = makeStyles({
  text: {
    marginRight: '20px',
    verticalAlign: 'middle'
  },
  strong: {
    textTransform: 'uppercase'
  }
});

const UserMenu = ({user}) => {
  const classes = useStyle();
  const dispatch = useDispatch();

  return (
    <>
      <span className={classes.text}>Hello <strong className={classes.strong}>{user}</strong>!</span>
      <Button component={Link} to="/new-goods" color="inherit">Add new post</Button>
      <Button
        component={Link}
        to="/logout"
        color="inherit"
        onClick={() => dispatch(logoutUser())}
      >
        Logout
      </Button>
    </>
  );
};

export default UserMenu;