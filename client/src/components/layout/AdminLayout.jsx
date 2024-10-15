import {
  Box,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { gray } from "../../constant/color";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "../styles/StyledComponents";
import {
  Dashboard as DashboardIcon,
  ManageAccounts as ManageAccountsIcon,
  Groups as GroupsIcon,
  Message as MessageIcon,
} from "@mui/icons-material";

const adminTabs = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "Users",
    path: "/admin/users-management",
    icon: <ManageAccountsIcon />,
  },
  {
    name: "Chats",
    path: "/admin/chats-management",
    icon: <GroupsIcon />,
  },
  {
    name: "Messages",
    path: "/admin/messages",
    icon: <MessageIcon />,
  },
];

const Sidebar = ({ w = "100%" }) => {
  return (
    <Stack width={w} direction={"column"} p={"3rem"} spacing={"3rem"}>
      <Typography variant="h5" textTransform={"uppercase"}>
        Admin
      </Typography>

      <Stack spacing={"1rem"}>
        {adminTabs.map((i) => (
          <>
            <Link key={i.path} to={i.path}>
              <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                {i.icon}
                <Typography>{i.name}</Typography>
              </Stack>
            </Link>
          </>
        ))}
      </Stack>
    </Stack>
  );
};

const AdminLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobile = () => {
    setIsMobile(!isMobile);
  };

  const handleClose = () => setIsMobile(false);

  return (
    <Grid container minHeight={"100vh"}>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "fixed",
          right: "1rem",
          top: "1rem",
        }}
      >
        <IconButton onClick={handleMobile}>
          {isMobile ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>

      <Grid
        item
        md={4}
        lg={3}
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <Sidebar />
      </Grid>

      <Grid item xs={12} md={8} lg={9} sx={{ bgcolor: gray }}>
        {children}
      </Grid>

      <Drawer open={isMobile} onClick={handleClose}>
        <Sidebar w="50vw" />
      </Drawer>
    </Grid>
  );
};

export default AdminLayout;
