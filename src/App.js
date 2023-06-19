import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';
import Navbar from './components/Navbar';
import { FavoritesProvider } from './components/FavoritesContext';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </FavoritesProvider>
  );
}

export default App;