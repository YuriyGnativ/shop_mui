import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Tooltip,
  Menu,
  MenuItem,
  ListItemIcon,
  Avatar,
  Divider
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ManuIcon from "@mui/icons-material/Menu";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import PersonAdd from "@mui/icons-material/PersonAdd";
import { styled } from "@mui/material/styles";
import StyledSearch from "../StyledSearch";
import CartWidget from "../CartWidget";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderRadius: "5px",
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <StyledAppBar position="static">
        <Toolbar
          sx={{
            minHeight: { xs: "56px" },
          }}
        >
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              mr: 2,
              alignItems: "center",
              pointerEvents: "none",
            }}
          >
            <IconButton
              sx={{
                mr: 1,
              }}
            >
              <DevicesOtherIcon />
            </IconButton>
            <Typography variant="h6">Hardware Store</Typography>
          </Box>
          <IconButton sx={{ display: { xs: "flex", sm: "none" }, mr: 2 }}>
            <ManuIcon />
          </IconButton>
          <StyledSearch />
          <CartWidget sx={{ ml: "auto" }} />
          <div>
            <Tooltip
              title="Account Settings"
              enterDelay={700}
              enterNextDelay={450}
            >
              <IconButton onClick={handleMenu} sx={{ ml: 1 }}>
                <AccountCircle />
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
              onClose={handleClose}
            >
              <MenuItem>
                <Avatar sx={{ mr: 1 }} /> Profile
              </MenuItem>
              <MenuItem>
                <Avatar sx={{ mr: 1 }} /> My account
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};

export default Header;
