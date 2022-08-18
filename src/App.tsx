import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componentes/header/index';

function App() {
  const minhaVariavel = <div>Olá eu sou um código JSX</div>
  return (
    <div className="App">
      <Header/>
      <div className='meu-texto'>Meu primeiro componente</div>
    </div>
  );
}

export default App;
