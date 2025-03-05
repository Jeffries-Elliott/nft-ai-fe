"use client"

import { useState } from "react";
import PageBackground from "@/components/PageBackground";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTranslations } from "next-intl";
import AuctionHistory from "./_components/AuctionHistory";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3, pt: 2 }}>{children}</Box>}
    </div>
  );
}

export default function Profile() {
  const [value, setValue] = useState(0);
  const t = useTranslations();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{bgcolor: "background.default", marginTop: "300px", minHeight: "100vh"}}>
      <PageBackground imageUrl="https://picsum.photos/600/300?Profile" />

      <Box sx={{ width: '100%' }}>
        <Box
          sx={{
            position: 'sticky',
            top: 64,
            zIndex: 100,
            backgroundColor: 'background.default',
            borderBottom: 1,
            borderColor: 'divider'
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="profile tabs"
            sx={{ px: 3 }}
          >
            <Tab label={t("Auction History")} />
            <Tab label={t("Favorites")} />
            <Tab label={t("Bid History")} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <AuctionHistory />
        </TabPanel>

        <TabPanel value={value} index={1}>
          {/* Favorites content */}
        </TabPanel>

        <TabPanel value={value} index={2}>
          {/* Bid History content */}
        </TabPanel>
      </Box>
    </Box>
  );
}
