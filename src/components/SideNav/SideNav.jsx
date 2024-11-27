import './SideNav.css';
import Profile from './Profile/Profile';

import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import { Outlet, Link } from "react-router-dom";

import EmergencyOutlinedIcon from '@mui/icons-material/EmergencyOutlined';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import CorporateFareRoundedIcon from '@mui/icons-material/CorporateFareRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">
                            <Stack alignItems="center" direction="row" gap={1} backgroundColor= 'transparent'>
                                <SpaceDashboardOutlinedIcon/>Dashboard
                            </Stack>
                        </Link>
                    </li>

                    <li>
                        <Link to="/patients">
                            <Stack alignItems="center" direction="row" gap={1} backgroundColor= 'transparent'>
                                <PermIdentityOutlinedIcon/>Patients
                            </Stack>
                        </Link>
                    </li>

                    <li>
                        <Link to="/employee">
                            <Stack alignItems="center" direction="row" gap={1} backgroundColor= 'transparent'>
                                <MedicalInformationOutlinedIcon/>Employee
                            </Stack>
                        </Link>
                    </li>


                    <li>
                        <Link to="/department">
                            <Stack alignItems="center" direction="row" gap={1} backgroundColor= 'transparent'>
                                <CorporateFareRoundedIcon/>Department
                            </Stack>
                        </Link>
                    </li>


                    <li>
                        <Link to="/about">
                            <Stack alignItems="center" direction="row" gap={1} backgroundColor= 'transparent'>
                                <InfoOutlinedIcon/>About
                            </Stack>
                        </Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>

    )
}


const SideNav = () => {
    const user = {
        name: "Nguyễn Hữu Trí",
        specialty: "Manager",
        imageUrl: "https://i.pinimg.com/originals/f6/18/a6/f618a6c98af14d68c79e7ebd582718ba.jpg", // Replace with an actual URL
    };

    // const [activeLink, setActiveLink] = useState('home'); // Default active link
    // // Function to handle click and update the active link
    // const handleLinkClick = (link) => {
    //     setActiveLink(link);
    // };
    
    return (
        <div className="sidebar">
            
            <div className="logo">
                <Stack alignItems="center" direction="row" gap={1} backgroundColor= 'transparent'>
                    <EmergencyOutlinedIcon sx={{ fontSize: 28 }}/>Logo
                </Stack>
            </div>

            <Layout/>

            <Profile user={user} />
        </div>
    )
}
export default SideNav;