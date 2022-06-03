import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">MB Admin</span>
            </div>

            <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className='icon' />
                    <span>Dashboard</span>
                </li>
                <p className="title">LIST</p>
                <li>
                    <PersonIcon className='icon' />
                    <span>Users</span>
                </li>
                <li>
                    <HomeIcon className='icon' />
                    <span>Products</span>
                </li>
                <li>
                    <LocalShippingIcon className='icon' />
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <InsertChartIcon className='icon' />
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsActiveIcon className='icon' />
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <FavoriteIcon className='icon' />
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyIcon className='icon' />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className='icon' />
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleIcon className='icon' />
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className='icon' />
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>

        </div>
    </div>
  )
}

export default Sidebar