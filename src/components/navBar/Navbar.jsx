import "./navbar.scss";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Logo = styled.img`
    width: 200px;
    height: 80px;
    display: flex;
    align-items: center;
`;

const NavBar = () => {
    const { currentUser } = useContext(AuthContext);
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
                <HomeOutlinedIcon />
                <GridViewOutlinedIcon/>
            </div>
            <div className="right">
                <PersonOutlinedIcon />
                <EmailOutlinedIcon />
                <NotificationsOutlinedIcon />
                <div className="user">
                    <img 
                        src={currentUser.profilePic} 
                        alt="profile-image" 
                    />
                    <span>{currentUser.name}</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar;