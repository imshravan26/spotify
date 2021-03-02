import react from 'react';
import "./sidebar.css";
import { useDataLayerValue } from './DataLayer';
import SidebarOption from './sidebarOption';
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"

function Sidebar () {
    const [{ playlists }, dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img className="sidebar_logo" src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt=""/>
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

            <br/>
            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr/>
            {playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} />
            ))}
            
            
        </div>
    );
}

export default Sidebar;