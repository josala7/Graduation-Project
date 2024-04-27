/* eslint-disable react/prop-types */
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2, borderRadius: "6px", bgcolor: "#f5f5f5" }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function AppTabs({ tabs }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Stack>
      <Tabs value={selectedTab} aria-label="icon label tabs example">
        {tabs.map((tab, index) => (
          <React.Fragment key={tab.tabName}>
            <Tab
              sx={
                selectedTab === index
                  ? {
                      borderRadius: "20px 20px 0px 0px",
                      bgcolor: "#eee",
                      color: "#1976d2",
                      gap: 1,
                      fontSize: "16px",
                      fontWeight: "bold",
                      px: 3,
                    }
                  : {
                      gap: 1,
                      fontSize: "16px",
                      fontWeight: "bold",
                      py: 1,
                      px: 4,
                    }
              }
              key={tab.tabName}
              icon={tab.tabIcon}
              label={tab.tabName}
              iconPosition="start"
              onClick={() => handleChange(index)}
            />
          </React.Fragment>
        ))}
      </Tabs>

      {tabs.map((tab, index) => (
        <>
          <TabPanel value={selectedTab} index={index} key={tab.tabName}>
            {tab.tabContent}
          </TabPanel>
        </>
      ))}
    </Stack>
  );
}

export default AppTabs;
