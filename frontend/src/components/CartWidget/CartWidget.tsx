import React, { useState } from "react";
import { Box, IconButton, Tooltip, Menu, MenuItem, Divider } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArchiveIcon from "@mui/icons-material/Archive"; 

const CartWidget = ({ sx }: any) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const onMenuOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const onMenuClose = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ ...sx }}>
      <Tooltip title="Shopping Cart" enterDelay={700} enterNextDelay={450}>
        <IconButton onClick={onMenuOpen}>
          <ShoppingCartIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={onMenuClose}
      >
        <MenuItem>
          <ArchiveIcon sx={{ mr: 1 }} /> Item Name
        </MenuItem>
        <Divider />
        <MenuItem>
          <ArchiveIcon sx={{ mr: 1 }} /> Item Name
        </MenuItem>
        <Divider />
        <MenuItem>
          <ArchiveIcon sx={{ mr: 1 }} /> Item Name
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default CartWidget;
