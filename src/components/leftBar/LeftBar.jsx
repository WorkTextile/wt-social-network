import "./leftBar.scss";
import {MdOutlineMail}  from 'react-icons/md'
import {MdOutlineNotificationsNone} from 'react-icons/md'
import {MdOutlinePeopleAlt} from 'react-icons/md';
import {MdOutlinePostAdd}  from 'react-icons/md'
import {MdFolderOpen}  from 'react-icons/md'
import {MdOutlinePhotoCamera}  from 'react-icons/md'
import {MdOutlineVideocam}  from 'react-icons/md'
import {MdOutlineFormatQuote}  from 'react-icons/md'
import {MdOutlineCalendarToday}  from 'react-icons/md'
import {GiSewingMachine}  from 'react-icons/gi'
import {MdCardMembership}  from 'react-icons/md'
import {BiNews}  from 'react-icons/bi'

const LeftBar = () => {
    return (
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                    <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile-image" />
                    <span>Angela</span>
                    </div>
                    <div className="item">
                        <MdOutlineNotificationsNone />
                        <span>Notifications</span>
                    </div>
                    <div className="item">
                        <MdOutlineMail />
                        <span>Messages</span>
                    </div>
                    <div className="item">
                        <MdOutlinePeopleAlt />
                        <span>Mes Amis</span>
                    </div>
                    <div className="item">
                        <MdOutlinePostAdd />
                        <span>Mes Posts</span>
                    </div>
                    <div className="item">
                        <MdFolderOpen />
                        <span>Mes Projets</span>
                    </div>
                    <div className="item">
                        <MdOutlinePhotoCamera />
                        <span>Photos</span>
                    </div>
                    <div className="item">
                        <MdOutlineVideocam />
                        <span>Vidéos</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <div className="span">
                        Mes demandes
                    </div>
                    <div className="item">
                        <MdOutlineFormatQuote />
                        <span>Demande de Cotations</span>
                    </div>
                    <div className="item">
                        <MdOutlineCalendarToday />
                        <span>Prendre un Rendez-vous</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                <div className="span">
                        Les raccourcis
                    </div>
                    <div className="item">
                        <GiSewingMachine />
                        <span>Productions</span>
                    </div>
                    <div className="item">
                        <MdCardMembership />
                        <span>Membres</span>
                    </div>
                    <div className="item">
                        <BiNews />
                        <span>Actualités</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBar;