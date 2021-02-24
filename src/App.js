import react, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';

function App() {
  const [token, setToken] = useState(null);


  //Run a peice of code when some conditions is applied
  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = "";
    console.log("I have a token", _token );
    
    if(_token){
      setToken(_token);
    }

  }, []);
  return (
    <div className="App">
      {token ? (<h1>I am Logged in</h1>):( <Login /> )}
    </div>
  );
}

export default App;
