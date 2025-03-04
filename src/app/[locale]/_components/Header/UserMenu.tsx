"use client";

import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import TranslateIcon from "@mui/icons-material/Translate";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter, usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useColorScheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useAccount, useDisconnect } from "wagmi";

export default function UserMenu({ color }: { color: string }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations();
  const { disconnect } = useDisconnect();
  const { isConnected } = useAccount();

  const { mode, systemMode, setMode } = useColorScheme();
  const currentMode = useMemo(
    () => (systemMode ? systemMode : mode),
    [mode, systemMode]
  );
  if (!mode) return null;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = () => {
    const newLocale = locale === "en" ? "zh" : "en";
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
    handleClose();
  };

  const handleLogout = () => {
    disconnect();
    router.replace("/");
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        sx={{ color, display: { xs: "none", md: "block" } }}
      >
        <AccountCircleIcon fontSize="large" />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: 50 }}
      >
        <MenuItem onClick={() => router.push("/profile")}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          {t("Profile")}
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <PeopleIcon fontSize="small" />
          </ListItemIcon>
          {t("Followers")}
        </MenuItem>
        <Divider />

        <MenuItem>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          {t("Settings")}
        </MenuItem>

        <MenuItem onClick={handleLanguageChange} sx={{ width: 210 }}>
          <ListItemIcon>
            <TranslateIcon fontSize="small" />
          </ListItemIcon>
          {locale === "en" ? t("Switch to Chinese") : t("Switch to English")}
        </MenuItem>

        <MenuItem
          onClick={() => setMode(currentMode === "dark" ? "light" : "dark")}
        >
          <ListItemIcon>
            {currentMode === "dark" ? (
              <LightModeIcon fontSize="small" />
            ) : (
              <DarkModeIcon fontSize="small" />
            )}
          </ListItemIcon>
          {currentMode === "dark" ? t("Light mode") : t("Dark mode")}
        </MenuItem>
        {isConnected ? <Divider /> : null}

        {isConnected ? (
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            {t("Log out")}
          </MenuItem>
        ) : null}
      </Menu>
    </>
  );
}
