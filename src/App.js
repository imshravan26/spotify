import react, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import Player from "./player";
import { getTokenFromUrl } from './spotify';
import spotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from './DataLayer';
const spotify = new spotifyWebApi();
function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();
  

  //Run a peice of code when some conditions is applied
  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = "";
    
    if(_token){
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
        
      })
      
    }

  }, []);

  return (
    <div className="App">
      {token ? (<Player />):( <Login /> )}
    </div>
  );
}

export default App;
