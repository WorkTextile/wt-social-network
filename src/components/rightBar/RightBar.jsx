import "./rightBar.scss";

const RightBar = () => {
    return (
        <div className="rightBar">
            <div className="container">
                <div className="item">
                    <span>Suggestions pour vous</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="user-image" />
                            <span>Angela</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="user-image" />
                            <span>Angela</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="item">
                    <span>Activité Récent</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                            alt="user-image" 
                            />
                            <p>
                                <span>Angela</span> changed their cover picture
                            </p>
                        </div>
                        <span> 1 min ago </span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                            alt="user-image" 
                            />
                            <p>
                                <span>Angela</span> changed their cover picture
                            </p>
                        </div>
                        <span> 1 min ago </span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                            alt="user-image" 
                            />
                            <p>
                                <span>Angela</span> changed their cover picture
                            </p>
                        </div>
                        <span> 1 min ago </span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                            alt="user-image" 
                            />
                            <p>
                                <span>Angela</span> changed their cover picture
                            </p>
                        </div>
                        <span> 1 min ago </span>
                    </div>
                </div>
                <hr />
                <div className="item">
                    <span>Amis en ligne</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                            alt="user-image" 
                            />
                            <div className="online" />
                            <span>Angela</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                            alt="user-image" 
                            />
                            <div className="online" />
                            <span>Angela</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                            alt="user-image" 
                            />
                            <div className="online" />
                            <span>Angela</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                            alt="user-image" 
                            />
                            <div className="online" />
                            <span>Angela</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightBar;