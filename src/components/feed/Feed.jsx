import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  // 1. Call this useEffect when the Feed() is called only, that why [] is used at last
  // 2. We will need to use async and await but we can't user it in useEffect, so making another function inside it
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts/timeline/60f2613898733b19e9649d79");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post = {p}/>
        ))}
      </div>
    </div>
  );
}
