import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { THEME_OPTIONS, type ThemeName } from "../theme";

const drawerWidth = 240;
const navItems = [
  ["Home", "home"],
  ["Expertise", "expertise"],
  ["Experience", "history"],
  ["Projects", "projects"],
  ["Contact", "contact"],
] as const;

interface NavigationProps {
  onThemeChange: (theme: ThemeName) => void;
  theme: ThemeName;
}

function Navigation({ onThemeChange, theme }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (section: string) => {
    setMobileOpen(false);
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const drawer = (
    <Box className="navigation-drawer">
      <div className="mobile-menu-top">
        <span className="brand-chip">PH</span>
        <div>
          <p>Prasanna H</p>
          <span>Backend + AI portfolio</span>
        </div>
      </div>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton
              sx={{ textAlign: "left" }}
              onClick={() => scrollToSection(item[1])}
            >
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div className="theme-switcher theme-switcher-mobile" role="tablist" aria-label="Theme palette">
        {THEME_OPTIONS.map((option) => (
          <button
            key={option.value}
            className={`theme-option${theme === option.value ? " is-active" : ""}`}
            onClick={() => onThemeChange(option.value)}
            role="tab"
            aria-selected={theme === option.value}
            type="button"
          >
            {option.label}
          </button>
        ))}
      </div>
      <Button
        className="nav-cta mobile-nav-cta"
        endIcon={<ArrowOutwardIcon />}
        onClick={() => scrollToSection("contact")}
      >
        Start a project
      </Button>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        id="navigation"
        className={`site-appbar${scrolled ? " is-scrolled" : ""}`}
        elevation={0}
      >
        <Toolbar className="navigation-bar">
          <button
            className="brand-lockup"
            onClick={() => scrollToSection("home")}
            type="button"
          >
            <span className="brand-chip">PH</span>
            <span className="brand-copy">
              <strong>Prasanna H</strong>
            </span>
          </button>
          <Box className="desktop-nav" sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <Button
                key={item[0]}
                className="nav-link"
                onClick={() => scrollToSection(item[1])}
              >
                {item[0]}
              </Button>
            ))}
          </Box>
          <div className="theme-switcher" role="tablist" aria-label="Theme palette">
            {THEME_OPTIONS.map((option) => (
              <button
                key={option.value}
                className={`theme-option${theme === option.value ? " is-active" : ""}`}
                onClick={() => onThemeChange(option.value)}
                role="tab"
                aria-selected={theme === option.value}
                type="button"
              >
                {option.label}
              </button>
            ))}
          </div>
          <Button
            className="nav-cta desktop-nav-cta"
            endIcon={<ArrowOutwardIcon />}
            onClick={() => scrollToSection("contact")}
            sx={{ display: { xs: "none", md: "inline-flex" } }}
          >
            Start a project
          </Button>
          <IconButton
            className="nav-menu-button"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              padding: "1.25rem",
              borderLeft: "1px solid var(--drawer-border)",
              background: "var(--drawer-surface)",
              backdropFilter: "blur(18px)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;
