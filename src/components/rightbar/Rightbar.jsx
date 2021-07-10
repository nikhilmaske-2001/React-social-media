import "./rightbar.css";
export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText"> <b>Sinchan</b> and <b>2 other friends</b> have a birthday today</span>
                </div>
            </div>
            <img src="assets/ad.png" alt="" className="rightbarAd" />
            <h4 className="rightbarTitle">Online friends</h4>
            <ul className="rightbarFriendList">
                <l1 className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
                    <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Oggy</span>
                </l1>
                <l1 className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
                    <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Oggy</span>
                </l1>
                <l1 className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
                    <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Oggy</span>
                </l1>
                <l1 className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
                    <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Oggy</span>
                </l1>
                <l1 className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                        <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
                    <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Oggy</span>
                </l1>
            </ul>
        </div>
    )
}

