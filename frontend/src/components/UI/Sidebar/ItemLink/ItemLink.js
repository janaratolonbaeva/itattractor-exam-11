import React from 'react';
import {MenuItem} from "@material-ui/core";

const ItemLink = ({onClick, title}) => {
  return (
    <MenuItem onClick={onClick} color="inherit">{title}</MenuItem>
  );
};

export default ItemLink;