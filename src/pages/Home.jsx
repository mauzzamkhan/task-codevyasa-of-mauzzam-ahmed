import React, { useState } from "react";
import { createStyles, makeStyles, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  Avatar,
  Badge,
  Button,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import logo from "../assets/icons/logo.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CustomizedButtons from "../components/CustomizedButtons";
import userpic from "../assets/user.png";
import plus from "../assets/icons/plus_Icons.svg";
import { DropDownIcon, FilterIcon, PlusIcon } from "../components/Icons";
import CustomizedTabs from "../components/CustomizedTabs";
import "./Home.css";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import InputBase from "@mui/material/InputBase";
import { alpha } from "@mui/material/styles";
import EnhancedTable from "../components/EnhancedTable";

const drawerWidth = 240;
// const useStyles = makeStyles((theme) =>
//   createStyles({
//     drawerPaper: {
//       justifyContent: "space-between",
//     },
//   })
// );

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  //   zIndex: theme.zIndex.drawer + 1,
  marginLeft: drawerWidth,
  width: `calc(100% - ${drawerWidth}px`,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const UserProfile = styled("div")(({ theme }) => ({
  padding: "12px",
  backgroundColor: "#F3F4F6",
  display: "flex",
  alignItems: "center",
  borderRadius: "8px",
}));
const UserName = styled("div")(({ theme }) => ({
  fontSize: "16px",
  marginRight: "8px",
}));
// Styled Badge component
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-dot": {
    width: "10px",
    height: "10px",
    backgroundColor: "#D34645",
    border: "1px solid #FFFFFF",
    position: "absolute",
    top: 7,
    right: 7,
    borderRadius: "100%",
  },
}));

function PersistentDrawer() {
  return (
    <Drawer
      anchor="right"
      open={true} // Initially open, you can control this with a state if needed
      variant="persistent"
      sx={{
        width: "20%",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "20%",
        },
      }}
    >
      {/* Content for persistent drawer */}
      {/* You can add your filter options or any other content here */}
      Filter Options
    </Drawer>
  );
}
const Root = styled.div`
  display: flex;
  transition: width 0.5s;
  gap: 16px;
`;

const Content = styled.div`
  flex: 1;
`;
const CustomDiv = styled.div`
  padding: 4px 8px 4px 24px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d1d5db;
`;
const FilterBody = styled.div`
  padding: 28px 24px;
  display: flex;
  gap: 20px;
  flex-direction: column;
`;
const CustomInput = styled(TextField)({
  "& label": {
    fontSize: "12px",
    color: "#6B7280",
    marginBottom: "4px",
  },
  "& input": {
    width: "100%",
    margin: "0px",
    padding: "10px 16px",
    fontSize: "16px",
    color: "#374151",
    border: "1px solid #374151",
    borderRadius: "4px",
  },
  "& input::placeholder": {
    fontSize: "16px",
    color: "#374151",
  },
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: "4px",
    color: "#6B7280",
    textAlign: "start",
    width: "100%",
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#fff",
    border: "1px solid",
    color: "#374151",
    borderColor: "#D1D5DB",
    fontSize: "16px",
    width: "100%",
    padding: "10px 16px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
    "&:focus": {
      boxShadow: `
        0 0 0 0.2rem ${alpha("#209,213,219", 0.25)}      `,
      borderColor: "#D1D5DB",
    },
    "& input::placeholder": {
      fontSize: "16px",
      color: "#374151",
    },
  },
}));

const CusLabel = styled("label")`
  font-size: 12px;
  color: #6b7280;
  margin-top: 4px;
  text-align: start;
  width: 100%;
  display: block;
`;

const StyledSelect = styled(Select)(({ theme }) => ({
  "& .MuiSelect-root": {
    width: "100%",
    padding: "10px 16px",
    fontSize: "16px",
    borderRadius: 4,
    backgroundColor: "#fff",
    border: "1px solid",
    borderColor: "#D1D5DB",
    color: "#374151",
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
    "&:focus": {
      borderColor: "#D1D5DB",
    },
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: "16px",
}));

const DrawerContainer = styled("div")`
  width: 20%;
  transition: width 0.5s;
  background-color: #fff;
`;

const Home = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [value, setValue] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState("0%");

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
    setDrawerWidth(openDrawer ? "0%" : "20%");
    console.log(openDrawer, "openDrawer", drawerWidth, "drawerWidth");
  };

  const closeDrawer = () => {
    setOpenDrawer(false);
    setDrawerWidth("0%");
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
    console.log(showFilters, "showFilters");
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    { label: "Paris Olympic 2024 - 300" },
    { label: "T20 World Cup 2024 - 200" },
    { label: "Manchester United - 200" },
    { label: "Mumbai City FC - 220" },
    { label: "Motorsports - 10" },
  ];
  const tabPanels = [
    { content: "Tab 1 content" },
    { content: "Tab 2 content" },
    { content: "Tab 3 content" },
  ];

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          sx={{
            zIndex: 0,
            borderBottom: "solid 1px #EBECF2",
            boxShadow: "none",
            width: `calc(100% - ${open ? drawerWidth : 64}px)`, // Adjusted width
            marginLeft: open ? drawerWidth : 64, // Adjusted marginLeft
            p: { xs: 0, md: 2 },
          }}
        >
          <Toolbar sx={{ padding: "0!important" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              color="headings"
              sx={{
                display: { xs: "block" },
                fontSize: "32px",
                fontWeight: "700",
                color: "#8D7855",
              }}
            >
              MUI
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                sx={{ mr: 3 }}
              >
                <StyledBadge variant="dot" color="error">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5001 21V21.875C17.5001 22.8033 17.1313 23.6935 16.475 24.3499C15.8186 25.0063 14.9283 25.375 14.0001 25.375C13.0718 25.375 12.1816 25.0063 11.5252 24.3499C10.8688 23.6935 10.5001 22.8033 10.5001 21.875V21M23.3888 19.2188C21.9845 17.5 20.993 16.625 20.993 11.8863C20.993 7.54689 18.777 6.00087 16.9532 5.25002C16.7109 5.15048 16.4829 4.92189 16.4091 4.67306C16.0891 3.58423 15.1923 2.62502 14.0001 2.62502C12.8079 2.62502 11.9105 3.58478 11.5938 4.67416C11.52 4.92572 11.292 5.15048 11.0497 5.25002C9.22368 6.00197 7.00993 7.54252 7.00993 11.8863C7.0072 16.625 6.01571 17.5 4.61134 19.2188C4.02946 19.9309 4.53915 21 5.55688 21H22.4488C23.461 21 23.9674 19.9276 23.3888 19.2188Z"
                      stroke="#374151"
                      stroke-width="1.49003"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>{" "}
                </StyledBadge>
              </IconButton>

              <UserProfile>
                <Avatar
                  sx={{ width: 28, height: 28, marginRight: 1.5 }}
                  src={userpic}
                />
                <UserName>Matthews Gill</UserName>
                <IconButton
                  aria-label="account of current user"
                  aria-controls={"1"}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.46389 8.54509L12.0047 15.0858L18.5454 8.54509C18.9359 8.15457 19.5691 8.15457 19.9596 8.54509C20.3501 8.93562 20.3501 9.56878 19.9596 9.9593L12.7118 17.2071C12.5242 17.3947 12.2699 17.5 12.0047 17.5C11.7395 17.5 11.4851 17.3947 11.2976 17.2071L4.04968 9.9593C4.00086 9.91049 3.95815 9.85788 3.92154 9.80243C3.66526 9.41428 3.70797 8.8868 4.04968 8.54509C4.4402 8.15457 5.07337 8.15457 5.46389 8.54509Z"
                      fill="#374151"
                    />
                  </svg>
                </IconButton>
              </UserProfile>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={"1"}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          open={open}
          sx={{
            "& .MuiDrawer-paper": {
              justifyContent: "space-between",
              background: "linear-gradient(to bottom, #3F4852, #040304)",
              zIndex: 10,
            },
          }}
        >
          <Box className="test">
            <DrawerHeader>
              <Avatar alt="logo" sx={{ width: 40, height: 40 }} src={logo} />
            </DrawerHeader>
            <Divider />
            <List sx={{ color: "white" }}>
              {/* {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text, index) => ( */}
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_10_2942)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.5 3.5C2.5 2.67158 3.17158 2 4 2H16C16.8285 2 17.5 2.67158 17.5 3.5V22H4C3.17158 22 2.5 21.3284 2.5 20.5V3.5Z"
                          fill="white"
                          stroke="white"
                          stroke-width="1.2"
                          stroke-linejoin="round"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.5 12C17.5 11.4477 17.9477 11 18.5 11H20.5C21.0523 11 21.5 11.4477 21.5 12V20.5C21.5 21.3285 20.8285 22 20 22H17.5V12Z"
                          stroke="white"
                          stroke-width="1.2"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.5 6H9.5"
                          stroke="#4B5563"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.5 9.5H11.5"
                          stroke="#4B5563"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_10_2942">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  </ListItemIcon>
                  <ListItemText
                    primary={"Home"}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="26"
                      height="22"
                      viewBox="0 0 26 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.999878"
                        y="1"
                        width="24"
                        height="20"
                        rx="2"
                        fill="white"
                      />
                      <path
                        d="M0.999878 3C0.999878 1.89543 1.89531 1 2.99988 1H22.9999C24.1044 1 24.9999 1.89543 24.9999 3V19.8889C24.9999 20.1836 24.8945 20.4662 24.707 20.6746C24.5194 20.8829 24.2651 21 23.9999 21H1.99988C1.73466 21 1.48031 20.8829 1.29277 20.6746C1.10523 20.4662 0.999878 20.1836 0.999878 19.8889V3Z"
                        stroke="white"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M0.999878 10L24.9999 10"
                        stroke="#4B5563"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M0.989502 15.5H25.0103"
                        stroke="#4B5563"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.43994 1V21"
                        stroke="#4B5563"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  </ListItemIcon>
                  <ListItemText
                    primary={"Analytics"}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 21.4V2.6C2 2.26863 2.26863 2 2.6 2H21.4C21.7314 2 22 2.26863 22 2.6V21.4C22 21.7314 21.7314 22 21.4 22H2.6C2.26863 22 2 21.7314 2 21.4Z"
                        fill="white"
                        stroke="white"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6 18V14H8V18H6Z"
                        fill="#4B5563"
                        stroke="#4B5563"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path d="M6 6H18H6Z" fill="#4B5563" />
                      <path
                        d="M6 6H18"
                        stroke="#4B5563"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path d="M6 10H18H6Z" fill="#4B5563" />
                      <path
                        d="M6 10H18"
                        stroke="#4B5563"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path d="M12 14H18H12Z" fill="#4B5563" />
                      <path
                        d="M12 14H18"
                        stroke="#4B5563"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path d="M12 18H18H12Z" fill="#4B5563" />
                      <path
                        d="M12 18H18"
                        stroke="#4B5563"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  </ListItemIcon>
                  <ListItemText
                    primary={"journal"}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_10_2998)">
                        <path
                          d="M0.5 23.5H23.5"
                          stroke="white"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                        />
                        <path
                          d="M4.5 19C4.5 18.8674 4.44732 18.7402 4.35355 18.6464C4.25979 18.5527 4.13261 18.5 4 18.5H2C1.86739 18.5 1.74021 18.5527 1.64645 18.6464C1.55268 18.7402 1.5 18.8674 1.5 19V23.5H4.5V19Z"
                          fill="white"
                          stroke="white"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                        />
                        <path
                          d="M10.5 14C10.5 13.8674 10.4473 13.7402 10.3536 13.6464C10.2598 13.5527 10.1326 13.5 10 13.5H8C7.86739 13.5 7.74021 13.5527 7.64645 13.6464C7.55268 13.7402 7.5 13.8674 7.5 14V23.5H10.5V14Z"
                          fill="white"
                          stroke="white"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                        />
                        <path
                          d="M16.5 16C16.5 15.8674 16.4473 15.7402 16.3536 15.6464C16.2598 15.5527 16.1326 15.5 16 15.5H14C13.8674 15.5 13.7402 15.5527 13.6464 15.6464C13.5527 15.7402 13.5 15.8674 13.5 16V23.5H16.5V16Z"
                          fill="white"
                          stroke="white"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                        />
                        <path
                          d="M22.5 9C22.5 8.86739 22.4473 8.74021 22.3536 8.64645C22.2598 8.55268 22.1326 8.5 22 8.5H20C19.8674 8.5 19.7402 8.55268 19.6464 8.64645C19.5527 8.74021 19.5 8.86739 19.5 9V23.5H22.5V9Z"
                          fill="white"
                          stroke="white"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                        />
                        <path
                          d="M3 13C3.82843 13 4.5 12.3284 4.5 11.5C4.5 10.6716 3.82843 10 3 10C2.17157 10 1.5 10.6716 1.5 11.5C1.5 12.3284 2.17157 13 3 13Z"
                          fill="white"
                          stroke="white"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                        />
                        <path
                          d="M9 8C9.82843 8 10.5 7.32843 10.5 6.5C10.5 5.67157 9.82843 5 9 5C8.17157 5 7.5 5.67157 7.5 6.5C7.5 7.32843 8.17157 8 9 8Z"
                          fill="white"
                          stroke="white"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                        />
                        <path
                          d="M15 10C15.8284 10 16.5 9.32843 16.5 8.5C16.5 7.67157 15.8284 7 15 7C14.1716 7 13.5 7.67157 13.5 8.5C13.5 9.32843 14.1716 10 15 10Z"
                          fill="white"
                          stroke="white"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                        />
                        <path
                          d="M21 3.5C21.8284 3.5 22.5 2.82843 22.5 2C22.5 1.17157 21.8284 0.5 21 0.5C20.1716 0.5 19.5 1.17157 19.5 2C19.5 2.82843 20.1716 3.5 21 3.5Z"
                          fill="white"
                          stroke="white"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                        />
                        <path
                          d="M4.26099 10.45L7.84799 7.46"
                          stroke="white"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                        />
                        <path
                          d="M10.424 6.974L13.577 8.025"
                          stroke="white"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                        />
                        <path
                          d="M19.8 2.9L16.041 7.285"
                          stroke="white"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_10_2998">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  </ListItemIcon>
                  <ListItemText
                    primary={"journal"}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
            {/* <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List> */}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-start", pl: 1.5 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              sx={{
                //   marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              {/* <MenuIcon /> */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_10_3029)">
                  <path
                    d="M11.06 4.66669C11.0595 4.75443 11.0763 4.8414 11.1095 4.92263C11.1427 5.00385 11.1915 5.07773 11.2533 5.14002L18.1133 12L11.2533 18.86C11.1441 18.9876 11.087 19.1516 11.0935 19.3194C11.1 19.4872 11.1696 19.6463 11.2883 19.7651C11.407 19.8838 11.5662 19.9533 11.734 19.9598C11.9017 19.9663 12.0658 19.9092 12.1933 19.8L20 12L12.1933 4.19336C12.0997 4.10162 11.9812 4.0395 11.8525 4.01476C11.7238 3.99003 11.5907 4.00377 11.4697 4.05428C11.3488 4.10478 11.2454 4.18981 11.1726 4.29873C11.0997 4.40765 11.0605 4.53564 11.06 4.66669Z"
                    fill="white"
                  />
                  <path
                    d="M3.72662 4.66669C3.72612 4.75443 3.74293 4.8414 3.77611 4.92263C3.80929 5.00385 3.85817 5.07773 3.91996 5.14002L10.78 12L3.91996 18.86C3.81074 18.9876 3.75367 19.1516 3.76015 19.3194C3.76663 19.4872 3.83619 19.6463 3.95491 19.7651C4.07364 19.8838 4.2328 19.9533 4.40059 19.9598C4.56837 19.9663 4.73242 19.9092 4.85996 19.8L12.6666 12L4.85996 4.19336C4.76637 4.10162 4.64782 4.0395 4.51912 4.01476C4.39042 3.99003 4.25729 4.00377 4.13636 4.05427C4.01543 4.10478 3.91207 4.18981 3.8392 4.29873C3.76632 4.40765 3.72717 4.53564 3.72662 4.66669Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_10_3029">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="matrix(0 -1 -1 0 24 24)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </IconButton>
            <IconButton
              onClick={handleDrawerClose}
              sx={{
                //   marginRight: 5,
                ...(!open && { display: "none" }),
              }}
            >
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_10_3029)">
                    <path
                      d="M12.94 4.66669C12.9405 4.75443 12.9237 4.8414 12.8905 4.92263C12.8573 5.00385 12.8085 5.07773 12.7467 5.14002L5.88667 12L12.7467 18.86C12.8559 18.9876 12.913 19.1516 12.9065 19.3194C12.9 19.4872 12.8304 19.6463 12.7117 19.7651C12.593 19.8838 12.4338 19.9533 12.266 19.9598C12.0983 19.9663 11.9342 19.9092 11.8067 19.8L4 12L11.8067 4.19336C11.9003 4.10162 12.0188 4.0395 12.1475 4.01476C12.2762 3.99003 12.4093 4.00377 12.5303 4.05428C12.6512 4.10478 12.7546 4.18981 12.8274 4.29873C12.9003 4.40765 12.9395 4.53564 12.94 4.66669Z"
                      fill="white"
                    />
                    <path
                      d="M20.2734 4.66669C20.2739 4.75443 20.2571 4.8414 20.2239 4.92263C20.1907 5.00385 20.1418 5.07773 20.08 5.14002L13.22 12L20.08 18.86C20.1893 18.9876 20.2463 19.1516 20.2398 19.3194C20.2334 19.4872 20.1638 19.6463 20.0451 19.7651C19.9264 19.8838 19.7672 19.9533 19.5994 19.9598C19.4316 19.9663 19.2676 19.9092 19.14 19.8L11.3334 12L19.14 4.19336C19.2336 4.10162 19.3522 4.0395 19.4809 4.01476C19.6096 3.99003 19.7427 4.00377 19.8636 4.05427C19.9846 4.10478 20.0879 4.18981 20.1608 4.29873C20.2337 4.40765 20.2728 4.53564 20.2734 4.66669Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_10_3029">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="matrix(0 -1 1 0 0 24)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </IconButton>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Root>
            <Content>
              <Box sx={{ marginBottom: 4 }}>
                <CustomizedTabs
                  value={value}
                  onChange={handleChange}
                  tabs={tabs}
                  variant="fullWidth"
                  tabPanels={tabPanels} // Pass the tabPanels prop
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "end",
                  marginBottom:3
                }}
              >
                <Box>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Search
                  </InputLabel>
                  <BootstrapInput defaultValue="Search" id="bootstrap-input" />
                </Box>
                <Box sx={{ display: "flex", gap: "16px" }}>
                  <CustomizedButtons variant="contained" icon={<PlusIcon />}>
                    Add Products
                  </CustomizedButtons>
                  <CustomizedButtons
                    variant="outlined"
                    icon={<FilterIcon />}
                    onClick={toggleDrawer}
                  >
                    Filter
                  </CustomizedButtons>
                  <CustomizedButtons
                    variant="third"
                    //   className="outlinedLite"
                    icon={<FilterIcon />}
                    onClick={toggleDrawer}
                  >
                    Export
                  </CustomizedButtons>
                </Box>
              </Box>
                <EnhancedTable/>
            </Content>
            <Box
              sx={{
                width: openDrawer ? "20%" : 0,
                display: openDrawer ? "block" : "none",
                backgroundColor: "#fff",
              }}
            >
              <CustomDiv>
                <Box sx={{ alignItems: "center", display: "flex" }}>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    color="headings"
                    align="center"
                    sx={{ lineHeight: "20px" }}
                  >
                    MUI
                  </Typography>
                </Box>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={"2"}
                  aria-haspopup="true"
                  onClick={closeDrawer}
                  color="inherit"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.997 6.40944L17.5873 4.99973L11.9984 10.5886L6.40959 4.99973L4.99988 6.40944L10.5887 11.9983L4.99988 17.5872L6.40959 18.9969L11.9984 13.408L17.5873 18.9969L18.997 17.5872L13.4082 11.9983L18.997 6.40944Z"
                      fill="#9CA3AF"
                    />
                  </svg>
                </IconButton>
              </CustomDiv>
              <FilterBody>
                {/* <CustomInput
                  label="Custom Input"
                  placeholder="Enter your text"
                /> */}
                <Box>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Product Name
                  </InputLabel>
                  <BootstrapInput
                    defaultValue="Test Product Name"
                    id="bootstrap-input"
                  />
                </Box>
                <Box>
                  <CusLabel>Select Option</CusLabel>
                  <StyledSelect
                    defaultValue="Category"
                    input={<BootstrapInput />}
                  >
                    <StyledMenuItem value="Category" disabled>
                      Category
                    </StyledMenuItem>
                    <StyledMenuItem value={10}>Option 1</StyledMenuItem>
                    <StyledMenuItem value={20}>Option 2</StyledMenuItem>
                    <StyledMenuItem value={30}>Option 3</StyledMenuItem>
                  </StyledSelect>
                </Box>
                <Box>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Event Name
                  </InputLabel>
                  <BootstrapInput
                    defaultValue="Event Name"
                    id="bootstrap-input"
                  />
                </Box>
                <Box>
                  {" "}
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Match Name
                  </InputLabel>
                  <BootstrapInput
                    defaultValue=" Test Match Name"
                    id="bootstrap-input"
                  />
                </Box>
                <Box>
                  <CusLabel>Team</CusLabel>
                  <StyledSelect defaultValue="Team" input={<BootstrapInput />}>
                    <StyledMenuItem value="Team" disabled>
                      Team
                    </StyledMenuItem>
                    <StyledMenuItem value={10}>Option 1</StyledMenuItem>
                    <StyledMenuItem value={20}>Option 2</StyledMenuItem>
                    <StyledMenuItem value={30}>Option 3</StyledMenuItem>
                  </StyledSelect>
                </Box>
              </FilterBody>
            </Box>
          </Root>
        </Box>
      </Box>
    </>
  );
};

export default Home;
