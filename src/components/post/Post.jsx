import "./post.css";
import { MoreVert } from "@material-ui/icons";
import {Users} from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  // Like functionality
  // take the like count from the dummy data
  const [like, setLike] = useState(post.like);
  // Initially put like = false (no like already)
  const [isLiked, setIsLiked] = useState(false);

  // Onclick like button
  const likeHandler = () => {
    // if already like then dislike, else like
    setLike(isLiked ? like-1 : like+1);
    // flip the isliked
    setIsLiked(!isLiked);
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" onClick = {likeHandler}  alt="" />
            <img className="likeIcon" src="assets/heart.png" onClick = {likeHandler} alt="" />
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
