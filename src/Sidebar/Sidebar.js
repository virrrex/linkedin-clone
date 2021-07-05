import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import "./Sidebar.css";

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://media-exp3.licdn.com/dms/image/C5616AQFDhihGV317JQ/profile-displaybackgroundimage-shrink_350_1400/0/1618682084857?e=1631145600&v=beta&t=hL2pc81Gsv-zsGuHa8t2a_HlwkgV0SS-Mc9GR-5215g" alt=""/>
                <Avatar src={user.photoUrl} className="sidebar__avatar"/>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">3,743</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">3,011</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('webdevelopment')}
                {recentItem('sde')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar;
