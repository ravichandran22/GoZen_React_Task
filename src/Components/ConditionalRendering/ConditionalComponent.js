import React, {useState} from 'react';

const ConditionalComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  }
  return ( 
    <div>
      <button type='button' onClick={toggleLogin}>{isLoggedIn ? 'Logout' : 'Login'}</button>
      {isLoggedIn ? <p>Welcome User!</p> : <p>Please log in</p>}
    </div>
  ) 
};

export default ConditionalComponent;
