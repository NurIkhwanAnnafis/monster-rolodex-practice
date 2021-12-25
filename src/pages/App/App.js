import './styles/App.css';
import React, { useContext } from 'react';
import { CardList } from '../../components/card-list/card-list'
import { AppContext } from './context/ContextProvider';
import { Search } from '../../components/search-box/search';

const App = () => {
  const context = useContext(AppContext)
  const {
    monsters,
    setSearchField,
  } = context.useModelList();

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <Search setSearchField={setSearchField} />
      <CardList monsters={monsters} />
    </div>
  );
  
}

export default App;
