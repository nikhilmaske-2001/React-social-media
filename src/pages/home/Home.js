import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function Home() {
    return (
        <>
            <Topbar/>
            <Sidebar/>
            <Rightbar/>
            <Feed/>
        </>
    )
}

