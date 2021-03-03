import react from 'react';
import './footer.css';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import AlbumIcon from '@material-ui/icons/Album';

function Footer () {
    return (
        <div className="footer">
            <div className="footer__left">
                {/* <img className="footer__albumlogo" src="" alt=""/> */}
                <AlbumIcon className="footer__albumlogo" />
                <div className="song__info">
                    <h4>Yeah!</h4>
                    <p>Quazi</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineOutlinedIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div> 
            <div className="footer__right">
             <Grid container spacing={2}>
                 <Grid item>
                     <PlaylistPlayIcon />
                 </Grid>
                 <Grid item>
                     <VolumeDownIcon />
                 </Grid>
                 <Grid item xs>
                     <Slider />
                 </Grid>
             </Grid>
            </div>
        </div>
    );
}

export default Footer;