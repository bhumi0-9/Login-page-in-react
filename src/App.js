import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const switchToSignUp = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  return (
    <div className="App">
      {isLogin ? (
        <Login switchToSignUp={switchToSignUp} />
      ) : (
        <SignUp switchToLogin={switchToLogin} />
      )}
    </div>
  );
}

export default App;