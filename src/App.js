import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Component/Home';
import Produits from './Component/Produits';


class App extends React.Component {
  render() {
    return (
      <> 
      <header>
        <nav>
          
        </nav>
      </header>
      <Link to="/" >Accueil</Link>
      <Link to="/Produits" >Produits</Link>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Produits" element={<Produits />} />

     </Routes>
      </>
    )
  }
}
export default App