import "./SideNav.css";
import Profile from "./Profile/Profile";
import LogoCorner from '../LogoCorner/LogoCorner'

import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import { Outlet, Link, NavLink } from "react-router-dom";


import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import MedicalInformationOutlinedIcon from "@mui/icons-material/MedicalInformationOutlined";
import CorporateFareRoundedIcon from "@mui/icons-material/CorporateFareRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Layout = () => {
  return (
    <>
      <nav>
            <NavLink to="/home" className={({ isActive }) => (isActive ? "li active" : "li")}>
              <Stack
                alignItems="center"
                direction="row"
                gap={1}
                backgroundColor="transparent"
              >
                <SpaceDashboardOutlinedIcon />
                Dashboard
              </Stack>
            </NavLink>

            <NavLink to="/patients" className={({ isActive }) => (isActive ? "li active" : "li")}>
              <Stack
                alignItems="center"
                direction="row"
                gap={1}
                backgroundColor="transparent"
              >
                <PermIdentityOutlinedIcon />
                Patients
              </Stack>
            </NavLink>

            <NavLink to="/employee" className={({ isActive }) => (isActive ? "li active" : "li")}>
              <Stack
                alignItems="center"
                direction="row"
                gap={1}
                backgroundColor="transparent"
              >
                <MedicalInformationOutlinedIcon />
                Employee
              </Stack>
            </NavLink>

            <NavLink to="/department" className={({ isActive }) => (isActive ? "li active" : "li")}>
              <Stack
                alignItems="center"
                direction="row"
                gap={1}
                backgroundColor="transparent"
              >
                <CorporateFareRoundedIcon />
                Department
              </Stack>
            </NavLink>

            <NavLink to="/about" className={({ isActive }) => (isActive ? "li active" : "li")}>
              <Stack
                alignItems="center"
                direction="row"
                gap={1}
                backgroundColor="transparent"
              >
                <InfoOutlinedIcon />
                About
              </Stack>
            </NavLink>
      </nav>

      <Outlet />
    </>
  );
};

export const SideNav = () => {
  const user = {
    name: "Nguyễn Hữu Trí",
    specialty: "Manager",
    imageUrl:
      "https://i.pinimg.com/originals/f6/18/a6/f618a6c98af14d68c79e7ebd582718ba.jpg", // Replace with an actual URL
  };

  // const [activeLink, setActiveLink] = useState('home'); // Default active link
  // // Function to handle click and update the active link
  // const handleLinkClick = (link) => {
  //     setActiveLink(link);
  // };

  return (
    <div className="sidebar">
      <LogoCorner/>
      <Layout/>

      <Profile user={user} />
    </div>
  );
};
export default SideNav;
