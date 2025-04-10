import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  IconButton,
  AppBar,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import { useRouter } from "next/router";
import { useState } from "react";

const drawerWidth = 240;

const Sidebar = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { text: "Daftar Produk", icon: <LocalMallIcon />, path: "/list-produk" },
    { text: "Pusat Bantuan", icon: <LiveHelpIcon />, path: "/pusat-bantuan" },
    { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
    { text: "Logout", icon: <ExitToAppIcon />, path: "/login" },
  ];

  const drawerContent = (
    <div>
      <Toolbar />
      <List>
        {menuItems.map((item) => {
          const isActive = router.pathname === item.path;
          return (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => {
                  router.push(item.path);
                  if (isMobile) setMobileOpen(false); // auto close saat di HP
                }}
                selected={isActive}
                sx={{
                  ...(isActive && {
                    bgcolor: "black",
                    color: "black",
                    "& .MuiListItemIcon-root": { color: "black" },
                  }),
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  return (
    <>
      {/* AppBar untuk tombol toggle di mobile */}
      {isMobile && (
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              color="red"
              // edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography className="text-black" variant="h6" noWrap>
              Ardi Store
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      {/* Drawer untuk desktop */}
      <Box component="nav">
        <Drawer
          variant={isMobile ? "temporary" : "permanent"}
          open={isMobile ? mobileOpen : true}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // improve performance on mobile
          }}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>
    </>
  );
};

export default Sidebar;
