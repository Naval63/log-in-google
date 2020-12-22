import React,{ useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import PrivatePage from './PrivatePage'
import PublicPage from './PublicPage'
import PrivateRouter from './PrivateRoute'
import PublicRouter from './PublicRoute'
import {GoogleAuthContext} from './googleAuth'
import Profile from './Profile'
import './App.css';

function App() {
  const ctx = useContext(GoogleAuthContext);
  console.log(ctx);
  return (
    <div className="App">
      <Profile />
      <BrowserRouter>
        <PrivateRouter path="/private" component={PrivatePage} />                
        <PublicRouter path="/" component={PublicPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
