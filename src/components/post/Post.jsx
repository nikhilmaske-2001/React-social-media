import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import {format} from "timeago.js";

export default function Post({ post }) {
  // Like functionality
  // take the like count from the db
  const [like, setLike] = useState(post.likes.length);
  // Initially put like = false (no like already)
  const [isLiked, setIsLiked] = useState(false);

  // Onclick like button
  const likeHandler = () => {
    // if already like then dislike, else like
    setLike(isLiked ? like-1 : like+1);
    // flip the isliked
    setIsLiked(!isLiked);
  }
  // PUBLIC FOLDER
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  // Set the user so that we can use its data in this file
  const [user, setUser] = useState({});

  // Fetch the user data
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`user/${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={user.profilePicture || PF+"person/noAvatar.png"} alt=""
            />
            <span className="postUsername">
              {user.username}
            </span>
            <span className="postDate">{format(post.createdAt)}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF+post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={`${PF}like.png`} onClick = {likeHandler}  alt="" />
            <img className="likeIcon" src={`${PF}heart.png`} onClick = {likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
