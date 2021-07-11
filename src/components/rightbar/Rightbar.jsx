import "./rightbar.css";
import {Users} from "../../dummyData";
import Online from "../online/Online";

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
               {Users.map((u) => (
                   <Online key = {u.id} user = {u}/>
               ))}
            </ul>
        </div>
    )
}

