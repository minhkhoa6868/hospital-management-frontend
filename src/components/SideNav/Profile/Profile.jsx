import './Profile.css';
import React from "react";

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Profile = ({ user }) => {
    return (
        <div className="container">
            <div className="userInfo">
            <img
                src={user.imageUrl || <AccountCircleOutlinedIcon/>} // Replace with a default image URL if no user image is available
                alt="User Profile"
                className="profileImage"
            />
            <div>
                <p className="userName">{user.name}</p>
                <p className="userSpecialty">{user.specialty}</p>
            </div>
            </div>
        </div>
    )
}

export default Profile;