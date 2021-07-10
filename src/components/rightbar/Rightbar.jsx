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
        </div>
    )
}

