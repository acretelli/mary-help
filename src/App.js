import React, { useState, useMemo } from 'react';
import Router from './utils/Router';

import { GlobalStyle } from './styles/globalStyle'
import { UserContext } from './components/UserContext';

function App() {
  const [ user, setUser ] = useState({});

  const providerUser = useMemo(() => ({user, setUser}), [user, setUser])

  return (
    <div className="App">
      <GlobalStyle />
      <UserContext.Provider value={providerUser}>
        <Router />
      </UserContext.Provider>
    </div>
  );
}

export default App;
