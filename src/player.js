import react from 'react';
import Sidebar from './sidebar';
import Body from './body';
import Footer from './footer';
import "./player.css";


function Player({ spotify }) {
    return (
        <div className="Player">
            <div className="player_body">
                <Sidebar />
                <Body spotify={spotify} />
            </div>
            <Footer />
        </div>
    );
}

export default Player;