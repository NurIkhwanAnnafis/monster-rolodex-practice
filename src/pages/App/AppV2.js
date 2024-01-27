import './styles/App.css';
import React, { useContext, useEffect } from 'react';
import CardList from '../../components/card-list/card-list'
import { AppContext } from './context/ContextProvider';
import Search from '../../components/search-box/search';
import { requestToken } from '../utils/firebase';

const AppV2 = () => {
  const {
    monsters,
    setSearchField,
  } = useContext(AppContext);

  useEffect(() => {
    requestToken();
  }, [])

  return (
    <div className="App">
      <h1>Monster Rolodex V2</h1>
      <Search setSearchField={setSearchField} />
      <CardList monsters={monsters} />
    </div>
  );
  
}

export default AppV2;
