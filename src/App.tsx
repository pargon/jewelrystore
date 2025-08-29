import React from 'react';
import { AppProvider } from './context/AppContext';
import AppRouter from './components/AppRouter';
import './index.css';

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="App">
        <AppRouter />
      </div>
    </AppProvider>
  );
};

export default App;