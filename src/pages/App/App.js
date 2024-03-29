import './styles/App.css';
import React, { useContext, useEffect } from 'react';
import CardList from '../../components/card-list/card-list'
import { AppContext } from './context/ContextProvider';
import Search from '../../components/search-box/search';
import { requestToken } from '../utils/firebase';

const App = () => {
  const {
    monsters,
    setSearchField,
  } = useContext(AppContext);

  useEffect(() => {
    requestToken();
  }, [])

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <Search setSearchField={setSearchField} />
      <CardList monsters={monsters} />
    </div>
  );
  
}

export default App;
