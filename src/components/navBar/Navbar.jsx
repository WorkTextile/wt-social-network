import "./navbar.scss";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Logo = styled.img`
    width: 200px;
    height: 80px;
    display: flex;
    align-items: center;
`;

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{ textDecoration: "none"}}>
                    <Logo src={logo}/>
                </Link>
                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Recherche..." />
                </div>
                <div className="icons">
                    <HomeOutlinedIcon />
                    <DarkModeOutlinedIcon />
                    <GridViewOutlinedIcon/>
                </div>
            </div>
            <div className="right">
                <PersonOutlinedIcon />
                <EmailOutlinedIcon />
                <NotificationsOutlinedIcon />
                <div className="user">
                    <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile-image" />
                    <span>Angela</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar;