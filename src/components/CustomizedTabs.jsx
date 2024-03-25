import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import { TabPanel } from "@mui/lab";

const CustomTabs = styled(Tabs)(({ theme }) => ({
  backgroundColor: "transparent", // Transparent background
  gap: "8px", // Gap between tabs
  //   margin: '0 -8px', // Negative margin to create space between tabs

  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
}));

const CustomTab = styled(Tab)(({ theme }) => ({
  flexGrow: 1, // Take available width
  maxWidth: "none",
  borderRadius: 8,
  color: "#424242",
  backgroundColor: "#fff",
  border: `1px solid #D0C2AA`,
  padding: "10px 16px",
  fontSize: "16px",
  lineHeight: "20px",
  maxHeight: "48px",
  "&.Mui-selected": {
    color: "#fff",
    backgroundColor: "#A88650",
    border: "none",
  },
  "&.MuiTab-indicator": {
    backgroundColor: "red", // Color of the indicator (underline) for the active tab
  },
  "&.MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.Mui-selected": {
    fontWeight: "bold",
  },
}));

function CustomizedTabs({ value, onChange, tabs ,tabPanels}) {
  return (

    <>
      <CustomTabs
        value={value}
        onChange={onChange}
        sx={{
          "& .MuiTabs-flexContainer": {
            gap: "8px", // Gap between tabs
          },
        }}
      >
        {tabs.map((tab, index) => (
          <CustomTab key={index} label={tab.label} {...a11yProps(index)} />
        ))}
      </CustomTabs>
      {/* {tabPanels.map((panel, index) => (
        <TabPanel key={index} value={value} index={index}>
          {panel.content}
        </TabPanel>
      ))} */}
     
    </>
  );
}
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default CustomizedTabs;
